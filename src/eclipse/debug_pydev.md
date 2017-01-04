# Debug con PyDev

    Cuando el puerto del Odoo cambia a 8072 en modo debug con PyDev, se comentan las siguientes lineas del archivo __init__.py del Odoo:
    sudo nano /usr/lib/python2.7/dist-packages/openerp/__init__.py
            """evented = False
            if sys.modules.get("gevent") is not None:
            evented = True
            """
