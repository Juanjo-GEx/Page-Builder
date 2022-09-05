# Page Builder ![Directus](https://img.shields.io/badge/directus-%2364f.svg?style=for-the-badge&logo=directus&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

Aunque **Directus** no fue pensado para que la persona encargada de gestionar el contenido realizase personalizaciones del mismo, ni para que pudiese decidir sobre la maquetación de la aplicación, esporádicamente puede ser necesario que este perfil pueda crear ciertas partes del sitio sin necesidad de recurrir al desarrollador frontend. El objetivo de este desarrollo es proponer una solución que sea fácil de implementar y no rompa los principios de **Directus**.

Esta solución consiste en extender su funcionalidad, en cuanto a la gestión del contenido, para que la persona encargada de realizar esta tarea pueda tener un impacto directo en la capa de presentación de la aplicación. De esta manera no solo podrá decidir qué información se visualizará en la aplicación, sino que además también podrá decidir dónde se visualizará.

## Requisitos

- Se usará **Directus** como gestor de contenidos para almacenar los datos. 
- Se usará **GraphQL** como sistema de conexión.
- Se urará **React** como framework de frontend para la creación de la interfaz de la aplicación.
- El gestor de base de datos creará el modelo de datos y dará los permisos oportunos para que la persona encargada de administrar la información pueda gestionarla de una manera eficiente.
- Los permisos en este sentido serán:
    - Tendrá todos los permisos para la creación de nuevas páginas, secciones, contenidos y menús.
    - Únicamente tendrá permisos de lectura para la visualización de las plantillas disponibles.
- Se limitará la estilización de contenidos desde Directus.
- Tanto los menús como las páginas se crearán dinámicamente desde Directus.

## Primeros pasos

### Instalación de Directus

Instalar con npm:

```console
npm init directus-project <nombre del directorio de la api>
```

Durante el proceso de instalación seleccionar la base de datos deseada y las credenciales de administración.

Lanzar la aplicación:

```console
cd <ruta del directorio de la api>
npx directus start
```

Servidor lanzado en: http://localhost:8055

### Instalación de React

Instalar con npm:

```console
npm create vite@latest <nombre del directorio de la app>
```

Durante el proceso de instalación seleccionar **React** como framework del proyecto.

Lanzar la aplicación:

```console
npm create vite@latest <nombre del directorio de la app>
cd <ruta del directorio de la app>
npm install
npm run dev
```

Servidor lanzado en: http://127.0.0.1:5173/

### Instalación de extensiones

#### Editor.js

Instalar editor.js como editor de texto enriquecido para mejorar la experiencia de usuario a la hora de insertar contenido en Directus.

```console
cd <ruta del directorio de la api>
npm install directus-extension-editorjs
```

### Instalación de dependencias

#### React Query

Instalar react query como manejador de estados en el servidor y optimizador del rendimiento de las solicitudes a la API:

```console
cd <ruta del directorio de la app>
npm install @tanstack/react-query
```

#### React Router

Instalar react router para gestionar las rutas de nuestra aplicación:

```console
cd <ruta del directorio de la app>
npm install react-router-dom
```

#### Tailwind

Instalar Tailwind como framework CSS para estilizar prototipos y casos de testing al permitir un desarrollo ágil y optimizado:

```console
cd <ruta del directorio de la app>
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## Casos de uso

1. [**CU-01**] El GC tendrá todos los permisos para la administración de las páginas, secciones, contenidos y menús, pero únicamente tendrá permisos de lectura para poder visualizar las plantillas disponibles.
2. [**CU-02**] El GC administrará los menús de la aplicación de tal manera que una vez creados puedan visualizarse.
3. [**CU-03**] El GC administrará el contenido, pero no podrá darle estilos.
4. [**CU-04**] El GC podrá decidir qué contenido se publicará en cada sección.
5. [**CU-05**] El GC podrá decidir qué secciones se incluirán en cada página y además podrá aplicarle una plantilla para determinar la estructura de cada página.