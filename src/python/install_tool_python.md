# Instalación Herramientas de Python

*   Python pip

		sudo apt-get install python-pip

*   Erppeek

    	sudo pip install erppeek

*   Pykwiki

		sudo pip install pykwiki

*   PlantUML

		sudo pip install plantuml

## Configurar utf8

    	sudo nano /usr/lib/python2.7/site.py

*	Modificar la linea que dice

       encoding = "ascii" # Default value set by _PyUnicode_Init()

*	Cambiar lo  palabra ascii por utf8. finalmente la linea quedaría:

    encoding = "utf8" # Default value set by _PyUnicode_Init()