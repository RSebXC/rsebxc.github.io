# Rodrigo Castro · Portafolio

[Ver portafolio](https://rsebxc.github.io/) · [Repositorio](https://github.com/RSebXC/rsebxc.github.io) · [Despliegues](https://github.com/RSebXC/rsebxc.github.io/actions/workflows/deploy.yml)

Portafolio personal en español de **Rodrigo Sebastián Castro Aguilar**, desarrollador backend y soporte de bases de datos. Presenta experiencia, formación y nueve casos de proyecto: seis propios y tres colaboraciones, con estado y contribución individual.

Sitio 100 % estático: no requiere servidor de aplicaciones, base de datos ni credenciales. Los enlaces de proyectos llevan al código público; el contacto abre el cliente de correo.

## Stack

- Astro + TypeScript en modo estricto.
- Tailwind CSS 4 mediante el plugin oficial de Vite; variables CSS para los temas.
- Inter Variable, servida localmente.
- SVG locales y fotos optimizadas; sin bibliotecas de animación ni frameworks cliente.
- GitHub Actions para verificar, compilar y desplegar en GitHub Pages.

Las versiones exactas están en `package.json` y `package-lock.json`.

## Ejecutar localmente

Requiere **Node.js 24 LTS** y npm. Puedes usar `.nvmrc` con tu gestor de versiones.

```sh
npm ci
npm run dev
```

Abre la URL indicada por Astro, normalmente `http://localhost:4321`.

```sh
npm run check        # Tipos de TypeScript y componentes Astro
npm run build        # Genera dist/
npm run verify       # Verifica metadatos, anclas, assets y los 9 proyectos
npm run preview     # Sirve el resultado de producción
npm run format      # Formato del código
npm run sync:github  # Actualiza la captura pública de repositorios y lenguajes
```

## Estructura

```text
src/
├── components/       # Secciones y componentes reutilizables
├── data/             # Todo el contenido editable, separado de la presentación
│   ├── profile.ts    # Nombre, biografía, contacto, foto y SEO
│   ├── projects.ts   # Casos de proyecto y contribuciones
│   ├── experience.ts
│   ├── skills.ts
│   ├── education.ts
│   ├── github.ts     # Captura fechada de datos públicos de GitHub
│   ├── technology.ts # Relación de tecnologías e iconos locales
│   ├── site.ts       # Navegación, títulos y textos de interfaz
│   └── types.ts      # Contratos de datos
├── layouts/          # HTML base, metadatos y datos estructurados
├── pages/            # Inicio, robots.txt y sitemap.xml estáticos
├── scripts/          # Tema, animación y copiar correo
├── styles/           # Tailwind y sistema visual
└── utils/            # URLs compatibles con subdirectorios
public/               # CV público, foto, Open Graph y favicons
scripts/              # Verificación del resultado compilado
.github/workflows/    # Build y despliegue
```

## Actualizar contenido

Edita los archivos de `src/data/`; no necesitas modificar los componentes. Para un proyecto nuevo, agrega un objeto en `projects.ts` con problema, aporte, tecnologías, enlaces, estado, tipo (`own` o `collaboration`) y visual. Si cambia la cantidad de proyectos, actualiza también la expectativa de `scripts/verify-site.mjs`.

## Presentación y métricas

- Identidad azul cobalto y violeta, con temas claro/oscuro y selector accesible en la cabecera.
- Tarjetas con contexto, alcance, contribución, documentación y acceso al código. Filtros para proyectos propios y colaboraciones.
- Mis Finanzas usa capturas reales del repositorio con datos ficticios. GTVS se presenta como prototipo sobre una red sintética y Barbería como análisis y arquitectura propuesta, sin afirmar una implementación operativa.
- KPI derivados de la selección: nueve proyectos, seis propios y tres colaboraciones. Los 34 repositorios públicos y los conteos por lenguaje corresponden a la captura de GitHub del 6 de noviembre de 2026.
- Las barras representan repositorios por lenguaje principal, no porcentajes de dominio ni líneas de código. Se excluyen repositorios sin lenguaje, HTML, CSS y Makefile de esa gráfica.
- `npm run sync:github` consulta la API pública y actualiza `src/data/github.ts`; revisa y confirma el diff antes de publicar. Admite `GITHUB_TOKEN` opcional en el entorno para evitar límites de consultas. El sitio generado no realiza llamadas a GitHub en el navegador.
- Iconos locales de [Devicon](https://github.com/devicons/devicon), con licencia MIT conservada en `public/icons/tech/LICENSE.txt`.

- **Foto:** `public/images/rodrigo-castro.webp`. Se extrajo la foto real del CV, no el avatar ilustrado de GitHub. Mantén una imagen cuadrada y actualiza `portraitAlt` si cambia su contenido.
- **Open Graph:** `public/images/og-rodrigo-castro.jpg`, 1200 × 630. Es una imagen independiente con la misma foto y debe actualizarse si cambia el nombre o perfil.
- **CV:** `public/CV_Rodrigo_Castro_Aguilar.pdf`. La copia pública elimina teléfonos, NIT y referencias personales mediante redacción real del PDF. El original se conserva únicamente en `.private/`, excluido de Git. Revisa estos datos antes de reemplazarlo por otra versión.
- **Formación e idiomas:** siguen la información más reciente proporcionada: pensum cerrado, pendiente de graduación e inglés básico. El documento original contiene información anterior.

## Publicar en GitHub Pages

1. En GitHub, crea un repositorio público vacío llamado **`rsebxc.github.io`**, sin README ni `.gitignore` iniciales. Esa opción publica en `https://rsebxc.github.io/`.
2. Desde esta carpeta, conecta el repositorio y sube los commits:

   ```sh
   git remote add origin https://github.com/RSebXC/rsebxc.github.io.git
   git push -u origin main
   ```

3. En el repositorio, abre **Settings → Pages → Build and deployment → Source** y selecciona **GitHub Actions**.
4. Abre **Actions → Build and deploy to GitHub Pages → Run workflow** si el primer push ocurrió antes de habilitar Pages.
5. Espera a que terminen los trabajos `build` y `deploy`. La URL aparece en el entorno `github-pages` y en Settings → Pages.

Cada push posterior a `main` ejecuta `npm ci`, comprueba tipos, genera el sitio, verifica los archivos y publica `dist/`. No necesitas un token personal: el workflow usa `GITHUB_TOKEN` con permisos limitados por trabajo.

También puedes usar otro nombre, por ejemplo `portfolio`. Cambia la URL del remoto; la dirección será `https://rsebxc.github.io/portfolio/`. El workflow obtiene la URL real con `configure-pages` y la pasa como `SITE_URL`: Astro ajusta `site`, `base`, metadatos, sitemap y rutas de assets automáticamente. Para un dominio propio, configura el dominio en Pages y vuelve a desplegar.

Para comprobar localmente una ruta de repositorio en PowerShell:

```powershell
$env:SITE_URL = 'https://rsebxc.github.io/portfolio/'
npm run build
npm run verify
npm run preview
# Abre http://localhost:4321/portfolio/
# Al terminar:
Remove-Item Env:SITE_URL
```

## Accesibilidad y rendimiento

- HTML semántico, enlace para saltar al contenido, textos alternativos y foco visible.
- Detalles de proyectos con `<details>`, accesibles con teclado y sin JavaScript.
- Tema del sistema por defecto; selector de claro/oscuro/sistema con preferencia local.
- Animaciones discretas y desactivadas con `prefers-reduced-motion`; contenido accesible sin JavaScript.
- Fuentes, imágenes e iconos locales; sin consultas a GitHub al visitar el sitio, trackers ni recursos de terceros.
- SEO: canonical, description, Open Graph con foto, Twitter Card, datos estructurados `Person`, sitemap y robots.

Para repetir una auditoría, sirve primero el build con `npm run preview`. En otra terminal, con Chrome instalado:

```sh
npx lighthouse http://localhost:4321/ --only-categories=performance,accessibility,seo --output=html --output-path=lighthouse.html --chrome-flags="--headless --no-sandbox"
```

El objetivo es 95+ en rendimiento, accesibilidad y SEO. Las mediciones locales son una referencia: repite la auditoría sobre la URL publicada, porque red, hosting y dispositivo afectan el resultado.

Resultado de la entrega local: **100 en rendimiento, 100 en accesibilidad y 100 en SEO**, tanto en móvil como en escritorio. Consulta [las comprobaciones y sus límites](docs/verification.md).

## Fuentes del contenido

Contenido basado en el CV y las aclaraciones de Rodrigo; repositorios y documentación pública revisados el 2 de noviembre de 2026. Los proyectos grupales identifican el aporte personal y no atribuyen a Rodrigo las APIs de CloudCinema.

El repositorio mantiene commits bajo Conventional Commits. GitHub Pages está configurado para publicar mediante GitHub Actions: cada push a `main` verifica y despliega el sitio en `https://rsebxc.github.io/`.
