# Instalar PhoneGap en Ubuntu 14.04

descargar phonepag en su versión más reciente

    wget https://github.com/phonegap/phonegap/archive/2.9.1.zip

Descomprimir la carpeta descargada. "En este caso tiene el nombrer de la version descargada de PhoneGap"

    unzip 2.9.1.zip

## Crear APP para Android desde PhoneGap y Utilizando Android Studio para Desarrollar

Ir a la carpeta de phonegap que acaba de descomprimir.

	cd phonegap-2.9.1/lib/android/bin/

Crear respaldo del archivo  create.

	cp create create_backup

#### Configurar phat el SDK de Android.

Android Studio nos descargo en su instalación el Android SDK. Este quedo en el directorio Home en una carpeta llamada Android.

Para configurar el phat del SDK de Android realizamos lo siguiente:

    nano ~/.bashrc
    # pegamos lo siguiente al final de archivo:
    export PATH=${PATH}:/home/cjvargas3/Android/Sdk/tools
    export PATH=${PATH}:/home/cjvargas3/Android/Sdk/platform-tools

**Nota:** Cambiar el cjvargas3 por el usuario de su maquina.

#### Editar la Ruta del SDK de Android en el Archivo llamado create

        nano create
        # editamos la variable ANDROID_BIN
        #cambiamos la linea
        ANDROID_BIN="${ANDROID_BIN:=$( which android )}"
        # por la linea
        ANDROID_BIN="${ANDROID_BIN:=/home/cjvargas3/Android/Sdk/tools/android}"

**Nota:** Cambiar el cjvargas3 por el usuario de su maquina.

#### El siguiente comando crea  un proyecto android desde phonegap

    ./create [directorio donde desea almacenar appp] nameSpace NombreProyecto
    # Ejemplo:
    ./create /home/cjvargas3/appAndroid jjvargas.com ejemplo1

**Nota:** Cambiar el cjvargas3 por el usuario de su maquina.

# Trabajar Proyecto PhoneGap desde Android Studio

- Abrimos Android Studio
- Click en Import Proyect
- Buscamos la carpeta donde creamos nuestro proyecto android desde Phonegap
- Next

En la interfaz de Android Studio aparecerá Tu proyecto:
- click en la carpeta assets/www
- en la carpeta www se encuentran los archivos que puedes manipular para tu desarrollo.

## Video recomendado.
[Video Youtube](https://www.youtube.com/watch?v=6_9rXtuiTgA)

