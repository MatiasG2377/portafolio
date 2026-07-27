import { en } from './en';
import { es } from './es';

export type { Lang } from '../data/types';
export { tr } from '../data/types';

import type { Lang } from '../data/types';

const content = { en, es };

/** Strings de interfaz (títulos de sección, nav, meta). El contenido vive en src/data/. */
export function getContent(lang: Lang) {
  return content[lang];
}
