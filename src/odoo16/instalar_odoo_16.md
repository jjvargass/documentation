# instalación odoo 16 en ubuntu 22.04

## Actualizar el sistema operativo
```sh
sudo apt update && sudo apt upgrade
```

## Crear usuario odoo en sistema operativo
```sh
sudo useradd -m -d /opt/odoo -U -r -s /bin/bash odoo
```

## Instalar dependecias para odoo
```sh
sudo apt install build-essential wget git python3-pip python3-dev python3-venv python3-wheel libfreetype6-dev libxml2-dev libzip-dev libsasl2-dev python3-setuptools libjpeg-dev zlib1g-dev libpq-dev libxslt1-dev libldap2-dev libtiff5-dev libopenjp2-7-dev
```

### Instalar Wkhtmltopdf
Odoo requiere el paquete Wkhtmltopdf para fines relacionados con la impresión, que es una utilidad de línea de comandos gratuita y de código abierto que utiliza el motor Qt webkit para transformar contenido HTML en PDF. Instale Wkhtmltopdf ejecutando este comando.

```sh
sudo apt install wkhtmltopdf
```
Dado que Odoo requiere una versión wkhtmltopdf 0.12.1 o superior, verifíquelo usando

```sh
wkhtmltopdf --version
```

Y el resultado será el siguiente:

```sh
wkhtmltopdf 0.12.6
```
## Instalar y configurar Base de Datos PostgreSQL
Odoo utiliza exclusivamente PostgreSQL para su almacenamiento de datos. Ahora ejecute este comando para instalar el servidor PostgreSQL en nuestro sistema Ubuntu 22.04.

```sh
sudo apt install postgresql
```

Después de la instalación, ejecute este comando para crear un nuevo usuario de Postgresql para Odoo 16.

```sh
sudo su - postgres -c "createuser -s odoo"
```


```sh
l
```

```sh
l
```
## Instalar Odoo
Es importante cambiar al usuario del sistema que establecimos para Odoo. Este paso es crucial para evitar encontrar problemas relacionados con los derechos de acceso. Entonces podemos cambiar al usuario que hemos creado antes.

```sh
sudo su - odoo
```

Para instalar Odoo 16, podemos clonar odoo 16 desde el repositorio git de odoo. 
```sh
git clone https://www.github.com/odoo/odoo --depth 1 --branch 16.0 odoo16
```

En esta guía, configuraremos Odoo 16 dentro de un entorno virtual Python. Una vez finalizado el proceso de clonación, ejecute el comando siguiente para generar un nuevo entorno virtual de Python.

```sh
python3 -m venv odoo16-venv
```
Una vez instalado el entorno virtual, debemos activarlo ejecutando

```sh
source odoo16-venv/bin/activate
```
Después de ejecutar el comando, el símbolo del shell aparecerá así:

```sh
(odoo16-venv) odoo@ubuntu:~$
```

Ahora, procedamos a instalar Odoo.

```sh
(odoo16-venv) odoo@ubuntu:~$ pip3 install wheel
(odoo16-venv) odoo@ubuntu:~$ pip3 install -r odoo16/requirements.txt
```

Después de completar el proceso de instalación de todos los requisitos, salimos del entorno virtual odo16-venv.

```sh
(odoo16-venv) odoo16@ubuntu:~$ deactivate
```
### Directorios de Odoo

#### Directorio Modulos Desarrollados

**Estando como usuairo odoo**, Ahora podemos crear un nuevo directorio donde almacenaremos nuestros complementos personalizados de Odoo.

```sh
odoo@ubuntu:~$
odoo@ubuntu:~$ mkdir /opt/odoo/odoo16/custom
```

#### Directorio Logs
```sh
odoo@ubuntu:~$ mkdir /var/log/odoo
```

**Ahora salga del usuario "odoo"** y cree el archivo de configuración de Odoo 16.

```sh
exit
sudo nano /etc/odoo.conf
```

Ahora pegue esta configuración en él.

```sh
[options]
; Cambiar la contraseña admin_passwd
admin_passwd = ChangeP@ss
db_host = False
db_port = False
db_user = odoo
db_password = False
addons_path = /opt/odoo/odoo16/addons,/opt/odoo/odoo16/custom
xmlrpc_port = 8016

; Habilidar en entorno productivo
; logfile = /var/log/odoo/odoo-server.log
```

Recuerde actualizar el valor de la clave "ChangeP@ss" anterior con una contraseña más segura. Esta contraseña actúa como su contraseña maestra de Odoo, que es necesaria para crear o eliminar bases de datos.


## Crear un Odoo Service
Tenemos que crear una unidad systemd para Odoo16 para que pueda comportarse como un servicio.

```sh
sudo nano /etc/systemd/system/odoo.service
```
Copie y pegue el siguiente contenido en el archivo de unidad systemd odoo16.service:

```sh
[Unit]
Description=Odoo 16
Requires=postgresql.service
After=network.target postgresql.service

[Service]
Type=simple
SyslogIdentifier=odoo
PermissionsStartOnly=true
User=odoo
Group=odoo
ExecStart=/opt/odoo/odoo16-venv/bin/python3 /opt/odoo/odoo16/odoo-bin -c /etc/odoo.conf
StandardOutput=journal+console

[Install]
WantedBy=multi-user.target
```
Eso concluye la configuración. Ahora puedes recargar systemd y comenzar a ejecutar Odoo16. Como editamos el archivo de servicio, necesitamos ejecutar daemon-reload

```sh
sudo systemctl daemon-reload
sudo systemctl start odoo
```
Verifique si Odoo está activo ejecutando este comando:

```sh
sudo systemctl status odoo
```
Ahora abra su navegador web y vaya a http://your_server_ip_address:8016. Esto lo llevará a la página de Odoo.

## Fuentes 

[How to Install Odoo 16 on Ubuntu 22.04 LTS Server](https://www.cybrosys.com/blog/how-to-install-odoo-16-on-ubuntu-22-04-lts-server)

[Odoo 16 Download and Installation on Ubuntu](https://www.globalteckz.com/odoo-16-download-and-installation-on-ubuntu/)

[Step-by-Step Tutorial to Install Odoo 16 ERP on Ubuntu 22.04](https://vegastack.com/tutorials/step-by-step-tutorial-to-install-odoo-16-erp-on-ubuntu-22-04/)

[How to Install Odoo 16 ERP Software on Ubuntu 22.04](https://www.howtoforge.com/how-to-install-odoo-16-on-ubuntu-22-04/)