# Pruebas Unitarias YAML

## Correr Pruebas Unitarias

1. Crear una base de datos dedicadas a las pruebas.

        sudo -u nombre_usuario createdb nombre_bd

	Ejemplo:

        sudo -u openerp createdb pruebas_unitarias

2. autenticarse con el usuario propietario de la bd

		sudo su openerp

3. Ejecutar el openerp server en modo pruebas

         openerp-server --config=[ruta_de_su_proyecto]/openerp-server.conf --init=[nombre_modulo] -d nombre_bd --log-level=test  --test-enable --stop-after-init -r [usuario_bd] -w [password] --db_host=localhost

	Ejemplo:

    	openerp-server --config=/home/jota/git/openerp-idu-addons/openerp-server.conf --init=project_pmi_wbs -d pruebas_unitarias_pmi --log-level=test  --test-enable --stop-after-init -r openerp -w openerp --db_host=localhost

4. Crear Carpeta que Contenga los script YML

	Esta carpeta debe estar contenida en la carpeta del proyecto.
    Ejemplo:

		mkdir tests

5. Especificar la ruta y los script a ejecutar el el archivo _ _ __openerp__ _ _.py del proyecto.

		test": [
            'tests/000_test_data.yml',
            'tests/003_radicar_pqr_anonimo.yml',
            'tests/003_radicar_pqr_persona_natural.yml',
            'tests/003_radicar_pqr_persona_juridica.yml',
        ],
	Ejemplo:

        {
                "name" : "OCS-IDU (Instituto de Desarrollo Urbano) Customization for Constructions",
                "version" : "openerp6.1-rev2014112100",
                "author" : "Angel María Fonseca, Andres Ignacio Baez Alba and Cinxgler Mariaca Minda",
                "website" : "www.idu.gov.co",
                "category" : "Social Management",
                "description": """For Public Organizations, useful to receive claims from Citizens""",
                "depends" : ['ocs','ocs_orfeo','ocs_sdqs'],
                "init_xml" : ['ocs_idu_view.xml'],
                "demo_xml" : [],
                "update_xml" : [
                                'security/ocs_idu_security.xml',
                                'security/ir.model.access.csv',
                                'ocs_idu_workflow.xml',
                                'ocs_idu_view.xml',
                                'ocs_idu_reports.xml',
                                'report/ocs_report.xml',
                                ],
                "test": [
                    'tests/000_test_data.yml',
                    'tests/003_radicar_pqr_anonimo.yml',
                    'tests/003_radicar_pqr_persona_natural.yml',
                    'tests/003_radicar_pqr_persona_juridica.yml',
                ],
                "installable": True
        }


## Ejemplos de Pruebas Unitarias que Puede Tomar de Referencia.
[Ejemplo_01:  http://mv12cl01.idu.gov.co/openerp/openerp-idu-addons/tree/dev/src/project_strt/test](http://mv12cl01.idu.gov.co/openerp/openerp-idu-addons/tree/dev/src/project_strt/test)

[Ejemplo_02: http://mv12cl01.idu.gov.co/openerp/openerp-idu-addons/tree/dev/src/plan_contratacion_idu/test](http://mv12cl01.idu.gov.co/openerp/openerp-idu-addons/tree/dev/src/plan_contratacion_idu/test)

[Ejemplo_03 http://mv12cl01.idu.gov.co/openerp/openerp-idu-addons/tree/openerp-v6.1-unittests/src/ocs_idu/tests](http://mv12cl01.idu.gov.co/openerp/openerp-idu-addons/tree/openerp-v6.1-unittests/src/ocs_idu/tests)