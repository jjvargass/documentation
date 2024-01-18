
## Instalación de libssl 1.1 de otra version 20.04 Focal (Ubuntu 20.x ya no requiere este paso).
```sh
echo "deb http://security.ubuntu.com/ubuntu focal-security main" | sudo tee /etc/apt/sources.list.d/focal-security.list
apt update
apt install libssl1.1 
```


## Instalar wkhtmltopdf

```sh
cd /opt

wget https://github.com/wkhtmltopdf/packaging/releases/download/0.12.6-1/wkhtmltox_0.12.6-1.bionic_amd64.deb

dpkg -i wkhtmltox_0.12.6-1.bionic_amd64.deb

cp /usr/local/bin/wkhtmltoimage  /usr/bin/wkhtmltoimage
cp /usr/local/bin/wkhtmltopdf  /usr/bin/wkhtmltopdf
```

#### Archivo de configuración

```sh
cat /etc/odoo/odoo.conf

[options]
db_host = False
db_port = False
db_user = odoo
db_password = False
default_productivity_apps = True
admin_passwd = NcbY23uv9Q$Cn5PRARMf8JCee.LmXE./
```


# fuente 

[Video 62: Instalación de Odoo 16 en Ubuntu 20.04 y 22.04](https://www.youtube.com/watch?v=tv0fDQxIDyk&t=636s)