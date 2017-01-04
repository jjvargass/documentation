# Backup Base de Datos Postgres

*	Crear backup de Base de datos

			pg_dump nombre_bd_existente > nombre_archivo_backup.sql

* 	Restaurar Base de Datos

	Crearmos Base de Datos que contendrá el backup

    		Createdb nombre_db_backup

	Almacenamos el scrip de backup en la base de datos creada

    		psql -d nombre_db_backup -f nombre_archivo_backup.sql