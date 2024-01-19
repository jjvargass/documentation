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

Salir de root

```sh
exit
```

### Deshabilitar Servicio

Para no generar conflictos entre la versión que se corre a través del editor de desarrollo y la existente en el sistema, debe desactivar el inicio del servicio Odoo con el comando.

```sh
sudo update-rc.d odoo disable
sudo /etc/init.d/odoo stop
```

### Configurar usuario odoo en BD

Configurar el usuario de base de datos odoo con clave odoo

```sh
sudo su postgres
psql -c "ALTER USER odoo WITH PASSWORD 'odoo';"
```

### Permitir conexiones locales para odoo
Como las conexiones de manera local desde el entorno de desarrollo con el usario odoo, debemos realizar las siguiente configuracion en la bd.

```sh
sudo nano /etc/postgresql/14/main/pg_hba.conf

# cambiar la linea 
local   all             all                                     peer

# Por 
local   all             all                                     trust
```

### Crear Directorio de desarrollo

```sh
# ir a directorio local
cd 

# creamos directorio git
mkdir git

# copiamos archivo de condiguraicon
sudo cp /etc/odoo/odoo.conf git/

# cambiamos el propietario
sudo chown desarrollo:desarrollo git/odoo.conf 
```


### Correr odoo desde terminal para  desarrollar

```bash
## PARAMETROS ##

# -r usuario
# -w password
# -d base de datos
# -u actualiza el módulo
# -i instala el módulo

# --test-enable
# --stop-after-init
# --db_host=localhost
# --test-commit
```

```bash
# Ejecutar para desarrollo local
odoo --config /home/desarrollo/git/odoo.conf -r odoo -w odoo
```

#### Ejemplos de ejecución

```bash
# como se corre el servicio en prod
/usr/bin/python3 /usr/bin/odoo --config /etc/odoo/odoo.conf --logfile /var/log/odoo/odoo-server.log
```

```bash
# actualizar moduo web
odoo -u web -r odoo -w odoo
```

```bash
# Estamos corriendo odoo con modulos sisifo
odoo.py --addons-path=/usr/lib/python2.7/dist-packages/openerp/addons,/var/odoo/odoo-colombia,/var/odoo/geospatial,/var/odoo/openerp-utils/src,/var/odoo/odoo-idu-addons-publico/src -r odoo -w odoo
```

```bash
# Instalar modulo plan_mejoramiento_idu
odoo --config=/etc/odoo/odoo.conf -i plan_mejoramiento_idu -d odoo-ud --stop-after-init -r odoo -w odoo --db_host=localhost
```

```bash
# Actualizar modulo plan_mejoramiento_idu y correr pruebas unitarias
odoo --config=/home/cjvargas3/git/openerp-server.conf -u plan_mejoramiento_idu -d unit_test_plan --log-level=test  --test-enable --stop-after-init -r odoo -w odoo --db_host=localhost --test-commit
```

### Url de odoo 

Aplicacion Odoo.

```sh
http://ip_de_servidor:8069
```
Aplicacion Odoo Crear BD.
```sh
http://ip_de_servidor:8069/web/database/selector
```

## Instalar PGAdmin 4

```sh
sudo apt install curl

# Install the public key for the repository (if not done previously):
curl -fsS https://www.pgadmin.org/static/packages_pgadmin_org.pub | sudo gpg --dearmor -o /usr/share/keyrings/packages-pgadmin-org.gpg

# Create the repository configuration file:
sudo sh -c 'echo "deb [signed-by=/usr/share/keyrings/packages-pgadmin-org.gpg] https://ftp.postgresql.org/pub/pgadmin/pgadmin4/apt/$(lsb_release -cs) pgadmin4 main" > /etc/apt/sources.list.d/pgadmin4.list && apt update'

#
# Install pgAdmin
#

# Install for both desktop and web modes:
sudo apt install pgadmin4


# URL Documentacion Oficial
https://www.pgadmin.org/download/pgadmin-4-apt/
```


### Configurar usuario postgres para conexion

Para establecer la conexion local en el pgAdmin debemos proporcionar la contraseña del usaurio, debemos configurar el contraseña para el usuaro postgrs

```sh
sudo su postgres
psql -c "ALTER USER postgres WITH PASSWORD 'postgres';"
```