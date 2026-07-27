import type { Localized } from './types';

export interface FocusItem {
  title: Localized;
  desc: Localized;
}

/**
 * Sección "Enfoque Actual". La numeración (01, 02...) se genera sola
 * a partir del orden de esta lista.
 */
export const focusItems: FocusItem[] = [
  {
    title: { en: 'Full Stack Development', es: 'Desarrollo Full Stack' },
    desc: {
      en: 'End-to-end product engineering across the stack.',
      es: 'Ingeniería de producto de extremo a extremo en todo el stack.',
    },
  },
  {
    title: { en: 'Web Applications', es: 'Aplicaciones Web' },
    desc: {
      en: 'Building performant, scalable interfaces and services.',
      es: 'Construcción de interfaces y servicios rápidos y escalables.',
    },
  },
  {
    title: { en: 'Backend Architecture', es: 'Arquitectura Backend' },
    desc: {
      en: 'Designing systems that stay reliable under change.',
      es: 'Diseño de sistemas que siguen siendo fiables ante el cambio.',
    },
  },
  {
    title: { en: 'Frontend Experiences', es: 'Experiencias Frontend' },
    desc: {
      en: 'Crafting interfaces with clarity and intent.',
      es: 'Interfaces creadas con claridad e intención.',
    },
  },
  {
    title: { en: 'APIs & Integrations', es: 'APIs e Integraciones' },
    desc: {
      en: 'Connecting systems into coherent products.',
      es: 'Conectando sistemas en productos coherentes.',
    },
  },
];
