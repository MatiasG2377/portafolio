import type { Localized } from './types';

export interface Milestone {
  year: string;
  /** Etiqueta del hito: Curso, Proyecto, Rol, Certificación... */
  type: Localized;
  title: Localized;
  desc: Localized;
}

/**
 * Trayecto de aprendizaje, del más antiguo al más reciente.
 * El último item de la lista es el que aparece abierto por defecto,
 * así que añadir un año nuevo al final basta.
 */
export const milestones: Milestone[] = [
  {
    year: '2019',
    type: { en: 'Foundation', es: 'Base' },
    title: {
      en: 'Systems Engineering studies begin',
      es: 'Comienzan los estudios de Ingeniería de Sistemas',
    },
    desc: {
      en: 'Started formal study of systems thinking, algorithms, and architecture fundamentals.',
      es: 'Inicio del estudio formal del pensamiento sistémico, algoritmos y fundamentos de arquitectura.',
    },
  },
  {
    year: '2020',
    type: { en: 'Course', es: 'Curso' },
    title: {
      en: 'Software architecture foundations',
      es: 'Fundamentos de arquitectura de software',
    },
    desc: {
      en: 'Deep dive into design patterns and large-scale system structure.',
      es: 'Inmersión en patrones de diseño y estructura de sistemas a gran escala.',
    },
  },
  {
    year: '2021',
    type: { en: 'Project', es: 'Proyecto' },
    title: {
      en: 'First full-stack application shipped',
      es: 'Primera aplicación full-stack lanzada',
    },
    desc: {
      en: 'Built and deployed an end-to-end web product from scratch.',
      es: 'Construcción y despliegue de un producto web completo desde cero.',
    },
  },
  {
    year: '2022',
    type: { en: 'Certification', es: 'Certificación' },
    title: {
      en: 'Cloud infrastructure fundamentals',
      es: 'Fundamentos de infraestructura cloud',
    },
    desc: {
      en: 'Certified in core cloud architecture and deployment practices.',
      es: 'Certificación en arquitectura y prácticas de despliegue en la nube.',
    },
  },
  {
    year: '2023',
    type: { en: 'Role', es: 'Rol' },
    title: { en: 'Backend architecture at scale', es: 'Arquitectura backend a escala' },
    desc: {
      en: 'Took ownership of backend systems supporting production traffic.',
      es: 'Responsabilidad sobre sistemas backend con tráfico en producción.',
    },
  },
  {
    year: '2024',
    type: { en: 'Experiment', es: 'Experimento' },
    title: {
      en: 'AI-assisted engineering workflows',
      es: 'Flujos de trabajo asistidos por IA',
    },
    desc: {
      en: 'Explored LLM tooling to accelerate development and review.',
      es: 'Exploración de herramientas LLM para acelerar el desarrollo y la revisión.',
    },
  },
  {
    year: '2025',
    type: { en: 'Exploration', es: 'Exploración' },
    title: {
      en: 'Distributed systems deep dive',
      es: 'Inmersión en sistemas distribuidos',
    },
    desc: {
      en: 'Studied trade-offs in scalability, consistency, and fault tolerance.',
      es: 'Estudio de compensaciones en escalabilidad, consistencia y tolerancia a fallos.',
    },
  },
  {
    year: '2026',
    type: { en: 'Ongoing', es: 'En curso' },
    title: {
      en: 'AI infrastructure & data engineering',
      es: 'Infraestructura de IA e ingeniería de datos',
    },
    desc: {
      en: 'Currently expanding into data pipelines and applied AI systems.',
      es: 'Actualmente expandiéndome hacia pipelines de datos y sistemas de IA aplicada.',
    },
  },
];
