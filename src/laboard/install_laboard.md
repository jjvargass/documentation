Laboard
=======

https://gitlab.com/jubianchi/laboard

Herramienta que despliega los issues almacenados en los proyectos de gitlab en un tablero kanban.

Instalación laboard
-------------------

Instalar MySQL

    sudo apt-get install mysql-server mysql-client -y

Se debe crear una base de datos para almacenar el histórico de movimientos de las tarjetas. Se debe conectar a la base de datos a través de la consola de comandos:

    mysql -u root -p

Luego de entrar en la consola de mysql ejecutar:

    CREATE USER 'laboard'@'localhost' IDENTIFIED BY '***';
    GRANT USAGE ON *.* TO 'laboard'@'localhost' IDENTIFIED BY '***';
    CREATE DATABASE IF NOT EXISTS `laboard`;
    GRANT ALL PRIVILEGES ON `laboard`.* TO 'laboard'@'localhost';
    USE laboard;
    CREATE TABLE `moves` (
        `namespace` varchar(255) DEFAULT NULL,
        `project` varchar(255) DEFAULT NULL,
        `issue` int(11) DEFAULT NULL,
        `from` varchar(255) DEFAULT NULL,
        `to` varchar(255) DEFAULT NULL,
    `date` datetime DEFAULT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

Instalar las dependencias necesarias

    sudo apt-get install g++ curl

Instalar node js utilizando nvm ([Node Version Manager - Simple bash script to manage multiple active node.js versions](https://github.com/creationix/nvm))

    curl https://raw.githubusercontent.com/creationix/nvm/v0.11.1/install.sh | bash
    source ~/.profile

Ver las versiones disponibles para instalar con nvm ejecutando

    nvm ls-remote

Instalar la versión 0.10.26 ejecutando:

    nvm install 0.10.26

Para verificar la versión instalada ejecutar:

    node --version

Instalar node js en el sistema en /usr/local

    n=$(which node);n=${n%/bin/node}; chmod -R 755 $n/bin/*; sudo cp -r $n/{bin,lib,share} /usr/local

Instalar gulp

    sudo npm install -g gulp

Instalación de laboard

    sudo adduser laboard --home /opt/laboard
    sudo su laboard
    cd ~
    git clone http://mv12cl01.idu.gov.co/vendor/laboard.git
    cd laboard
    make install

Configuración
-------------

Configuración de [laboard server](server.json)

    vim /opt/laboard/laboard/config/server.json:

Ajustar el archivo teniendo en cuenta los siguientes parámetros:

    gitlab_url : The URL to your Gitlab instance (for example http://gitlab.example.com)
    data_dir : Path to a directory where Laboard will store its data (columns definition)
    port: Port to which the HTTP server is bound
    mysql: Configuration of the database
    host: Hostname of the server
    user: Username to connect with the server
    password: Password of the user
    database: Name of the database

Configuración de [laboard client](client.js)

    vim /opt/laboard/laboard/config/client.js

Ajustar el archivo teniendo en cuenta los siguientes parámetros:

    gitlabUrl: The URL to your Gitlab instance. This should be the same as for the server (for example http://gitlab.example.com)
    socketIoPort: The port to which the Socket.io server is bound. When running in production, this will be the same as the HTTP server's port


**Nota:** Especificar en estos dos archivos client.js y server.json el mismo puerto y que sea distinto en el que está corriengo el gitLab (si se ejecuta en el mismo servidor), por ejemplo el 9090


Iniciar Laboard como servicio
-----------------------------

Tomando el script de inicio [laboard](laboard)

    sudo cp laboard /etc/init.d/
    sudo chmod a+x /etc/init.d/laboard
    sudo update-rc.d laboard defaults
    sudo update-rc.d laboard enable
