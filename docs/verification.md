# Verificación local

Fecha: **2 de noviembre de 2026**. Build estático servido con `astro preview` en Windows, Node.js 24 y Chrome headless. Auditoría con Lighthouse 13.5.0 sobre `http://127.0.0.1:4321/`.

## Resultado

| Perfil     | Rendimiento | Accesibilidad | SEO |
| ---------- | ----------: | ------------: | --: |
| Móvil      |         100 |           100 | 100 |
| Escritorio |         100 |           100 | 100 |

Los informes HTML y JSON, junto con las capturas completas, se conservan localmente en `.verification/`, excluidos de Git. Los resultados corresponden al servidor local y deben repetirse sobre la URL final de Pages.

## Comprobaciones realizadas

- `npm run check`: 0 errores, advertencias o hints de Astro/TypeScript.
- `npm run build`: salida estática generada correctamente.
- `npm run verify`: seis proyectos, anclas internas, metadatos, archivos públicos y sitemap.
- Build y verificación repetidos para la raíz y para `SITE_URL=https://rsebxc.github.io/portfolio/`.
- `npm run format:check`: formato correcto.
- Dependencias auditadas sin vulnerabilidades conocidas en la fecha de revisión.
- Inspección de las capturas de la auditoría en móvil y escritorio.
- CV público: redacción real de teléfonos, NIT y referencias personales; reapertura, comprobación del texto y enlaces, y revisión visual del PDF resultante. Original excluido de Git.

La herramienta de interacción visual con el navegador se detuvo porque no pudo comprobar la URL actual en Windows. No se completó una prueba manual de teclado, lector de pantalla o selector de tema. Lighthouse y la inspección de capturas no sustituyen esas pruebas.

## Repetir Lighthouse

Con `npm run preview` activo y Chrome instalado, desde otra terminal:

```sh
npx lighthouse http://127.0.0.1:4321/ --only-categories=performance,accessibility,seo --output=html --output=json --output-path=lighthouse-mobile --chrome-flags="--headless --no-sandbox --disable-gpu"
npx lighthouse http://127.0.0.1:4321/ --preset=desktop --only-categories=performance,accessibility,seo --output=html --output=json --output-path=lighthouse-desktop --chrome-flags="--headless --no-sandbox --disable-gpu"
```

Las puntuaciones pueden variar según el equipo, carga y condiciones de red. Antes de publicar cambios de contenido, vuelve a ejecutar al menos `npm run check`, `npm run build` y `npm run verify`.
