#include <SPI.h>
#include <MFRC522.h>
#include <WiFi.h>
#include <ESPAsyncWebServer.h>
#include <WiFiMulti.h>
#include <ArduinoJson.h>
WiFiMulti wifiMulti;
#include "page.h"

//Pines para el lector RFID
#define RST_PIN  27
#define SS_PIN  5

const uint32_t TiempoEsperaWifi = 5000;
String lecturaUID = "";
bool rfidStatus = false;

MFRC522 mfrc522(SS_PIN, RST_PIN);
AsyncWebServer servidor(80);
AsyncEventSource eventos("/events");

//Funcion para leer el UID de la tarjeta
String almacenarUID(String variableUID);
//Enviar JSON hacia Javascript
void sendMessage();

void setup() {
  Serial.begin(115200);
  while (!Serial);
  
  Serial.println("\nIniciando multi Wifi");

  wifiMulti.addAP(ssid_1, password_1);
  wifiMulti.addAP(ssid_2, password_2);

  WiFi.mode(WIFI_STA);
  Serial.print("Conectando a Wifi...");
  while (wifiMulti.run(TiempoEsperaWifi) != WL_CONNECTED) {
    Serial.print(".");
  }
  Serial.println("...Conectado");
  Serial.print("SSID:");
  Serial.print(WiFi.SSID());
  Serial.print(" ID:");
  Serial.println(WiFi.localIP());

  servidor.addHandler(&eventos);

  //Activamos la pagina web
  servidor.on("/", HTTP_GET, [](AsyncWebServerRequest *request) {
    Serial.println("Requesting index page...");
    request->send(200, "text/html", pagina);
  });

  //Estamos al pendiente si JavaScript nos envia un JSON
  servidor.onRequestBody( [](AsyncWebServerRequest *request, uint8_t *data, size_t len, size_t index, size_t total){
    if ((request->url() == "/data") && (request->method() == HTTP_POST)){
      const size_t        JSON_DOC_SIZE   = 512U;
      DynamicJsonDocument jsonDoc(JSON_DOC_SIZE);

      if (DeserializationError::Ok == deserializeJson(jsonDoc, (const char*)data)){
        //JsonObject obj = jsonDoc.as<JsonObject>()
        //Serial.println(obj["enable"].as<String>().c_str());

        rfidStatus = jsonDoc["enable"];
        request->send(200, "application/json", "{ \"status\": 0 }");
      }else {
        request->send(404, "application/json", "{ \"status\": 1 }");
      }
    }
  });

  SPI.begin();

  mfrc522.PCD_Init();
  mfrc522.PCD_SoftPowerDown();

  servidor.begin();
  Serial.println("Servidor HTTP iniciado");
}


void loop() {
  if ( !mfrc522.PICC_IsNewCardPresent() || !mfrc522.PICC_ReadCardSerial() || !rfidStatus){
    return;
  }

  mfrc522.PCD_SoftPowerUp();
  
  lecturaUID = almacenarUID(lecturaUID);

  sendMessage();

  lecturaUID = "";

  mfrc522.PICC_HaltA(); 
}


String almacenarUID(String variableUID){
  // muestra texto UID en el monitor:
  Serial.print("\n");
  Serial.print("UID:");

  // bucle recorre de a un byte por vez el UID (Esto lo imprime al monitor)
  for(byte i = 0; i < mfrc522.uid.size; i++){
    //si el byte leido es menor a 0x10
    if(mfrc522.uid.uidByte[i] < 0x10){
      //imprime espacio en blanco y numero cero
      Serial.print(" 0");
      variableUID += "0";

    }else{
      Serial.print(" ");
    }

    //imprime el byte del UID leido en hexadecimal
    Serial.print(mfrc522.uid.uidByte[i], HEX);

    // almacena en String el byte del UID leido
    variableUID += String(mfrc522.uid.uidByte[i], HEX);

  }
  Serial.print("\t");
  variableUID.toUpperCase();

  return variableUID;
}

void sendMessage()
{
  Serial.println("\n");
  Serial.println("Se enviara un JSON a Javascript con la siguiente información: ");
  Serial.println(lecturaUID);
  // Declare a buffer to hold the result
  char output[128];
  StaticJsonDocument<64> doc;

  doc["rfid_tag_id"] = lecturaUID;

  serializeJson(doc, output);
  eventos.send(output);
}