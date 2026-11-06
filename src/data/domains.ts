import type { Localized } from './types';

/**
 * Dominios de proyecto. Son la fuente de los chips de filtro:
 * solo aparece un chip si al menos un proyecto usa ese dominio,
 * y en este mismo orden.
 *
 * Para añadir un dominio: agrega una entrada aquí y úsala en projects.ts.
 */
export const domains = [
  { key: 'web', label: { en: 'Web Applications', es: 'Aplicaciones Web' } },
  { key: 'mobile', label: { en: 'Mobile Applications', es: 'Aplicaciones Móviles' } },
  { key: 'fullstack', label: { en: 'Full-Stack Systems', es: 'Sistemas Full-Stack' } },
  { key: 'python', label: { en: 'Python & Automation', es: 'Python & Automatización' } },
  { key: 'cloud', label: { en: 'Cloud & Data', es: 'Cloud & Datos' } },
] as const satisfies readonly { key: string; label: Localized }[];

export type DomainKey = (typeof domains)[number]['key'];

export function getDomain(key: DomainKey) {
  return domains.find((d) => d.key === key)!;
}
