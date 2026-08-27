# Natalia Barbiera — Galería de Arte

Galería digital responsive con 14 obras originales de Natalia Barbiera. Incluye recorrido editorial, vista ampliada, navegación entre obras y consultas directas por WhatsApp.

## Publicar con GitHub y Vercel

1. Descomprimí el ZIP.
2. Subí **todo el contenido de esta carpeta** a la raíz de un repositorio de GitHub.
3. En Vercel, elegí **Add New → Project** e importá el repositorio.
4. Vercel detectará automáticamente Next.js. No hace falta configurar variables de entorno.
5. Seleccioná **Deploy**.

## Ejecutar localmente

Requiere Node.js 22 o superior.

```bash
npm install
npm run dev
```

Luego abrí `http://localhost:3000`.

## Editar la colección

- Datos, orden y estado de las obras: `app/page.tsx`.
- Fotografías: `public/artworks/`.
- Estilos: `app/globals.css`.
- Título y descripción del sitio: `app/layout.tsx`.

Para sumar o reemplazar una obra, guardá la imagen en `public/artworks/` y actualizá su objeto dentro del arreglo `artworks` de `app/page.tsx`.
