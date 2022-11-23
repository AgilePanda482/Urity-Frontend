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
int contador = 0;
//String inString = "";

//Creamos un objeto en la pantalla
LiquidCrystal_I2C lcd(0x27, 2, 1, 0, 4, 5, 6, 7);
//Crea objeto mfrc522 enviando pines de slave select y reset
MFRC522 mfrc522(SS_PIN, RST_PIN);

String usuarios[9];
//Crea array para almacenar el UID leido
byte LecturaUID[7];
//Crea un array Aux para almacenar nuevas tarjetas
byte UsuarioAux[7];
// UID de tarjeta leido en programa 1
byte Usuario1[7] = {0x04, 0x3E, 0x41, 0xE2, 0x35, 0x6D, 0x80};
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
byte Usuario7[7] = {0x04, 0x2D, 0x20, 0x1A, 0x36, 0x6D, 0x80};

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
  puerta.write(0);
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

  if(Serial.available() > 0 || miBT.available() > 0) {

    dato = miBT.read();

    if(dato == '2'){
      //Serial.println("Entre 2");
      puerta.write(180);
    }else if(dato == '1'){
      //Serial.println("Entre 1");
      puerta.write(0);
    }else if(dato == '5'){
      while(!mfrc522.PICC_IsNewCardPresent() || !mfrc522.PICC_ReadCardSerial()){
        if(contador > 8)
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

        delay(750);

        /*if(!mfrc522.PICC_IsNewCardPresent() || !mfrc522.PICC_ReadCardSerial()){
          delay(500);
        }else{
          break;        
        }*/

      }
      
      Serial.println("USUARIO AUXILIAR");
      lcd.clear();
      lcd.setCursor(0,0);
      lcd.print("Leyendo...");

      //Funcion la cual almacena el UID leido 
      //usuarios[contador] = String(mfrc522.uid.uidByte);
      
      almacenarUID(UsuarioAux);
      //Serial.println(usuarios[contador]);

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

      contador += 1;

    }else{
      dato = ' ';
      return;
    }
    dato = ' ';

      //Codigo ya no indispensable pero me da miedo borrarlo -Sebas
      /*do {
        if(usuarios[i] == "") {
            usuarios[i] = numTargeta;
            op = 1;
            i += 1;
        }
      }while(op==1);
          op=0;  
    }  */

      //int inChar = Serial.read();
      /*if(inChar != '\n') {
          inString += (char)inChar;
          //pe += (char)dato;
        } else {
          //Serial.println(dato);
          miBT.println(inString);
          if(inString == "open" || dato == '2'){
              puerta.write(180);
            }
          if(inString == "close" || dato == '1'){
              puerta.write(0);
            }
          inString = "";
          //pe = "";
        }
      */
  }
  //dato = ' ';
    
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
  almacenarUID(LecturaUID);
  
  //Comparamos si el UID leido es igual al usuario1 e imprimimos
  if(comparaUID(LecturaUID, Usuario1)){
    //Esto se imprime al monitor
    Serial.println("Bienvenido Sebastian!");
    //llamamos a una funcion
    imprimirAutorizado();
    //hacemos exactamente lo mismo con el usuario
  }else if(comparaUID(LecturaUID, Usuario2)){
    Serial.println("Bienvenido Rincon");
    imprimirAutorizado();
  }else if(comparaUID(LecturaUID, Usuario3)){
    Serial.println("Bienvenido Arantza");
    imprimirAutorizado();
  }else if(comparaUID(LecturaUID, Usuario4)){
    Serial.println("Bienvenido Cesar");
    imprimirAutorizado();
  }else if(comparaUID(LecturaUID, Usuario5)){
    Serial.println("Bienvenido Paquin");
    imprimirAutorizado();
  }else if(comparaUID(LecturaUID, Usuario6)){
    Serial.println("Bienvenido Diego");
    //Serial.print(numTargeta);
    imprimirAutorizado();
  }else if(comparaUID(LecturaUID, Usuario7)){
    Serial.println("Bienvenido Moreno");
    imprimirAutorizado();
  }else if(comparaUID(LecturaUID, UsuarioAux)){
    Serial.println("Ahuevo");
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
  puerta.write(0);
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Bienvenido!");
  lcd.setCursor(0, 1);
  lcd.print("Pase su tarjeta");

  // detiene comunicacion con tarjeta
  mfrc522.PICC_HaltA();
  
}


//funcion compara targetas
/*boolean comparaT(String targeta){

  for (byte i=0; i < 9; i++){
    if(targeta != usuarios[i]){
      return false; 
    }    
  }
  return true;
}*/


// funcion comparaUID
boolean comparaUID(byte lectura[],byte usuario[]){
  // bucle recorre de a un byte por vez el UID
  for (byte i=0; i < mfrc522.uid.size; i++){
    // si byte de UID leido es distinto a usuario
    if(lectura[i] != usuario[i]){     
      return false;
    }
  }
  
  // si los 4 bytes coinciden retorna verdadero
  return true;
}

//Funcion que imprime acceso autorizado
void imprimirAutorizado(){
  lcd.clear();
  lcd.setCursor(0,0);
  lcd.print("Acceso");
  lcd.setCursor(0,1);
  lcd.print("Autorizado");
  puerta.write(180);
  //numTargeta = "";
}

void almacenarUID(byte *variableUID){
  // muestra texto UID en el monitor:
  Serial.print("\n");
  Serial.print("UID:");

  // bucle recorre de a un byte por vez el UID (Esto lo imprime al monitor)
  for(byte i = 0; i < mfrc522.uid.size; i++){
    //si el byte leido es menor a 0x10
    if(mfrc522.uid.uidByte[i] < 0x10){        
      //imprime espacio en blanco y numero cero
      Serial.print(" 0"); 
    }else{
      //imprime un espacio en blanco        
      Serial.print(" ");
    }

    //imprime el byte del UID leido en hexadecimal
    Serial.print(mfrc522.uid.uidByte[i], HEX);

    // almacena en array el byte del UID leido
    variableUID[i] = mfrc522.uid.uidByte[i];

    //usuarios[0] += String(mfrc522.uid.uidByte[i]);    //Dieguiño      
  }

  // imprime un espacio de tabulacion  
  Serial.print("\t");
}