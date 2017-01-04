# Instalación PlayOnLinux en Ubuntu 14.04

PlayOnLinux es una herramienta visual para la facil instalación de aplicaciones de Windos para los sistemas operativos Linux.
## Instalar Complementos

	sudo apt-get install winbind

## Instalar Wine

    sudo add-apt-repository ppa:ubuntu-wine/ppa

    sudo apt-get update

    sudo apt-get install wine1.7 winetricks


## Install PlayOnLinux on Ubuntu 14.04

    wget -q "http://deb.playonlinux.com/public.gpg" -O- | sudo apt-key add -

    sudo wget http://deb.playonlinux.com/playonlinux_trusty.list -O /etc/apt/sources.list.d/playonlinux.list

    sudo apt-get update

    sudo apt-get install playonlinux


