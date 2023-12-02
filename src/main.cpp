#include <Arduino.h>
#include <WiFi.h>
#include <ESPAsyncWebServer.h>
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>

U8G2_SSD1306_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, U8X8_PIN_NONE, 5, 3);

const char *ssid = "DYNAMITE4G";
const char *pass = "Ahva05081120@";

const char *html = "<p>%PLACEHOLDER%</p>";


unsigned long previousMillis = 0;
const long interval = 10000;
unsigned long currentMillis;

AsyncWebServer server(80);

String processor(const String &var)
{
  Serial.println(var);

  if (var == "PLACEHOLDER")
    return "Hi";

  return String();
}

void setup()
{

  Serial.begin(115200);
  u8g2.begin(); 

  WiFi.begin(ssid, pass);

  previousMillis = currentMillis;

  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.println("Connecting to Wifi");

    currentMillis = millis();
    if (currentMillis - previousMillis >= interval)
    {
      Serial.println("Failed to connect");
    }
  }
  
  // I dont know how this code works, but i'll figure it out.
  do {
    u8g2.setFont(u8g2_font_t0_11_t_all);
    u8g2.setCursor(0, 24);
    u8g2.print(WiFi.localIP()); // displays the ipaddress 
  } while (u8g2.nextPage());

  server.on("/hello", HTTP_GET, [](AsyncWebServerRequest *request)
            { request->send_P(200, "text/html", html, processor); });

  server.begin();
}

void loop()
{
}
