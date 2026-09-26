# MantaLink — Mockup web

Mockup interactivo del portal digital comunitario **MantaLink**, desarrollado como parte del
proyecto de grado *"Portal Digital Comunitario como Sistema de Información Estratégico para la
Promoción de Emprendimientos Locales"*.

> Este mockup es una guía de referencia, no la versión final del sistema. Su objetivo es
> representar la estructura, navegación y estilo visual del portal antes del desarrollo técnico
> real, en línea con los prototipos de baja y alta fidelidad presentados en el documento del
> proyecto.

## Cómo verlo

Solo abre `index.html` en el navegador (doble clic, o clic derecho → "Abrir con..."). No necesita
servidor ni instalación: es HTML, CSS y JavaScript planos.

## Estructura del proyecto

```
mantalink-mockup/
├── index.html        # Estructura de las pantallas (inicio, detalle, login, registro, etc.)
├── css/
│   └── styles.css    # Estilos: colores, tipografía, layout responsive
├── js/
│   └── app.js         # Navegación entre pantallas y datos de ejemplo (mock data)
└── README.md          # Este archivo
```

## Pantallas incluidas

- **Inicio** — buscador, filtros por categoría y catálogo de productos destacados.
- **Detalle de producto** — descripción, vendedor y botones de contacto (WhatsApp / llamada).
- **Servicios** — catálogo filtrado de servicios comunitarios (transporte, talleres, hospedaje).
- **Ingresar / Registro** — formularios con recuperación de contraseña y verificación de datos.
- **Vender** — panel simulado de "mis productos" para un emprendedor.
- **Ayuda** — preguntas frecuentes.
- **Perfil** — datos básicos del usuario.

## Responsive

- **Escritorio:** menú de navegación completo en la parte superior.
- **Móvil (≤680px):** el menú superior se colapsa en un botón de hamburguesa, y aparece una
  barra inferior fija con accesos rápidos (Inicio / Vender / Perfil).

## Decisiones de diseño (según retroalimentación del proyecto)

- Paleta de colores reducida y consistente (verde + dorado) para evitar saturación visual.
- Filtros de búsqueda ubicados junto a la barra de búsqueda, no dispersos en la pantalla.
- Botón de ayuda con texto explícito ("? Ayuda") en vez de un ícono ambiguo.
- Registro con tipo y número de documento, y confirmación de contraseña.
- Sin carrito de compras ni pasarela de pagos — fuera del alcance del proyecto (ver limitaciones
  en el documento de la fase 1).

## Próximos pasos sugeridos

- Reemplazar las imágenes de Unsplash por fotografías reales de los emprendedores.
- Conectar los formularios a un backend real (por ahora son simulados con `toast()`).
- Ajustar contenido y textos según nueva retroalimentación de usuarios.
