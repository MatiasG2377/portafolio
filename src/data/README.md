# Contenido del sitio

Todo el contenido editable vive en esta carpeta. Los componentes de `src/components/`
no tienen texto de contenido dentro: leen de aquí y se adaptan a la cantidad de items.

Cada texto traducible se escribe **una sola vez**, con los dos idiomas juntos:

```ts
title: { en: 'System Design', es: 'Diseño de Sistemas' }
```

TypeScript avisa si falta un idioma.

## Qué hay en cada archivo

| Archivo | Sección | Al añadir/quitar items |
|---|---|---|
| `projects.ts` | Proyectos | El grid se reacomoda; los chips de filtro se recalculan solos |
| `domains.ts` | Categorías de proyecto | Define los chips posibles y su orden |
| `focus.ts` | Enfoque Actual | La numeración `01, 02...` se regenera |
| `lab.ts` | Laboratorio | Las celdas rellenan la fila completa siempre |
| `journey.ts` | Trayecto | El **último** item queda abierto por defecto |
| `interests.ts` | Tags de About | Fluyen en varias líneas sin romper bordes |
| `sections.ts` | Orden y numeración | Reordenar aquí renumera los eyebrows y reordena el nav |
| `../config.ts` | Email, redes, CV, foto | — |

## Añadir un proyecto

```ts
// src/data/projects.ts
{
  slug: 'mi-proyecto',
  domain: 'web',                    // debe existir en domains.ts
  title: { en: 'My Project', es: 'Mi Proyecto' },
  desc:  { en: '...', es: '...' },
  tags: ['Astro', 'TypeScript'],
  image: '/projects/mi-proyecto.png', // opcional → si falta, patrón de rayas
  url: 'https://...',                 // opcional → título clicable
}
```

Con **un solo proyecto** la card mantiene su ancho de columna (no se estira por toda
la pantalla) y el filtro se oculta si solo hay un dominio en uso.

Las imágenes van en `public/projects/`. La ruta se escribe desde la raíz: `/projects/x.png`.

## Añadir un año al trayecto

Agrega el objeto al **final** de `milestones` en `journey.ts`. Ese será el que
aparezca desplegado por defecto.

## Añadir una categoría de proyecto

1. Nueva entrada en `domains.ts` con un `key` único.
2. Úsala en el campo `domain` de algún proyecto.

El chip aparece solo cuando hay al menos un proyecto que la usa.

## Cambiar textos fijos (títulos de sección, nav, hero)

`src/i18n/en.ts` y `src/i18n/es.ts`. Solo strings de interfaz — nada de listas.
