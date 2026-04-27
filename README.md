# APIREST - Gestión de Usuarios

Aplicación web CRUD para la gestión de usuarios, compuesta por:

- **Backend:** API REST en Java con Spring Boot (`api/`).
- **Frontend:** interfaz web en HTML, CSS y JavaScript (`front/`).

La web permite consultar, crear, modificar y eliminar usuarios mediante peticiones HTTP al backend.

Video Demostracion: https://www.youtube.com/watch?v=L6rkukv9QuE

## Tecnologías

- Java 17
- Spring Boot 3
- Spring Data JPA
- MySQL
- HTML, CSS, JavaScript (vanilla)

## Requisitos previos

- Java 17 instalado
- Maven instalado (o usar el wrapper de Maven incluido)
- MySQL en ejecución

## Configuración de base de datos

Solo necesitas crear la base de datos con este nombre:

```sql
CREATE DATABASE apis;
```

No es necesario crear tablas ni columnas manualmente.  
El proyecto tiene `spring.jpa.hibernate.ddl-auto=update`, por lo que Spring Boot genera y actualiza la estructura automáticamente al iniciar la aplicación.

## Cómo iniciar el programa

## 1) Iniciar backend (Spring Boot)

Desde la raíz del proyecto:

```bash
cd api
mvn spring-boot:run
```

El backend quedará disponible en:

- `http://localhost:4000`

## 2) Iniciar frontend

Abre el archivo:

- `front/index.html`

Puedes abrirlo directamente en el navegador o con una extensión como Live Server en VS Code/Cursor.

## Endpoints principales

- `GET /api/getUsers`
- `GET /api/getUser/{id}`
- `POST /api/addUser`
- `PUT /api/modifyUser/{id}`
- `DELETE /api/deleteUser/{id}`
