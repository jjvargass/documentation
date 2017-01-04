# Instalación de openjdk-7-jdk

        sudo apt-get install openjdk-7-jdk

# Instalación Eclipse

*   Descargar Ultima Versión Eclipse IDE

       Ir a la pagina oficial de Eclipse https://eclipse.org/downloads/

       Descargar **Eclipse IDE for Java Developers**

*   Descomprimir Eclipse IDE  en la carperta /opt

        cd /opt/ && sudo tar -zxvf ~/Downloads/eclipse-*.tar.gz

*   Crear un archivo de escritorio llamado 'eclipse.desktop' en el diretorio /usr/share/applications/

        sudo nano /usr/share/applications/eclipse.desktop

*   Pegar el en archivo de escritorio lo siguiente:

        [Desktop Entry]
        Name=Eclipse
        Type=Application
        Exec=/opt/eclipse/eclipse
        Terminal=false
        Icon=/opt/eclipse/icon.xpm
        Comment=Integrated Development Environment
        NoDisplay=false
        Categories=Development;IDE;
        Name[en]=eclipse.desktop

*   Ahora instale el archivo de escritorio con el siguiente comando 

        sudo desktop-file-install /usr/share/applications/eclipse.desktop

*   Crear un enlace simbólico para ejecutar eclipse en modo comando

        sudo ln -s /opt/eclipse/eclipse /usr/local/bin/

# Instalación Temas para editor de Eclipse

*   Ir a Help→Install New Software. Clikc en Add Site e ingresar en name 'Eclipse Color Theme'. 
*   En location ingresar la URL http://eclipse-color-theme.github.com/update
*   clikc en OK y instalar el plugin

### Configurara Temas para editor de Eclipse

*   Ir a Window→Preference→General→Appearance→Color Theme  y seleccionar el que le guste.

# Intalación Tema para Entorno de Ventanas de Eclipse

*   Temas disponibles:

    Dark Juno   http://rogerdudler.github.io/eclipse-ui-themes/

    MoonRise UI Theme https://github.com/guari/eclipse-ui-theme

*   Para instalar Dark Juno Descargar el .jar

    https://github.com/downloads/rogerdudler/eclipse-ui-themes/com.github.eclipsecolortheme.themes_1.0.0.201207121019.zip

    Descomprimir y pegar el .jar en la carpeta plugins de configuracion de eclipse, la direccion es:

        ~/.eclipse/org.eclipse.platform_4.3.2_1473617060_linux_gtk_x86_64/plugins

*   Para instalar MoonRise UI Theme

    Ir a la pagina del progecto https://github.com/guari/eclipse-ui-theme

    En la seccion de Instalacion click sostenido en el boton Install y arrastar a la ventana del eclipse. Esto hara que se instale el tema MoonRise automaticamente

### Configurara Tema para Entorno de Ventanas de Eclipse

*   Ir a Window→Preference→General→Appearance  y seleccionar el tema en la lista desplegable con titulo Theme