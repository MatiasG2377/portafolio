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
    title: { en: 'Full-Stack & Mobile Development', es: 'Desarrollo Full-Stack & Móvil' },
    desc: {
      en: 'Building scalable applications with Laravel, PHP, React, Next.js, Django, and Flutter.',
      es: 'Construcción de aplicaciones escalables con Laravel, PHP, React, Next.js, Django y Flutter.',
    },
  },
  {
    title: { en: 'Applied AI & Experimentation', es: 'IA Aplicada & Experimentación' },
    desc: {
      en: 'Continuously experimenting with AI models, OCR, prompt engineering, and integrating intelligent features into software.',
      es: 'Experimentación activa con modelos de IA, OCR, visión por computadora e integración de funciones inteligentes en software.',
    },
  },
  {
    title: { en: 'Backend & REST APIs', es: 'Backend & APIs REST' },
    desc: {
      en: 'Designing secure, maintainable endpoints, JWT auth, and business logic with Django REST & FastAPI.',
      es: 'Diseño de endpoints seguros y mantenibles, autenticación JWT y lógica de negocio con Django REST y FastAPI.',
    },
  },
  {
    title: { en: 'Relational Databases', es: 'Bases de Datos Relacionales' },
    desc: {
      en: 'Data modeling, query optimization, and management across MySQL, PostgreSQL, and SQL Server.',
      es: 'Modelado de datos, optimización de consultas y gestión con MySQL, PostgreSQL y SQL Server.',
    },
  },
  {
    title: { en: 'Cloud & Infrastructure (AWS)', es: 'Cloud & Infraestructura (AWS)' },
    desc: {
      en: 'Cloud Practitioner preparation, cloud pipelines, and resilient architecture exploration.',
      es: 'Preparación Cloud Practitioner, pipelines en la nube y arquitecturas resilientes en AWS.',
    },
  },
];
