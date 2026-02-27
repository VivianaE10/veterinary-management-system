CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    cedula VARCHAR(20) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    rol ENUM('ADMIN', 'USER') NOT NULL DEFAULT 'USER',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE mascotas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    edad INT NOT NULL,
    especie VARCHAR(50) NOT NULL,
    raza VARCHAR(100),
    foto VARCHAR(255),
    usuario_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
    ON DELETE CASCADE
);

CREATE TABLE consultas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    mascota_id INT NOT NULL,
    fecha DATE NOT NULL,
    motivo TEXT,
    diagnostico TEXT,
    tratamiento TEXT,
    veterinario VARCHAR(100),
    
    FOREIGN KEY (mascota_id) REFERENCES mascotas(id)
    ON DELETE CASCADE
);

CREATE TABLE hospitalizaciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    mascota_id INT NOT NULL,
    fecha_ingreso DATE NOT NULL,
    fecha_salida DATE,
    dias INT,
    observaciones TEXT,
    
    FOREIGN KEY (mascota_id) REFERENCES mascotas(id)
    ON DELETE CASCADE
);

CREATE TABLE documentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    mascota_id INT NOT NULL,
    tipo ENUM('RADIOGRAFIA', 'FORMULA', 'EXAMEN') NOT NULL,
    archivo_url VARCHAR(255) NOT NULL,
    fecha DATE NOT NULL,
    descripcion TEXT,
    
    FOREIGN KEY (mascota_id) REFERENCES mascotas(id)
    ON DELETE CASCADE
);