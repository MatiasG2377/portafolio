import type { Localized } from './types';

export interface LabDomain {
  title: Localized;
  /** Etiqueta de profundidad: Exploring / Practicing / Studying / Researching / Curious. */
  status: Localized;
  desc: Localized;
}

/** Sección "Laboratorio de Exploración". El grid se reacomoda con cualquier cantidad. */
export const labDomains: LabDomain[] = [
  {
    title: { en: 'Artificial Intelligence', es: 'Inteligencia Artificial' },
    status: { en: 'Exploring', es: 'Explorando' },
    desc: {
      en: 'Applied ML, LLM tooling, and intelligent automation.',
      es: 'ML aplicado, herramientas LLM y automatización inteligente.',
    },
  },
  {
    title: { en: 'System Design', es: 'Diseño de Sistemas' },
    status: { en: 'Practicing', es: 'Practicando' },
    desc: {
      en: 'Distributed systems, scalability, and trade-off thinking.',
      es: 'Sistemas distribuidos, escalabilidad y análisis de compensaciones.',
    },
  },
  {
    title: { en: 'Cloud & DevOps', es: 'Cloud & DevOps' },
    status: { en: 'Exploring', es: 'Explorando' },
    desc: {
      en: 'Infrastructure, CI/CD, and resilient deployments.',
      es: 'Infraestructura, CI/CD y despliegues resilientes.',
    },
  },
  {
    title: { en: 'Product Engineering', es: 'Ingeniería de Producto' },
    status: { en: 'Practicing', es: 'Practicando' },
    desc: {
      en: 'Shipping features that connect design to engineering.',
      es: 'Entregando funciones que conectan diseño e ingeniería.',
    },
  },
  {
    title: { en: 'UX & Design Systems', es: 'UX & Design Systems' },
    status: { en: 'Studying', es: 'Estudiando' },
    desc: {
      en: 'Interfaces that feel considered and coherent.',
      es: 'Interfaces que se sienten cuidadas y coherentes.',
    },
  },
  {
    title: { en: 'Data Engineering', es: 'Ingeniería de Datos' },
    status: { en: 'Researching', es: 'Investigando' },
    desc: {
      en: 'Pipelines, modeling, and systems that move data well.',
      es: 'Pipelines, modelado y sistemas que mueven datos bien.',
    },
  },
  {
    title: { en: 'Cybersecurity', es: 'Ciberseguridad' },
    status: { en: 'Studying', es: 'Estudiando' },
    desc: {
      en: 'Threat models, secure architecture, safe defaults.',
      es: 'Modelos de amenaza, arquitectura segura, valores por defecto seguros.',
    },
  },
  {
    title: { en: 'Emerging Technologies', es: 'Tecnologías Emergentes' },
    status: { en: 'Curious', es: 'Con curiosidad' },
    desc: {
      en: 'Watching what reshapes how systems get built.',
      es: 'Observando lo que redefine cómo se construyen los sistemas.',
    },
  },
];
