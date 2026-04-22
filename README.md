# 🐾 Veterinary Management System

![NestJS](https://img.shields.io/badge/NestJS-Backend-red)
![MySQL](https://img.shields.io/badge/MySQL-Database-blue)
![JWT](https://img.shields.io/badge/Auth-JWT-green)
![Status](https://img.shields.io/badge/status-en%20desarrollo-yellow)

Sistema de gestión veterinaria enfocado en brindar a los dueños de mascotas acceso y control sobre la información clínica de sus animales, permitiendo consultar su historial médico de forma clara, organizada y centralizada.

---

## 📌 Problema

En muchas veterinarias, la información clínica de las mascotas es gestionada internamente por el personal médico. Sin embargo, los dueños no tienen acceso directo, organizado ni permanente a ese historial.

Esto genera situaciones como:

- Fórmulas médicas entregadas únicamente en formato físico
- Resultados de exámenes o radiografías que en ocasiones se envían por correo o mensaje (como WhatsApp), pero no de manera consistente
- Información distribuida en diferentes canales sin un acceso centralizado
- Resúmenes de hospitalización entregados en papel, sin respaldo digital para el usuario

Como consecuencia:

- El dueño no tiene control ni seguimiento continuo de la información médica
- Se dificulta el acceso al historial en futuras consultas
- Existe riesgo de pérdida de documentos importantes
- No hay trazabilidad clara de los procedimientos realizados

En resumen, aunque la información existe dentro de la veterinaria, el usuario final no cuenta con una herramienta para consultarla y gestionarla de forma autónoma.

---

## 💡 Solución

Este sistema permite centralizar la información clínica de las mascotas y ponerla a disposición del usuario, facilitando el acceso, seguimiento y control del historial médico.

---

## 👥 Roles del sistema

### 👤 Usuario

- Consulta la información de sus mascotas
- Accede al historial clínico (consultas, diagnósticos y tratamientos)
- Visualiza información de hospitalizaciones
- Consulta documentos médicos como exámenes, radiografías y fórmulas

### 🛠️ Administrador

- Registra y gestiona la información en el sistema
- Administra usuarios y mascotas

---

## 🧱 Tecnologías utilizadas

- **Backend:** NestJS
- **Base de datos:** MySQL
- **ORM:** TypeORM
- **Autenticación:** JWT
- **Validaciones:** DTOs + ValidationPipe
- **Encriptación:** bcrypt

---

## 📁 Estructura del proyecto

veterinary-management-system/
├── backend/ # API REST con NestJS
├── frontend/ # Aplicación cliente con Angular
├── database/ # Scripts de base de datos
└── README.md # Documentación principal

## ⚙️ Funcionalidades implementadas

### 🔐 Autenticación

- Login de usuario
- Generación de token JWT
- Validación de credenciales
- Encriptación de contraseñas

---

### 👤 Gestión de usuarios (CRUD)

- Crear usuario
- Obtener todos los usuarios
- Obtener usuario por ID
- Buscar usuario por correo
- Buscar usuario por cédula
- Actualizar usuario
- Eliminar usuario

---

### ✅ Validaciones

- Campos obligatorios
- Restricción de datos duplicados
- Validación de tipos de datos
- Uso de DTOs

---

### ⚠️ Manejo de errores

- Filtro global de excepciones
- Manejo de errores de base de datos (ER_DUP_ENTRY → 409)
- Respuestas HTTP correctas (400, 401, 404, 409, 500)

---

## 🔗 Endpoints disponibles

### Usuarios

- GET /users
- GET /users/:id
- GET /users/correo/:correo
- GET /users/cedula/:cedula
- POST /users
- PATCH /users/:id
- DELETE /users/:id

---

### Autenticación

POST /auth/login

---

## 🗄️ Modelo de datos actual

Entidades :

- User
- Pet
- consultation
- hospitalization
- document

Relación:

- Un usuario puede tener múltiples mascotas

---

## 🔐 Variables de entorno

````env
DB_HOST=
DB_PORT=
DB_USERNAME=
DB_PASSWORD=
DB_NAME=

JWT_SECRET=
JWT_EXPIRES=1h

---

## ▶️ Ejecución del proyecto

```bash
cd backend
npm install
npm run start:dev
````
