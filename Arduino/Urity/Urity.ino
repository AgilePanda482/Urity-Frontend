//Librerias Necesarias
#include <SPI.h>
//Libreria de NFC
#include <MFRC522.h>
//Libreria de pantalla
#include <LiquidCrystal_I2C.h>
//Libreria para servomotor
#include <Servo.h>
// libreria que permite establecer pines digitales para comunicacion serie
#include <SoftwareSerial.h>

//Especificamos dos pines del arduino
#define RST_PIN  9
#define SS_PIN  10
//Pines del servomotor
const int rs = 0, en = 1, d4 = 5, d5 = 4, d6 = 3, d7 = 2;
//pin 10 como RX, pin 11 como TX
SoftwareSerial miBT(5, 6);

//Variables
Servo puerta;
char dato;
int contador = 6;
int abrirPuerta = 115;
int cerrarPuerta = 0;
int tamanioArray;
//String inString = "";

//Creamos un objeto en la pantalla
LiquidCrystal_I2C lcd(0x27, 2, 1, 0, 4, 5, 6, 7);
//Crea objeto mfrc522 enviando pines de slave select y reset
MFRC522 mfrc522(SS_PIN, RST_PIN);

String usuarios[20] = {"043E41E2356D80", "043A3382366D80","043C23D2356D80",
"040A549A366D80","040A549A366D80"},
//Crea array para almacenar el UID leido
LecturaUID,
//Crea un array Aux para almacenar nuevas tarjetas
usuarioAux;

// UID de tarjeta leido en programa 1
/*byte Usuario1[7] = {0x04, 0x3E, 0x41, 0xE2, 0x35, 0x6D, 0x80};
// UID de llavero leido en programa 2
byte Usuario2[7] = {0x04, 0x3A, 0x33, 0x82, 0x36, 0x6D, 0x80};
//UID de llavero leido en programa 3
byte Usuario3[7] = {0x04, 0x1A, 0x0F, 0x42, 0x36, 0x6D, 0x80};
//UID de llavero leido en programa 4
byte Usuario4[7] = {0x04, 0x3C, 0x6D, 0x12, 0x36, 0x6D, 0x80};
//UID de llavero leido en programa 5
byte Usuario5[7] = {0x04, 0x3C, 0x23, 0xD2, 0x35, 0x6D, 0x80};
//UID de llavero leido en programa 6
byte Usuario6[7] = {0x04, 0x0A, 0x54, 0x9A, 0x36, 0x6D, 0x80};
//UID de llavero leido en programa 7
byte Usuario7[7] = {0x04, 0x2D, 0x20, 0x1A, 0x36, 0x6D, 0x80};*/

void setup(){

  lcd.setBacklightPin(3, POSITIVE);
  //lcd.setBacklight(LOW);
  //Declaramos que el pin 3 va a recibir datos
  puerta.attach(3);
  // inicializa comunicacion por monitor serie a 9600 bps
  Serial.begin(9600);
  // inicializa bus SPI
  SPI.begin();
  // inicializa modulo lector
  mfrc522.PCD_Init();
  //Inicializamos la pantalla
  lcd.begin(16,2);
  //Hace una comunicacion serial 38400 del modulo blutuch
  miBT.begin(38400);

  //Ponemos el servo en una pocicion de cerrado y Limpiamos la pantalla ademas escribimos texto
  puerta.write(cerrarPuerta);
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Bienvenido!");
  lcd.setCursor(0, 1);
  lcd.print("Pase su tarjeta");

  //Imprimimos en el monitor listo
  Serial.println("Listo");
}

