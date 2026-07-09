# ModeliFy

![Node.js](https://img.shields.io/badge/Node.js-20-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-5-000000?logo=express&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-6-52B0E7?logo=sequelize&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-Red-CC0000?logo=ejs&logoColor=white)

ModeliFy es una plataforma de comercio electrónico construida con Node.js y Express, que permite gestionar productos, usuarios y ventas desde una interfaz web basada en servidor. El proyecto está pensado para evolucionar hacia un caso de negocio con mayor seguridad, un proceso de compra completo y futura integración de inteligencia artificial.

## ¿Qué hace ModeliFy?

- Administra productos, categorías y stock.
- Gestiona usuarios, roles y accesos.
- Sube imágenes de productos con Multer.
- Renderiza vistas dinámicas con EJS.
- Trabaja con datos persistentes usando Sequelize.
- Soporta un panel administrativo y páginas públicas.

## Stack tecnológico

| Área | Tecnología | Documentación |
|---|---|---|
| Backend | Node.js + Express | https://nodejs.org/ https://expressjs.com/ |
| Vistas | EJS | https://ejs.co/ |
| ORM | Sequelize | https://sequelize.org/ |
| Archivos | Multer | https://github.com/expressjs/multer |
| Frontend | CSS + Bootstrap | https://getbootstrap.com/ |
| Base de datos | SQLite / Sequelize | https://www.sqlite.org/index.html |

## Arquitectura

ModeliFy organiza el código en capas para mantener separación de responsabilidades:

```text
ModeliFy/
├── app.js
├── controllers/
├── database/
│   ├── config/
│   ├── models/
│   └── seeders/
├── middlewares/
├── models/
├── public/
│   ├── css/
│   ├── images/
│   └── js/
├── routes/
├── services/
├── views/
└── imagenes/
```

### Flujo general

1. El cliente solicita una ruta en Express.
2. Las rutas delegan la lógica a los controladores.
3. Los controladores usan services y modelos para acceder a la base de datos.
4. El servidor renderiza vistas EJS y entrega HTML al navegador.

## Estructura del proyecto

- `controllers/` — controladores de rutas y lógica de respuesta.
- `models/` — modelos de base de datos con Sequelize.
- `routes/` — definición de rutas de Express.
- `database/` — configuración de base de datos y seeders.
- `middlewares/` — autenticación, validación y seguridad.
- `services/` — lógica de negocio compartida.
- `views/` — vistas y parciales EJS.
- `public/` — CSS, JS, imágenes y otros assets.
- `imagenes/` — archivos subidos localmente.

## Estado actual

### ✅ Implementado

- Estructura básica de un e-commerce con Node.js y Express.
- CRUD de productos y usuarios.
- Vistas EJS para catálogo, detalles, administración y usuarios.
- Subida de imágenes con Multer.
- Seeders para datos iniciales.
- `.gitignore` actualizado para ignorar dependencias y datos sensibles.
- Plan de mejora para autenticación, seguridad, compras y IA.

### 🚧 Pendientes

- Reorganizar la arquitectura por dominios/feature.
- Implementar autenticación con JWT y refresh tokens.
- Añadir seguridad con Helmet, CORS, rate limiting y validaciones.
- Construir el flujo de carrito, checkout y órdenes.
- Integrar una pasarela de pagos en modo sandbox.
- Mejorar el rediseño responsive del frontend.
- Preparar el proyecto para futuras integraciones de IA.

## Cómo ejecutarlo localmente

### Requisitos

- Node.js 18 o superior.
- npm.

### Pasos

```bash
cd c:/Users/ramos/OneDrive/Desktop/DPFS_jose_ramos/ModeliFy
npm install
npm start
```

> Configura un archivo `.env` para variables sensibles si el proyecto lo requiere.

## Esquema de ramas recomendado

- `main` — rama principal estable.
- `develop` — rama de integración (opcional).
- `feature/<descripción>` — nuevas funcionalidades.
- `hotfix/<descripción>` — correcciones urgentes.
- `release/<versión>` — preparación de releases.

### Comandos recomendados

```bash
cd c:/Users/ramos/OneDrive/Desktop/DPFS_jose_ramos/ModeliFy

git checkout main
git pull origin main
git checkout -b feature/auth-jwt
```

## Notas

ModeliFy está diseñado para avanzar con buenas prácticas: trabajar con ramas cortas, revisar cambios y validar antes de fusionar en la rama principal.

