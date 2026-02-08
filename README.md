Task Manager Frontend — React + Vite

Cliente frontend desarrollado con React y Vite para la gestión de tareas mediante operaciones CRUD completas. La aplicación consume una API REST construida con Node.js + Express + Prisma y demuestra integración cliente–servidor, manejo de estado, validación de formularios y arquitectura por componentes.

Stack Tecnológico

React

Vite

JavaScript

Fetch API

CSS modular simple

Arquitectura por componentes

Funcionalidades

Listar tareas desde API REST

Crear tareas con validación de campos

Editar tareas en modo inline

Eliminar tareas

Validación mínima de longitud en frontend

Manejo de estados de carga

Manejo de errores de red

UI consistente con componentes reutilizables

Arquitectura de Componentes

src/

api/ → funciones de acceso HTTP

components/

TaskForm → formulario de creación

TaskList → render de lista

TaskItem → fila de tarea editable

App.jsx → contenedor principal y estado global

styles.css → estilos de interfaz

Se separa la capa de UI de la capa de acceso a datos para facilitar mantenimiento y escalabilidad.

Configuración e Instalación

Clonar repositorio:

git clone
cd demo-crud-frontend

Instalar dependencias:

npm install

Ejecutar en desarrollo

npm run dev

Servidor de desarrollo:

http://localhost:5174

Configuración de API

El frontend espera que el backend esté corriendo en:

http://localhost:3000

Archivo:

src/api/tasks.js

Define las funciones:

getTasks

createTask

updateTask

deleteTask

Si el backend corre en otro puerto, actualizar BASE_URL.

Validaciones de Formulario

Se validan campos antes de enviar:

título mínimo 3 caracteres

descripción mínimo 3 caracteres

Si no se cumple, se muestra mensaje de error y no se envía la petición.

Manejo de Estado

La aplicación usa:

estado global de tareas en App

estado local en formularios

recarga de datos tras mutaciones (create/update/delete)

modo edición controlado por id activo

Estilos de Interfaz

Layout centrado en columna

Componentes de botón reutilizables tipo “pill”

Paleta de colores consistente

Inputs redondeados

Tarjetas de tarea con acciones inline

Posibles Mejoras

Paginación

Filtros y búsqueda

Marcar tareas completadas

Toast notifications

Tests de componentes

Manejo de caché de datos

Integración con React Query

Integración

Este frontend está diseñado para integrarse con el repositorio backend:

demo-crud-api
