from os import listdir
from os.path import isfile, join
import os

def ObtenerEnlacesImagenes(directorio):
    # Obtiene todos los archivos en el directorio
    enlaces = [join(directorio, f) for f in listdir(directorio) if isfile(join(directorio, f))]
    
    # Imprime la ruta completa de cada archivo
    for i in enlaces: 
        print(i)
        #if(str(i).endswith(".png") | str(i).endswith(".jpg")):
            
    
    return enlaces

# Llamada a la función con el directorio actual
enlaces = ObtenerEnlacesImagenes(os.getcwd() + "/src/assets/resources")
