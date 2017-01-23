# Instalar pgModeler en CentOS 7

## Requerimientos:

[Instalar Postgres 9.5](http://tecadmin.net/install-postgresql-9-5-on-centos/)

    sudo yum install libmpc-devel mpfr-devel gmp-devel -y

    sudo yum install glibc-static -y

	sudo yum install freeglut-devel glew-devel libpng-devel numpy freetype-devel tkinter

## Instalar Gcc Compiler

Comprobar si está instalado Gcc

	whereis gcc
	gcc: /usr/bin/gcc /usr/lib/gcc /usr/libexec/gcc /usr/share/man/man1/gcc.1.gz

Tambien con:

    gcc --version
    gcc (GCC) 4.8.5 20150623 (Red Hat 4.8.5-11)
    Copyright (C) 2015 Free Software Foundation, Inc.
    Esto es software libre; vea el código para las condiciones de copia.  NO hay
    garantía; ni siquiera para MERCANTIBILIDAD o IDONEIDAD PARA UN PROPÓSITO EN
    PARTICULAR


En caso de no tener Gcc, para Instalar:

	sudo yum group install "Development Tools"

	sudo yum group mark install "Development Tools"

## Instalar XML2 library

    sudo yum install libxml2-devel -y

    sudo yum install libxslt-devel -y

Comprobar instalacion XML2 library

    pkg-config libxml-2.0 --cflags --libs

Obtendremos:

    -I/usr/include/libxml2  -lxml2

## Instalación PostgreSQL Client Library (libpq)

	sudo yum install postgresql-devel -y

    sudo nano /usr/lib64/pkgconfig/libpq.pc

Agregamos:

    prefix=/usr
    exec_prefix=${prefix}
    libdir=${prefix}/lib64/pgsql
    includedir=${prefix}/include/pgsql

    Name: LibPQ
    Version: 5.0.0
    Description: Library PQ
    Requires:
    Libs: -L${libdir} -lpq
    Cflags: -I${includedir


Comprobar instalacion libpq

	pkg-config libpq --cflags --libs

# Instalar QT

Click en [Pagina para descargar qt](https://www.qt.io/download-open-source/)

Opción: **Qt 5.8.0 for Linux 64-bit (766 MB)    (info)**

Por linea de comando:

	wget http://download.qt.io/official_releases/qt/5.8/5.8.0/qt-opensource-linux-x64-5.8.0.run

Damos Permisos de Ejecución:

	chmod +x qt-opensource-linux-x64-5.8.0.run

Carpeta para Programas

	mkdir -p ~/Program/Qt

Ejecutamos:

	./qt-opensource-linux-x64-5.8.0.run

Realizamos la instalacion con la interfaz que obtenemos. Especificamos la ruta de almacenamiento en carpeta que creamos. **Program/Qt**

Agregamos varialbes de Qt al PATH

	sudo nano /etc/profile.d/qt5.sh

Agregamos:

    PATH=/home/desarrollo/Program/Qt/5.8/gcc_64/bin:$PATH
    export PATH

Actualizamos cambios:

	source /etc/profile.d/qt5.sh

Verificar Instalación:

	which qmake

Obtendremos esto:

	~/Program/Qt/5.8/gcc_64/bin/qmake


## Instalar pgModeler:

[Descargar de la pagina githut version v0.9.0-alpha](https://github.com/pgmodeler/pgmodeler/releases)

Linea de Comando:

	wget https://github.com/pgmodeler/pgmodeler/archive/v0.9.0-alpha.zip

	cd Program/

    unzip ~/v0.9.0-alpha.zip

	cd pgmodeler-0.9.0-alpha/


Compilar

	qmake pgmodeler.pro

	make

    make install

	sudo chown tu_usuario:tu_usuario -R /usr/local/share/pgmodeler

	pgmodeler

# Fuentes

[Instalar Gcc en Centos](https://www.cyberciti.biz/faq/centos-rhel-7-redhat-linux-install-gcc-compiler-development-tools/)

[Configurar libpq](https://bugzilla.redhat.com/show_bug.cgi?id=977115)

[Descargar Qt](https://www.qt.io/download-open-source/)

[Configurar Qt](https://wiki.qt.io/How-to-Install-Qt-5-and-Qwt-on-CentOS-6)

