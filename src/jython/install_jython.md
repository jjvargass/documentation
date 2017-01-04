# Instalación de Jython

*   Ingresar a la dirección http://www.jython.org/downloads.html
*   Descargar la versión Jython 2.5.3
*   Abrir a una terminal e ingresar los siguientes comandos  

        sudo mkdir /opt/jython
        sudo chmod -R 777 /opt/jython
        cd Downloads/
        sudo java -jar jython-installer-2.5.3.jar --console


*   A continuación el instalador de Jython nos solicitará algunas confirmaciones y rutas de configuración, tal como se muestra:

    Welcome to Jython !

    You are about to install Jython version 2.5.3

    (at any time, answer c to cancel the installation)

    For the installation process, the following languages are available: English, German

    Please select your language [E/g] >>> E

    Do you want to read the license agreement now ? [y/N] >>> N

    Do you accept the license agreement ? [Y/n] >>> Y

    The following installation types are available:
      1. All (everything, including sources)
      2. Standard (core, library modules, demos and examples, documentation)
      3. Minimum (core)
      9. Standalone (a single, executable .jar)

    Please select the installation type [ 1 /2/3/9] >>> 1

    Do you want to exclude parts from the installation ? [y/N] >>> N

    Please enter the target directory >>> /opt/jython

    Please enter the java home directory (empty for using the current java runtime) >>>

    Your java version to start Jython is: Oracle Corporation / 1.7.0_65
    Your operating system version is: Linux / 3.13.0-44-generic
    Summary:
      - mod: true
      - demo: true
      - doc: true
      - src: true
      - JRE: /usr/lib/jvm/java-7-openjdk-amd64/jre

    Please confirm copying of files to directory /opt/jython [Y/n] >>> Y

     10 %

     20 %

     30 %

     40 %

     50 %

     60 %

     70 %

     80 %

     90 %
    Generating start scripts ...

     100 %

    Do you want to show the contents of README ? [y/N] >>> Y

* Aparece el siguiente mensaje de finalización de la instalación:

        Welcome to Jython 2.5.3!

        ========================
        This is the final release of Jython 2.5.3.

        Thanks to Adconion Media Group (http://www.adconion.com/) for sponsoring this
        release, and thanks to all who contribute to Jython.

        This release fixes numerous bugs since the 2.5.2 release of Jython. Some
        highlights include:

        * File uploads where broken in Tomcat and Jetty.
        * Imports sometimes blew the stack. This was seen in SQLAlchemy for example.
        * Some race conditions and threading issues where fixed.
        * Several JSR 223 problems have been fixed.

        Please see the NEWS file for detailed release notes.  The release was compiled
        on Ubuntu with JDK 6 and requires JDK 5 to run.

        Please try this out and report any bugs at http://bugs.jython.org.

        Please press Enter to proceed >>>

        Congratulations! You successfully installed Jython 2.5.3 to directory /opt/jython.


## Agregar Jython al PATH

    	PATH=/opt/jython/bin:$PATH

## Correr Script Jython Agregando Librerías .jar al CLASSPATH

		jython -Dpython.path=RUTA_JAR1:TURA_JAR2:RUTA_JAR3 script_Jython.py

## bibliografia Video Tutorial en Yutube
[LINK](https://www.youtube.com/watch?v=d3YO9ZlGCnM)