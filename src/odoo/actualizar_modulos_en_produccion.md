 
Creación de una nueva versión en el GIT
---------------------------------------
* Ejecutar

        git pull

* Hacer y probar los cambios en el branch 'dev' para los cambios de openerp v7 y en el branch "openerp-v6.1-dev" para la versión 6.1

* Editar el archivo Changes y adicionar una breve descripción del cambio

* Ejecutar

        git commit -a -m "breve descripción del cambio"

* Realizar el release utilizando ejecutando

        utils/bump_version.sh openerp_version release_number

    * **openerp_version**: Version de Openerp ej 6.1

    * **release_number**: Número del release yyyymmddxx yyyy es año, mm es mes, dd es el día, xx es el número del release del día.

        * 00 para el primer release, 01 para el segundo release
        * ejemplo: 1978091500 el primer release del 15 de septiembre de 1978

    ejemplo:

        bash utils/bump_version.sh 6.1 2012021000
        bash utils/bump_version.sh 7.0 2012021000


Actualización de aplicación en el servidor
------------------------------------------

* Entrar al servidor

        ssh admin-erp01@sa02cc01 # PARA openerp v6.1
        ssh openerp@openerp # PARA openerp v7.0


* se descarga la ultima versión disponible en master

        cd /opt/openerp-idu-addons
        git checkout master
        git pull origin master

* Se reinicia el servidor y se actualiza el código

        sudo /etc/init.d/openerp stop
        ps -fea | grep openerp-server # para ver que el servidor haya bajado completamente, sino matar el proceso con sudo kill -9
        sudo /etc/init.d/openerp start
        ps -fea | grep openerp-server # para ver que el proceso este arriba

    Se ingresa a través de la interfaz web y se actualiza el módulo.

* Si desea entrar con usuario administrador, la clave esta disponible en el servidor

        sudo more /etc/openerp/openerp_web_admin.txt

* Entrar al módulo actualizado y ver que habre sin problemas, sino reiniciar el servidor openerp y volver a acceder al módulo.


Actualización de Código Micrositio
----------------------------------

    ssh admin-erp01@sa02cc01
    cd /opt/www/idu-citizen-services/
    git pull


Actualización del HTML del visor de obras
------------------------------------------

    ssh admin-erp01@sa02cc01
    cd /opt/www/public_html/pqr.idu.gov.co/visor_obras
    git pull

