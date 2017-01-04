# Instalación Android Studio en Ubuntu 14.04

## Instalar Complementos
    sudo apt-get install lib32z1 lib32ncurses5 lib32bz2-1.0 lib32stdc++6

    sudo apt-get install ant

    sudo apt-get install android-tools-adb libncurses5:i386

## Instalar Android Studio por medio de PPA

    sudo add-apt-repository ppa:paolorotolo/android-studio

    sudo apt-get update

    sudo apt-get install android-studio

#### Iniciar Android Studio Instalado desde PPA por primera vez

    /opt/android-studio/bin/studio.sh

## Instalar Android Studio desde Archivos Fuentes
Ir a la pagina siguente [Android Studio](http://developer.android.com/sdk/index.html#Other)

Ir a la sección All Android Studio Packages

Descargar el Fuente para Linux

Copiarlo y descomprimir en la parpeta inicial ~/

#### Iniciar Android Studio Instalado desde Archivos Fuentes

	sh /home/cjvargas3/android-studio/bin/studio.sh

**Nota:** Cambiar el cjvargas3 por el usuario de su maquina.

## Descargar una versión de android para desarrollar desde Android Studio
Para crear proyecto de android como mínimo debe existir una versión descargada en el Android SDK Manager.

- Iniciar Android Studio.
- Click en configura/ SDK Manager
- En la ventana del Android SDK Manager descargar una de las versiones de Android
