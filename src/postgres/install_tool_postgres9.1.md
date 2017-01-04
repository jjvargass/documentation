# Instalación Herramientas de Postgres

## Postgres 9.1

*   Postgis

    El **userDB** es un usuario en postgrest propietario de la base de datos NOMBRE_BD

    El **NOMBRE_BD** es la base de datos a la que le queremos instalar el complemento postgis

		sudo su userDB -c "psql -f /usr/share/postgresql/9.1/contrib/postgis-1.5/postgis.sql NOMBRE_BD"

		sudo su userDB -c "psql -f /usr/share/postgresql/9.1/contrib/postgis-1.5/spatial_ref_sys.sql NOMBRE_BD"

