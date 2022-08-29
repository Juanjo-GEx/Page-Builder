# Directus & Nextjs ![Directus](https://img.shields.io/badge/directus-%2364f.svg?style=for-the-badge&logo=directus&logoColor=white) ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)

**Directus** es un CMS que nos permite crear contenidos y una estructura y base de datos para luego exponer toda esa arquitectura mediante su API y así poder conectarlo con otras tecnologías y aplicaciones. Al ser un Headless CMS implica que el front es independiente a las bases de datos y al back. 

El objetivo de este estudio es analizar la viabilidad de usar Directus como CMS para futuros proyectos. Para realizar un testeo exhaustivo, se desarrollarán varias aplicaciones sencillas con **Nextjs** (framework frontend elegido para crear las interfaces) y se analizará el acoplamiento de ambas partes.

## Primeros pasos

### Requisitos

Directus solo requiere Node.js y es compatible con la mayoría de los sistemas operativos y proveedores de bases de datos SQL.

- Node.js 12.20+
- npm 6.x+

**Bases de datos compatibles**

- PostgreSQL 10+
- MySQL 5.7.8+
- MariaDB 10.2+
- SQLite 3+
- MS-SQL X.X+
- OracleDB X.X+

### Instalación

#### Directus

Instalar con npm:

```console
npm init directus-project <nombre del directorio de la api>
```

Si da error de instalación instalar el módulo que falta:

```console
npm i @napi-rs/snappy-win32-x64-msvc
```

Durante el proceso de instalación seleccionar la base de datos deseada y las credenciales de administración.

Lanzar la aplicación:

```console
cd <ruta del directorio de la api>
npx directus start
```

Servidor lanzado en: http://localhost:8055

#### Nextjs

Instalar con npm:

```console
npx create-next-app@latest <nombre de la aplicación>
```

>[OPCIONAL]
>
>Agregar Typescript a la instalación:

```console
npx create-next-app@latest nextjs-con-typescript <nombre de la aplicación>
```

Lanzar la aplicación:

```console
cd <ruta del directorio de la aplicación>
npm run dev
```

Servidor lanzado en http://localhost:3000

### Dependencias

#### React query

Instalar react query como manejador de estados en el servidor y optimizador del rendimiento de las solicitudes a la API:

```console
cd <ruta del directorio de la aplicación>
```

npm install react-query ![maintenance-status](https://img.shields.io/badge/maintenance-deprecated-red.svg)

```console
npm install @tanstack/react-query
```

#### Zustand

Instalar Zustand como solución ligera, rápida y escalable que utiliza principios de flujo simplificados para manejar estados globales en el cliente:

```console
cd <ruta del directorio de la aplicación>
npm install zustand
```

#### Tailwind

Instalar Tailwind como framework CSS para estilizar prototipos y casos de testing al permitir un desarrollo ágil y optimizado:

```console
cd <ruta del directorio de la aplicación>
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

#### Next Auth

Instalar Next Auth para ejecutar las pruebas de autentificación en la aplicación de una manera sencilla y rápida:

```console
cd <ruta del directorio de la aplicación>
npx install next-auth
```

### Variables de entorno local

Variables del entorno de *Desarrollo* usadas al compilar/ejecutar la aplicación:

```console
GRAPHQL=http://localhost:8055/graphql
NEXT_PUBLIC_GRAPHQL=http://localhost:8055/graphql
```
```console
GRAPHQL_FILES_URL=http://localhost:8055/graphql/system
NEXT_PUBLIC_FILES_URL=http://localhost:8055/graphql/system
```
```console
ASSETS_URL=http://localhost:8055/assets
NEXT_PUBLIC_ASSETS_URL=http://localhost:8055/assets
```
```console
COLLECTION_URL=http://localhost:8055/ítems
NEXT_PUBLIC_COLLECTION_URL=http://localhost:8055/items
```

### Actualización

#### Directus

Introducir la versión actual en el archivo `package.json` para actualizar el proyecto a la última versión de Directus:

```console
{
  "dependencies": {
    "directus": "x.x.x"
  }
}
```

Ejecutar:

```console
cd <ruta del directorio de la aplicación>
npx install
```

#### Base de datos

Actualizar la base de datos si la hemos manipulado manualmente, para que Directus integre los cambios:

```console
cd <ruta del directorio de la aplicación>
npx directus database migrate:latest
```