void loop(){

  //Iniciamos el cursor de la pantalla en 0,0
  lcd.setCursor(0, 0);
  tamanioArray = sizeof(usuarios) / sizeof(usuarios[0]);

  if(Serial.available() > 0 || miBT.available() > 0){

    dato = miBT.read();

    switch (dato){
      case '1':
        //Cerramos el servo
        puerta.write(cerrarPuerta);
      break;

      case '2':
        //Abrimos el servo
        puerta.write(abrirPuerta);
      break;

      case '5':
        while(!mfrc522.PICC_IsNewCardPresent() || !mfrc522.PICC_ReadCardSerial()){
          if(contador > 50)
          {
            lcd.clear();
            lcd.setCursor(0,0);
            lcd.print("Limite");
            lcd.setCursor(0, 1);
            lcd.print("Alcanzado");

            delay(2500);

            return;
          }

          lcd.clear();
          lcd.setCursor(0,0);
          lcd.print("Inserte una");
          lcd.setCursor(0, 1);
          lcd.print("nueva tarjeta");

          delay(850);

          //idea para solucionar un bug, escrito el 17 de enero del 2023
        }/*else{
          Serial.println("USUARIO AUXILIAR");
          lcd.clear();
          lcd.setCursor(0,0);
          lcd.print("Leyendo...");

          //Funcion la cual almacena el UID leido
          usuarioAux = almacenarUID(usuarioAux);
          usuarios[contador] = usuarioAux;
          lcd.clear();
          lcd.setCursor(0,0);
          lcd.print("Tarjeta Leida");
          lcd.setCursor(0,1);
          lcd.print("Correctamente!");

          delay(2500);



          lcd.clear();
          lcd.setCursor(0, 0);
          lcd.print("Bienvenido!");
          lcd.setCursor(0, 1);
          lcd.print("Pase su tarjeta");
          usuarioAux = "";

          contador += 1;
        }*/

        Serial.println("USUARIO AUXILIAR");
        lcd.clear();
        lcd.setCursor(0,0);
        lcd.print("Leyendo...");

        //Funcion la cual almacena el UID leido
        usuarioAux = almacenarUID(usuarioAux);
        usuarios[contador] = usuarioAux;
        lcd.clear();
        lcd.setCursor(0,0);
        lcd.print("Tarjeta Leida");
        lcd.setCursor(0,1);
        lcd.print("Correctamente!");

        delay(2500);



        lcd.clear();
        lcd.setCursor(0, 0);
        lcd.print("Bienvenido!");
        lcd.setCursor(0, 1);
        lcd.print("Pase su tarjeta");
        usuarioAux = "";

        contador += 1;
      break;
      case '8':
      while(!mfrc522.PICC_IsNewCardPresent() || !mfrc522.PICC_ReadCardSerial()){
        lcd.clear();
        lcd.setCursor(0,0);
        lcd.print("Inserte la");
        lcd.setCursor(0,1);
        lcd.print("tarjeta");

        delay(850);
      }

      lcd.clear();
      lcd.setCursor(0,0);
      lcd.print("Leyendo...");
      usuarioAux = almacenarUID(usuarioAux);

      if(eliminarTarjetas(tamanioArray, usuarioAux)){
        lcd.clear();
        lcd.setCursor(0,0);
        lcd.print("Tarjeta");
        lcd.setCursor(0,1);
        lcd.print("Eliminada!");
        delay(2000);
      }else{
        lcd.clear();
        lcd.setCursor(0,0);
        lcd.print("Tarjeta NO");
        lcd.setCursor(0,1);
        lcd.print("Encontrada");
        delay(2000);
      }

      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Bienvenido!");
      lcd.setCursor(0, 1);
      lcd.print("Pase su tarjeta");
      usuarioAux = "";
      break;

      default:
        dato = ' ';
        return;
      break;
    }
    dato = ' ';
  }



  // si no hay una tarjeta presente
  if ( ! mfrc522.PICC_IsNewCardPresent()){
    // retorna al loop esperando por una tarjeta
    return;
  }

  // si no puede obtener datos de la tarjeta
  if ( ! mfrc522.PICC_ReadCardSerial()){
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("Leyendo, No");
    lcd.setCursor(0, 1);
    lcd.print("retirar tarjeta");
    delay(700);
    lcd.clear();

    lcd.print("Bienvenido!");
    lcd.setCursor(0, 1);
    lcd.print("Pase su tarjeta");
    // retorna al loop esperando por otra tarjeta
    return;
  }

  //Por lo visto, el RFID lee los numeros en decimales pero despues los pasa a hexadecimal ~Sebas
  //Funcion la cual almacena el UID leido
  LecturaUID = almacenarUID(LecturaUID);

  Serial.println(LecturaUID);

  if(comparaUID(tamanioArray, LecturaUID)){
    Serial.println("OK");
    imprimirAutorizado();
  }else{
    //sino imprime en el monitor no te conozco  y en la pantalla "Acceso no autorizado"
    lcd.clear();
    Serial.println("No te conozco ");
    //Serial.println(numTargeta);
    lcd.setCursor(0,0);
    lcd.print("Acceso NO");
    lcd.setCursor(0,1);
    lcd.print("Autorizado");
    //numTargeta = "";
  }


  //Esperamos 4seg
  delay(3400);
  LecturaUID = "";
  puerta.write(cerrarPuerta);
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Bienvenido!");
  lcd.setCursor(0, 1);
  lcd.print("Pase su tarjeta");

  // detiene comunicacion con tarjeta
  mfrc522.PICC_HaltA();

}

//Funcion que imprime acceso autorizado
void imprimirAutorizado(){
  lcd.clear();
  lcd.setCursor(0,0);
  lcd.print("Acceso");
  lcd.setCursor(0,1);
  lcd.print("Autorizado");
  puerta.write(abrirPuerta);
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
      //imprime un espacio en blanco
      Serial.print(" ");
    }

    //imprime el byte del UID leido en hexadecimal
    Serial.print(mfrc522.uid.uidByte[i], HEX);

    // almacena en String el byte del UID leido
    variableUID += String(mfrc522.uid.uidByte[i], HEX);

  }
  // imprime un espacio de tabulacion
  Serial.print("\t");

  variableUID.toUpperCase();

  return variableUID;
}

boolean comparaUID(int tamanio, String lectura){

  for(byte i = 0; i < tamanio; i++){

    Serial.println(usuarios[i]);

    if(usuarios[i] == NULL){
      Serial.println("Entre 1");
      return false;
    }
    else if(usuarios[i] == lectura){
      return true;
    }
  }

  Serial.println("entre 2");
  return false;

}

boolean eliminarTarjetas(int tamanio, String lectura){

  for(byte i = 0; i < tamanioArray; i++){

    Serial.println(usuarios[i]);
    if(lectura == usuarios[i]){
      usuarios[i] = "";
      return true;
    }
  }

  return false;
}