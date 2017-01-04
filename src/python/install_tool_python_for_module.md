# Instalación Herramientas de Python

*   Complementos Para Evitar errores

		sudo apt-get install build-essential autoconf libtool pkg-config python-opengl python-imaging python-pyrex python-pyside.qtopengl idle-python2.7 qt4-dev-tools qt4-designer libqtgui4 libqtcore4 libqt4-xml libqt4-test libqt4-script libqt4-network libqt4-dbus python-qt4 python-qt4-gl libgle3 python-dev libgeos-dev


*   Shapely

    	sudo pip install shapely

*   Workalendar.america

		sudo pip install workalendar

*   Matplotlib

		sudo pip install matplotlib --upgrade

	En caso de error:

        sudo sed -i 's/http:\/\/co./http:\/\//g' /etc/apt/sources.list

        sudo apt-get update && sudo apt-get upgrade

        sudo apt-get install libfreetype6-dev libpng12-dev python-dev

        sudo ln -s /usr/include/freetype2/freetype /usr/include/freetype

        sudo pip install matplotlib --upgrade

*	Mygooglechart (Para Toarta 3D s)

        sudo pip install pygooglechart

