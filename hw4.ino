//based off of the code graciously provided by Ayo 
#include <RFduinoGZLL.h>

device_t role = HOST;
char state = 0;
const int blueLed = 6;
const int redLed = 4;
const int piezo = 2;

int sound = 330;//E tone

void setup()
{
  Serial.begin(9600);
  Serial.print("This is your last chance. After this, there is no turning back.");
  Serial.print('\n');
  Serial.print("You take the blue pill -- the story ends,");  
  Serial.print('\n');
  Serial.print("you wake up in your bed and believe whatever you want to believe.");
  Serial.print('\n');
  Serial.print("You take the red pill -- you stay in Wonderland");
  Serial.print('\n');
  Serial.print("and I show you how deep the rabbit hole goes.");
  Serial.print('\n');
  }
  
  pinMode(redLed, OUTPUT);
  pinMode(blueLed, OUTPUT);
  // start the GZLL stack
  RFduinoGZLL.begin(role);
}

void loop()
{


}

void on() {
  digitalWrite(redLed, HIGH);
  digitalWrite(blueLed, HIGH);
  
}
void off() {
  digitalWrite(redLed, LOW);
  digitalWrite(blueLed, LOW);
}

void RFduinoGZLL_onReceive(device_t device, int rssi, char *data, int len)
{
  Serial.println(data);

  if (data[0] == '1') {
    Serial.print("Boo, lame.");
    digitalWrite(blueLed, HIGH);
    delay(50);
  } else {
    digitalWrite(blueLed, LOW);
  }

  else if (data[0] == '0') {
    Serial.print("ENTER THE MATRIX!");
    digitalWrite(redLed, HIGH);
    tone(piezo, sound, 100);
    delay(50); 
    
  } else {
    digitalWrite(redLed, LOW);
    digitalWrite(redLed, LOW);
    noTone;
  }
}
