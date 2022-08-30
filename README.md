# Page Builder ![Directus](https://img.shields.io/badge/directus-%2364f.svg?style=for-the-badge&logo=directus&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

La falta de plantillas, themes y funcionalidad en cuanto a la presentación del contenido de **Directus**, significa que hay que buscar tecnologías adicionales para servir como “cabeza” de este CMS. La integración de estas tecnologías que garanticen un óptimo resultado no es una tarea sencilla.

El objetivo de este desarrollo es proponer una solución alternativa que sea fácil de implementar y no rompa los principios de **Directus**.

Esta solución consiste en extender su funcionalidad, en cuanto a la gestión del contenido, para que la persona encargada de realizar esta tarea pueda tener un impacto directo en la capa de presentación de la aplicación. De esta manera no solo podrá decidir qué información se visualizará en la aplicación, sino que además también podrá decidir dónde se visualizará.

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
cd <ruta del directorio de la aplicación>
npm install @tanstack/react-query
```

#### React Router

Instalar react router para gestionar las rutas de nuestra aplicación:

```console
cd <ruta del directorio de la aplicación>
npm install react-router-dom
```

#### Tailwind

Instalar Tailwind como framework CSS para estilizar prototipos y casos de testing al permitir un desarrollo ágil y optimizado:

```console
cd <ruta del directorio de la aplicación>
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```