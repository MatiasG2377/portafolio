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
    year: '2023',
    type: { en: 'Internship', es: 'Pasantía' },
    title: {
      en: 'Technical Support Intern — PUCE',
      es: 'Pasante de Soporte Técnico — PUCE',
    },
    desc: {
      en: 'Provided hardware and software technical support at the Engineering Faculty (LTIC), preventive maintenance, and internal user incident resolution.',
      es: 'Soporte técnico de hardware y software en la Facultad de Ingeniería (LTIC), mantenimiento preventivo de equipos y atención a incidencias de usuarios internos.',
    },
  },
  {
    year: '2025',
    type: { en: 'Degree', es: 'Título' },
    title: {
      en: 'Information Systems Engineer — PUCE',
      es: 'Ingeniero en Sistemas de la Información — PUCE',
    },
    desc: {
      en: 'Graduated from Pontificia Universidad Católica del Ecuador. Solid foundation in software architecture, databases, systems modeling, and modern engineering practices.',
      es: 'Graduación en la Pontificia Universidad Católica del Ecuador. Sólida formación en arquitectura de software, bases de datos, modelado de sistemas y desarrollo.',
    },
  },
  {
    year: '2025',
    type: { en: 'Freelance', es: 'Freelance' },
    title: {
      en: 'Full-Stack Developer — ProdeOptica',
      es: 'Desarrollador Full-Stack — ProdeOptica',
    },
    desc: {
      en: 'Engineered a centralized web platform for sales, inventory, patients, and clinical records using Next.js, Django REST Framework, JWT auth, and Tailwind CSS.',
      es: 'Desarrollo de plataforma web integral para centralizar ventas, inventario, pacientes y fichas médicas con Next.js, Django REST Framework, JWT y Tailwind CSS.',
    },
  },
  {
    year: '2026',
    type: { en: 'Role', es: 'Rol' },
    title: {
      en: 'Full-Stack Developer — MSLARCO',
      es: 'Desarrollador Full-Stack — MSLARCO',
    },
    desc: {
      en: 'Developing and maintaining web applications and administrative panels, integrating PHP, Laravel, Blade, React, and MySQL database management.',
      es: 'Desarrollo y mantenimiento de soluciones web y paneles administrativos integrando PHP, Laravel, Blade, React y bases de datos MySQL.',
    },
  },
];
