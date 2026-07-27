/**
 * Texto que existe en los dos idiomas del sitio.
 * Se escribe una sola vez, junto al dato: { en: '...', es: '...' }
 */
export interface Localized {
  en: string;
  es: string;
}

export type Lang = keyof Localized;

/** Devuelve la variante del idioma actual. */
export function tr(value: Localized, lang: Lang): string {
  return value[lang];
}
