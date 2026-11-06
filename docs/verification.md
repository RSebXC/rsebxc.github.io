# Verificación local

Fecha de esta revisión: **6 de noviembre de 2026**. Rediseño en azul cobalto y violeta, nueve casos de proyecto y datos públicos de GitHub fechados. Build estático servido con `astro preview` en Windows, Node.js 24 y Chrome headless. Auditoría con Lighthouse 13.5.0 sobre `http://127.0.0.1:4321/`.

## Resultado

| Perfil     | Rendimiento | Accesibilidad | SEO |
| ---------- | ----------: | ------------: | --: |
| Móvil      |         100 |           100 | 100 |
| Escritorio |         100 |           100 | 100 |

Los informes HTML y JSON, las capturas completas y los resultados de navegador se conservan localmente en `.verification/refresh/`, excluidos de Git. Los resultados de esta tabla corresponden al servidor local; se comprueba también la URL publicada al completar el despliegue.

## Comprobaciones realizadas

- `npm run check`: 0 errores, advertencias o hints de Astro/TypeScript.
- `npm run build`: salida estática generada correctamente.
- `npm run verify`: nueve proyectos, anclas internas, metadatos, archivos públicos y sitemap.
- Compatibilidad con raíz y subdirectorio de Pages conservada mediante el mismo helper de URLs; las dos variantes se comprobaron en la entrega inicial.
- `npm run format:check`: formato correcto.
- Inspección visual de capturas, cabeceras, tarjetas y Open Graph con la foto real.
- Pruebas de navegador en 1440 × 1000, 768 × 1024, 390 × 844 y 320 × 740; temas claro y oscuro.
- Filtros: nueve proyectos totales, seis propios y tres colaboraciones. Conteo y visibilidad correctos.
- Navegación de teclado, apertura de detalles con Enter, copia de correo y persistencia/cambio de tema comprobados.
- Axe: cero infracciones WCAG A/AA detectadas en los cuatro tamaños, con detalles abiertos y cerrados. Sin desbordamiento horizontal, respuestas HTTP fallidas ni errores de JavaScript.
- Sin JavaScript: los nueve proyectos y los detalles nativos permanecen accesibles.
- README del perfil validado con el renderizador de GitHub; SVG locales revisados y cabeceras/gráficas renderizadas para inspección.
- El CV público conserva la redacción de teléfonos, NIT y referencias revisada en la entrega inicial; no se modificó el PDF en esta revisión.

Las pruebas de interacción se ejecutaron mediante Playwright y Axe en un perfil temporal de Chrome headless. No se realizó una prueba con lector de pantalla ni una validación manual en un teléfono físico; los resultados automatizados no sustituyen esas comprobaciones.

## Alcance de las métricas y de los proyectos

- 34 repositorios públicos en la captura de GitHub del 6 de noviembre de 2026. Las barras cuentan repositorios por lenguaje principal; no representan dominio ni líneas de código.
- Seis proyectos propios y tres colaboraciones, según la contribución confirmada por Rodrigo.
- Mis Finanzas: capturas del repositorio con datos ficticios, Android y SQLite locales.
- GTVS: prototipo con datos sintéticos; no se presenta como navegación real ni garantía de seguridad.
- Barbería: la versión pública revisada contiene análisis, casos de uso y arquitectura propuesta. No se afirma una implementación operativa.

## Repetir Lighthouse

Con `npm run preview` activo y Chrome instalado, desde otra terminal:

```sh
npx lighthouse http://127.0.0.1:4321/ --only-categories=performance,accessibility,seo --output=html --output=json --output-path=lighthouse-mobile --chrome-flags="--headless --no-sandbox --disable-gpu"
npx lighthouse http://127.0.0.1:4321/ --preset=desktop --only-categories=performance,accessibility,seo --output=html --output=json --output-path=lighthouse-desktop --chrome-flags="--headless --no-sandbox --disable-gpu"
```

Las puntuaciones pueden variar según el equipo, carga y condiciones de red. Antes de publicar cambios de contenido, vuelve a ejecutar al menos `npm run check`, `npm run build` y `npm run verify`.
