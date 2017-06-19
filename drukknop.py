import RPi.GPIO as GPIO
import time
import webbrowser

knoparray = []
drukknop = 21
led=11

GPIO.setmode(GPIO.BCM)
GPIO.setup(led, GPIO.OUT)
GPIO.setup(drukknop, GPIO.IN, pull_up_down=GPIO.PUD_UP)
knop = GPIO.input(drukknop)
i=1
while True:
    knop = GPIO.input(drukknop)
    if not knop:
        i+=1
        knoparray.append(i)
        time.sleep(0.5)
        if i == 0:
            GPIO.output(led, GPIO.HIGH)
        elif i ==1:
            webbrowser.open('http://localhost:8080', new=1)
            GPIO.output(led, GPIO.HIGH)
        elif i ==2:
            webbrowser.open('http://localhost:8080/news', new=1)
            GPIO.output(led, GPIO.HIGH)
        elif i == 3:
            webbrowser.open('http://localhost:8080/calendar', new=1)
            GPIO.output(led, GPIO.HIGH)
        elif i == 4:
            webbrowser.open('http://localhost:8080/fotoslider', new=1)
            GPIO.output(led, GPIO.HIGH)
        elif i == 5:
            del knoparray[:]
            i=0
            i+=1
            GPIO.output(led, GPIO.LOW)