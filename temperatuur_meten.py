import time

sensor_file = '/sys/bus/w1/devices/28-80000026eed3/w1_slave'

def read_temp_raw():
    f = open(sensor_file,'r')
    lines = f.readlines()
    f.close()
    return lines

def read_temp():
    lines = read_temp_raw()
    equals_pos = lines[1].find('t=')
    temperatuur = lines[1]
    temperatuur1 = temperatuur[29:]
    temperatuur2 = float(temperatuur1)/1000.0
    if equals_pos != -1:
        return ("%.1f" %(float(temperatuur2)))


