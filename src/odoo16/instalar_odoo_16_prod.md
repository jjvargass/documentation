# instalación odoo 16 en ubuntu 22.04

Iniciamos como usuario root
```sh
sudo su -
```

## Actualizar el sistema operativo
```sh
apt update && sudo apt upgrade
```

## Instalación de Postgresql

```sh
apt install postgresql -y
```
Revisamos servicio Postgresql

```sh
systemctl status postgresql
```

Revisión de tablas

```sh
su postgres
psql postgres postgres
\l
```


## Instalación dependencias 

```sh
apt install python3-pip xfonts-75dpi xfonts-base libxrender1 libjpeg-turbo8 fontconfig -y
```

## Instalar wkhtmltopdf

```sh
apt install wkhtmltopdf
```
Dado que Odoo requiere una versión wkhtmltopdf 0.12.1 o superior, verifíquelo usando

```sh
wkhtmltopdf --version
```

Y el resultado será el siguiente:

```sh
wkhtmltopdf 0.12.6
```

## Intalación de Odoo

```sh
wget -q -O - https://nightly.odoo.com/odoo.key | sudo gpg --dearmor -o /usr/share/keyrings/odoo-archive-keyring.gpg
 
echo 'deb [signed-by=/usr/share/keyrings/odoo-archive-keyring.gpg] https://nightly.odoo.com/16.0/nightly/deb/ ./' | sudo tee /etc/apt/sources.list.d/odoo.list

apt update

apt install odoo -y
```
### Carpeta modulos personalizados

```sh
mkdir /usr/lib/python3/dist-packages/odoo/custom
```

### Realizar Configuraciones

Configurara el parametro ``admin_passwd`` con una contraseña robusta.

Si se implementa un volumen externo para la metada de la bd se implementa el parametro ``data_dir``.

Recordar apuntar a la carpeta de los modulos personalizados parametro ``addons_path``.

```sh
sudo nano /etc/odoo/odoo.conf

[options]
; admin_passwd = admin
; addons_path = /usr/lib/python3/dist-packages/odoo/addons
; data_dir = /var/lib/odoo/.local/share/Odoo/filestore
```


### Administración de odoo

#### Servicio odoo

Ruta del servicio
```sh
cat /lib/systemd/system/odoo.service 

[Unit]
Description=Odoo Open Source ERP and CRM
After=network.target

[Service]
Type=simple
User=odoo
Group=odoo
ExecStart=/usr/bin/odoo --config /etc/odoo/odoo.conf --logfile /var/log/odoo/odoo-server.log
KillMode=mixed

[Install]
WantedBy=multi-user.target
```

Comandos de administración del servicio
```sh
systemctl status odoo

systemctl start odoo

systemctl restart odoo
```

#### Logs 

```sh
tail -f -n 100 /var/log/odoo/odoo-server.log
```

#### Archivo de configuración

```sh
cat /etc/odoo/odoo.conf

[options]
; This is the password that allows database perations:
; admin_passwd = admin
db_host = False
db_port = False
db_user = odoo
db_password = False
;addons_path = /usr/lib/python3/dist-packages/odoo/addons
default_productivity_apps = True
```

#### Url de odoo 

Aplicacion Odoo.

```sh
http://ip_de_servidor:8069
```
Aplicacion Odoo Crear BD.
```sh
http://ip_de_servidor:8069/web/database/selector
```