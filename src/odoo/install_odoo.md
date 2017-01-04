## Instalación de odoo

*   Descargar ubuntu 14.04 LTS http://www.ubuntu.com/download

*   Luego de instalado y reiniciado el sistema actualizar a los últimos paquetes disponibles

        sudo apt-get update
        sudo apt-get upgrade

*   Instalar las dependencias de software disponibles en el repositorio de ubuntu

        sudo apt-get install bzr bzrtools 
        
        sudo apt-get install git-core rubygems-integration eclipse eclipse-egit
        
        sudo apt-get install  postgresql 
        
        sudo apt-get install python-lxml python-jinja2 python-markupsafe python-pil python-argh python-decorator \
        python-docutils python-gevent python-greenlet python-mock python-passlib python-psutil \
        python-psycopg2 python-pypdf python-serial python-stdnum python-usb python-qrcode \
        python-requests python-simplejson python-six python-unittest2 \
        python-yaml python-pychart python-werkzeug python-babel python-openid python-psycopg2 \
        python-tz python-shapely python-setuptools \
        python-gdata python-ldap python-libxslt1 python-pybabel python-vatnumber python-vobject \
        python-webdav python-xlwt python-zsi python-dateutil python-feedparser python-mako \
        python-pydot python-pyparsing python-reportlab graphviz python-imaging python-matplotlib

Instalar odoo V 8.0
--------------------

*   Descargue la versión 8.0 para Linux

        wget http://sa02cc01/odoo_8.0-latest.deb

*  Ahora entre a la carpeta donde descargó el archivo de odoo y ejecute:

        sudo dpkg -i odoo_8.0-latest.deb
        sudo apt-get install -f #Util cuando hay dependencias no cumplidas

*   Para no generar conflictos entre la versión que se corre a través de eclipse y la existente en el sistema, debe desactivar el inicio del servicio odoo con el comando (esto solo lo debe hacer una vez)

        sudo update-rc.d odoo disable
        sudo /etc/init.d/odoo stop

*   Configurar el usuario de base de datos para odoo con clave odoo

        sudo su postgres
        psql -c "ALTER USER odoo WITH PASSWORD 'odoo';"

## Configuración de Eclipse como ambiente de desarrollo

*   Instalar el módulo PyDEV para desarrollo en Python
    * Ingresar a la opción del menú **Help > Install New Software**
    * En el cuadro de dialogo diligenciar **Work with:** con el valor http://pydev.org/updates y presionar la tecla **enter**
    * Seleccionar en la lista que aparece luego de unos segundos **PyDEV** o el botón Select All
    * Presionar el botón **Next**
    * Presionar nuevamente el botón **Next**
    * Aceptar la licencia de usuario y presionar **Finish**
    * Se iniciará el proceso de descarga e instalación
    * Luego de unos minutos aparecerá un cuadro de dialogo preguntando si confia en el certificado, Clickea **Select All** y **OK**
    * Por último presiona el boton **Restart now** cuando se le pregunte
*   Instalar el módulo Web Tools para incluir editores para otras tecnologías web como XML, Javascript entre otros
    * Ingresar a la opción del menú **Help > Install New Software**
    * En el cuadro de dialogo diligenciar **Work with:** con el valor http://download.eclipse.org/webtools/repository/helios y presionar la tecla **enter**
    * Asegúrese de tener desmarcadas las casillas **Show only the latest versions of available software** y **Show only software applicable to target environment** 
    * Seleccionar en la lista que aparece los paquetes que desee para la versión, en este caso **Web Tools Platform SDK (WTP SDK) 3.2.5**, como mínimo escoger
      * Eclipse XML Editors and Tools SDK 3.2.5
      * JavaScript Development Tools SDK 1.2.5
    * Presionar el botón **Next** y continuar como se hizo para el módulo PyDEV

## Crear un proyecto y configurar el entorno para ejecutar odoo

*   En eclipse crear un nuevo proyecto PyDEV.
*	click en el link que dice **Please configure an interprete before proceeding.** esto para configurado el entorno de python eclipse
*	Ud debe hacer click en el botón **Quick auto config** y aceptar los valores por defecto.
*   Ingrese a través del menú a la opción **Run > Run configurations**
*	Click en **Python Run** 
*   Luego haga click en el icono (parte superior izquierda) **New Launch Configuration**
    *   En **Name** digite **servidor odoo**
    *   En **Project** seleccione el nombre del nuevo proyecto
    *   En **Main Module** digite **/usr/bin/openerp-server**, este es el comando para iniciar el odoo
    *   En la pestaña **Arguments** en el campo **program arguments** ingrese:

            -r odoo -w odoo --db_host=localhost

        Estos son los parámetros que se pasarán al servidor de odoo
        * -r es el nombre del usuario de la base de datos
        * -w la clave asignada
    *   Luego haga click en el boton **Apply** y **Run**
    *   Otro parámetro importante es *--addons-path* el cual indica al servidor donde buscar el código de módulos adicionales de odoo, podemos indicar que use la carpeta del proyecto eclipse con la variable **${project_loc:NombreDeMiProyecto}**, quedando el parámetro:

            -r odoo -w odoo --db_host=localhost --addons-path=${project_loc:NombreDeMiProyecto}

        Si uds adiciona este campo en este momento, al arrancar el servidor fallará indicando que la carpeta no es válida como addons-path, esto es porque aún no existen modulos odoo en el proyecto.
    
        **Nota**: Recuerde cambiar NombreDeMiProyecto por el nombre del proyecto que usted recien creo


*   Abrir en el navegador: http://localhost:8069 y accederá a la interfaz de odoo
*   Ahora puede crear una base de datos haciendo click en **Manage Databases**
     * Master Password: es el password de super adminsitrador de odoo por defecto *admin*
     * New Database Name: Indique el nombre de la nueva base de datos a crear
     * Load Demonstration data: Indica si quiere que los módulos se instalen con datos de prueba
     * Default language: Indica el lenguaje a instalar por defecto
     * Admin password: Indica el password de administración de la nueva base de datos
*   El proceso de creación tomará algunos segundos, luego se presentará la pantalla con el listado de módulos disponibles en el sistema, puede elegir uno cualquiera ejemplo CRM
