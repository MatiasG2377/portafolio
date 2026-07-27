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
  { key: 'automation', label: { en: 'Automation', es: 'Automatización' } },
  { key: 'ai', label: { en: 'AI Experiments', es: 'Experimentos IA' } },
  { key: 'systems', label: { en: 'System Design', es: 'Diseño de Sistemas' } },
  { key: 'research', label: { en: 'Research & Learning', es: 'Investigación' } },
] as const satisfies readonly { key: string; label: Localized }[];

export type DomainKey = (typeof domains)[number]['key'];

export function getDomain(key: DomainKey) {
  return domains.find((d) => d.key === key)!;
}
