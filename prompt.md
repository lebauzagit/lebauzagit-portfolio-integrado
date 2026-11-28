# Portfolio Refinement & Regression Recovery

Version: 1.0

Continúa la implementación del proyecto Personal Brand as Code.

## Baseline validado

- pnpm test: 2/2 passed.
- pnpm check: 0 errors, 0 warnings, 0 hints.
- pnpm build: successful.
- Astro static output.
- Internacionalización EN/ES.
- Dark/light mode visible y operativo según las capturas del propietario.

## P0 — Recuperación de YLGStudio

Durante la auditoría visual se detectó que YLGStudio no aparece en la sección Projects.

La comparación entre el ZIP original y el integrado confirma que ambos contienen:

- public/assets/YLG_Dark.webp
- public/assets/YLG_Light.webp

Los hashes SHA-256 de estos recursos coinciden.

Sin embargo, ninguno de los ZIP contiene las entradas MDX de YLGStudio.

El archivo agents.md original referencia ylg.md.

Investiga el historial Git, las ramas disponibles y la documentación original para recuperar el contenido auténtico de YLGStudio.

Si no existe contenido recuperable, prepara una entrada mínima utilizando exclusivamente información verificable y solicita al propietario los datos faltantes.

No inventes tecnologías, clientes, funcionalidades, fechas ni resultados.

Implementa las entradas EN/ES necesarias y reutiliza las imágenes originales en ambos esquemas cromáticos.

Verifica que se generen las rutas:

- /work/ylgstudio/
- /es/work/ylgstudio/

Añade pruebas de regresión que permitan detectar proyectos esperados ausentes de la colección.

## P1 — Refinamiento de Projects

- Sustituir la distribución escalonada por una cuadrícula responsive equilibrada.
- Dos columnas en escritorio y una columna en dispositivos pequeños.
- Uniformar dimensiones y relaciones de aspecto.
- Conservar las imágenes originales.
- Incorporar descripciones breves y tecnologías verificadas.
- Evitar espacios verticales excesivos.
- Mantener la navegación a los casos de estudio.

## P1 — Refinamiento del Hero

- Conservar la fotografía original.
- Mejorar la distribución del espacio vertical.
- Añadir CTA hacia Projects.
- Preparar CTA hacia Résumé únicamente cuando exista contenido válido.
- Sustituir los iconos heredados de Speaker y Writer por iconos adecuados para Backend Engineering y Automation.
- Mantener el titular profesional existente.

## P1 — Consistencia gráfica

- Adaptar los degradados originales a la paleta Midnight/Sky Blue.
- Mantener las texturas originales cuando aporten valor.
- Unificar bordes, radios, sombras, espaciado y tipografía.
- Mejorar la integración visual del componente TechnologyStack.
- Evaluar el contraste de los iconos sociales.
- Mantener coherencia entre light y dark mode.

## P1 — Hosting y canonical URLs

El propietario ha mostrado capturas del portafolio desplegado en:

https://lebauzagit.vercel.app

La configuración anterior utilizaba Netlify.

Determina si ambas plataformas deben coexistir.

No cambies el dominio canónico definitivo sin confirmación del propietario.

Audita las referencias de hosting en brand.json, astro.config.mjs, SEO, sitemap, robots.txt, Open Graph, JSON-LD, perfiles generados y documentación.

## P2 — Quality Assurance

Verificar:

- Los cuatro proyectos esperados.
- Ambos idiomas.
- Ambos temas.
- Navegación responsive.
- Enlaces cruzados.
- Accesibilidad.
- Rendimiento.
- Integridad de contenido.

Ejecutar después de cada conjunto de cambios:

- pnpm test
- pnpm check
- pnpm build

Mantener el baseline de cero errores, warnings e hints.

No introducir dependencias innecesarias.

Actualizar docs/STATUS.md y registrar los hallazgos con evidencias.

Mantener la versión documental en "1.0".