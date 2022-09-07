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

## Modelo de datos

### [CU-01] - Permisos

El GBD determinará los permisos de las colecciones que acaba de crear. Para que el GC pueda leer, actualizar, crear y borrar cualquier campo de las colecciones: `menus, pages, sections y components`, es necesario que se cambien esos permisos para que sean accesibles por ese rol. Para la colección `templates` únicamente se otorgarán permisos de lectura.

```console
Settings > Roles & Permissions > Editor
```

## Contenidos

### [CU-02] - Menús

El GC simplemente tendrá que acceder a la siguiente ruta para poder crearlos:

```console
Content > Menus> Create item
```

### [CU-03] - Contenido

**Editorjs** es una biblioteca para editar contenido de código abierto que facilita la edición y la personalización de bloques de contenido. Además, devuelve los datos en formato `JSON` limpio y legible. Los datos limpios son más rápidos de cargar, más fáciles de depurar y mejoran el rendimiento general del proyecto.

Con esta extensión se puede agregar multitud de tipo de contenido como lo podíamos hacer con `WYSIWYG` usando el editor en línea, pero sin la opción de poder estilizarlo. Si queremos añadir más tipo de contenido y hacer uso de un editor avanzado se podría extender igualmente.

### [CU-04] - Secciones

Por cada región de la aplicación el GC tendrá que crear una colección de tipo `section`, y en ella determinar qué contenido irá alojado en cada una de ellas.

### [CU-05] - Páginas

El GC creará las colecciones de tipo page que contendrán las diferentes secciones prefijadas en el prototipo de la aplicación. Este tipo de colección tiene una peculiaridad con respecto al tipo de colección `section` y es que el GC podrá determinar qué plantilla usar para que su aspecto se ajuste al diseño de la aplicación. Estas plantillas se han implementado previamente en el frontal.

```diff
- ¡PROBLEMA!
```

Inicialmente la llamada a la API con **React Query** se hace filtrando por la página que quereamos mostrar, pero tenemos problemas cuando queremos hacer un refetch (nueva llamada a la API) al cambiar de ruta, para que nos renderice el componente y nos muestre la nueva información. **React Query** no nos proporciona un método propio para hacer un refetch cuando usamos *rutas dinámicas que renderizan un mismo componente*. 

Para solucionarlo, al realizar la llamada a la API en vez de filtrar por la página que queremos mostrar, en función de la url, tendremos que consumir la API sin hacer el filtrado, para traernos toda la información y luego mediante un manejador de estados hacer nosotros el filtrado.

## BUG

Para mejorar la experiencia de usuario del GC, se ha modificado el modelo de datos. El GBD tendrá que añadir un nuevo campo a la colección templates para que el GC pueda previsualizar la plantilla antes de crearla y así de un vistazo pueda identificarla más rápidamente y evitar confusiones y minimizar los errores.

Con la implementación de este nuevo requisito se ha detectado un bug en **Directus** que ya está reportado y solucionado:

[Bug en Directus](https://github.com/directus/directus/issues/15398)

## Construido con...

* [Directus](https://docs.directus.io/) - Usado como API y gestor de bases de datos
* [React](https://es.reactjs.org/) - Usado como framework para manajar la capa de presentación

## Documentación

La documentación del proyecto se puede consultar en la carpeta correspondiente.