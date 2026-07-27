/**
 * Orden de las secciones. Manda tanto el número que se muestra
 * en el eyebrow ("01 / About") como el orden del nav.
 * Reordenar aquí renumera todo sin tocar los componentes.
 */
export const sectionOrder = ['about', 'focus', 'lab', 'projects', 'journey', 'contact'] as const;

export type SectionId = (typeof sectionOrder)[number];

/** '01', '02', ... según la posición en sectionOrder. */
export function sectionNumber(id: SectionId): string {
  return String(sectionOrder.indexOf(id) + 1).padStart(2, '0');
}
