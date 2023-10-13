#include <SPI.h>
#include <MFRC522.h>
#include <WiFi.h>
#include <ESPAsyncWebServer.h>
#include <WiFiMulti.h>
#include <ArduinoJson.h>
WiFiMulti wifiMulti;
#include "data.h"

#define RST_PIN  27
#define SS_PIN  5

const uint32_t TiempoEsperaWifi = 5000;
String lecturaUID = "";
bool rfidStatus = false;

MFRC522 mfrc522(SS_PIN, RST_PIN);
AsyncWebServer servidor(80);
AsyncEventSource eventos("/events");

void mensajeBase();
String almacenarUID(String variableUID);
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
  servidor.on("/data", HTTP_POST, [](AsyncWebServerRequest *request){
    StaticJsonDocument<1024> doc;
    String message;
    String json = request->getParam("plain")->value();
    
    // Parsea el cuerpo de la solicitud como JSON
    //DynamicJsonDocument doc(1024);
    deserializeJson(doc, json);

    DeserializationError error = deserializeJson(doc, json);

    // Verificar errores de análisis
    if (error) {
        Serial.print(F("Error al analizar el JSON: "));
        Serial.println(error.c_str());
        return;
      }
    
    // Accede a los datos en el objeto JSON
    rfidStatus = doc["enable"];
    
    // Haz algo con los datos aquí...
    
    //message = "Datos recibidos con éxito";
    //message = "No se recibieron datos";
    

    //request->send(200, "text/plain", message);
    Serial.print(rfidStatus);
  });


  SPI.begin();

  mfrc522.PCD_Init();
  mfrc522.PCD_SoftPowerDown();

  servidor.begin();
  Serial.println("Servidor HTTP iniciado");
}


void loop() {
  if(!rfidStatus){
    return;
  }

  Serial.print(rfidStatus);

  mfrc522.PCD_SoftPowerUp();

  if ( ! mfrc522.PICC_IsNewCardPresent()){
    return;
  }
  
  if ( ! mfrc522.PICC_ReadCardSerial()){
    return;
  }

  lecturaUID = almacenarUID(lecturaUID);

  sendMessage();

  lecturaUID = "";

  /*Serial.print("UID:");
  for (byte i = 0; i < mfrc522.uid.size; i++) {
    if (mfrc522.uid.uidByte[i] < 0x10){
      Serial.print(" 0");			
      }
      else{
      Serial.print(" ");
      }
    Serial.print(mfrc522.uid.uidByte[i], HEX);
  }*/
  Serial.println();
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
  Serial.println(lecturaUID);
  // Declare a buffer to hold the result
  char output[128];
  StaticJsonDocument<64> doc;

  //bool isValid = false;
  /*for (size_t i = 0; i < 2; i++)
  {
    if (validRFID[i].equals(lecturaUID))
    {
      isValid = true;
      break;
    }
  }*/

  //doc["status"] = isValid;
  doc["rfid_tag_id"] = lecturaUID;

  serializeJson(doc, output);
  eventos.send(output);
}