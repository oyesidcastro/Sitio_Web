# Club La Terraza — Sitio Web Oficial

Sitio web oficial del **Club La Terraza**, un centro gastronómico y musical que ofrece comidas, bebidas, música en vivo, reservas y experiencias para los visitantes.  
Este proyecto presenta una interfaz moderna, intuitiva y orientada a ofrecer al usuario una navegación clara por todas las secciones principales del club.

---

## 🚀 Características Principales

- **Página de inicio completa** con slider interactivo de secciones destacadas.  
- **Menú del restaurante y menú del bar** con tablas de productos y precios.  
- **Sistema de reservas** para seleccionar mesa, hora y cantidad de personas.  
- **Formulario de registro (Unirse)** para suscripciones y promociones.  
- **Login de usuario** para acceso básico.  
- **Diseño responsive** adaptado a dispositivos móviles.  
- **Navegación fácil** mediante una barra superior fija.

---

## 🧩 Estructura del Proyecto

El proyecto está compuesto principalmente por vistas HTML estáticas y hojas de estilo CSS asociadas.

### 📁 **Archivos principales**

| Archivo | Descripción |
|--------|-------------|
| `index.html` | Página principal del sitio, incluye slider, navegación y secciones de información. |
| `menus.html` | Interfaz para elegir entre menú de bar y restaurante. |
| `menubar.html` | Menú completo de bebidas del bar en formato tabla. |
| `menurestaurante.html` | Menú de comidas del restaurante en formato tabla. |
| `reservas.html` | Formulario para reservar mesas seleccionando nombre, mesa, hora y cantidad de personas. |
| `unirse.html` | Formulario de registro para recibir ofertas y promociones. |
| `login.html` | Interfaz de inicio de sesión básico del usuario. |
| `login_base.html` | Vista alternativa para registro mediante formulario estructurado. |
| `slidermoderno.html` | Página independiente con slider moderno interactivo. |

---

## 🎨 Estilos y diseño

El diseño se desarrolla mediante archivos CSS organizados por sección:

- `css/estilos.css` → Estilos generales del sitio.  
- `css/estilosmenus.css` → Estilos para la selección de menús.  
- `css/estilosreservas.css` → Estilos del formulario de reservas.  
- `css/estilosunirse.css` → Estilos de registro y login.  
- `css/estilossignin.css` → Estilos del formulario adicional de registro.

Además, el proyecto utiliza:
- **Materialize** (JS para elementos interactivos del menú móvil).
- **JavaScript propio** en archivos como `js/unirse.js` y `js/login.js` (si existen en tu estructura).

---

## 🧭 Funcionalidades Detalladas

### 🔹 1. Menú (Bar y Restaurante)
Ambos menús utilizan tablas bien formateadas que muestran:
- Producto  
- Precio  
- Categorización visual  
Los archivos correspondientes son `menubar.html` y `menurestaurante.html`.

### 🔹 2. Sistema de Reservas
Incluye:
- Selección de mesa (1–30)  
- Cantidad de personas  
- Hora de la reserva  
- Validaciones básicas  
Archivo asociado: `reservas.html`.

### 🔹 3. Registro y Suscripción (Unirse)
Formulario con campos:
- Nombre  
- Correo  
- Contraseña  
- Confirmación  
El objetivo: suscripción a promociones y avisos del club.  
Archivo: `unirse.html`.

### 🔹 4. Inicio de Sesión (Login)
Sistema básico con:
- Email  
- Contraseña  
Archivo: `login.html`.

### 🔹 5. Slider interactivo
El slider dirige al usuario rápidamente a:
- Menú restaurante  
- Menú bar  
- Reservas  
Archivo: `slidermoderno.html`.

---

## 🛠️ Tecnologías Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**
- **Materialize (framework JS/CSS)**
- **Google Maps Embeded**
- **Tipografías y estilos personalizados**

---

## 📦 Instalación y uso

1. Clonar el repositorio:
```bash
git clone https://github.com/usuario/club-la-terraza.git
