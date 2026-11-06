import type { Localized } from './types';

export interface CertificationItem {
  slug: string;
  title: Localized;
  issuer: string;
  date: string;
  status: 'completed' | 'in_progress';
  badgeLabel: Localized;
  desc: Localized;
  skills: string[];
  credentialUrl?: string;
}

/**
 * Zona de Certificaciones y Credenciales oficiales.
 * Añadir una certificación = añadir un objeto a esta lista.
 */
export const certifications: CertificationItem[] = [
  {
    slug: 'aws-cloud-practitioner',
    title: {
      en: 'AWS Certified Cloud Practitioner',
      es: 'AWS Certified Cloud Practitioner',
    },
    issuer: 'Amazon Web Services (AWS)',
    date: '2026',
    status: 'in_progress',
    badgeLabel: {
      en: 'In Training',
      es: 'En formación',
    },
    desc: {
      en: 'Comprehensive preparation for official AWS Cloud certification: cloud computing concepts, core security, high availability architectures, and foundational infrastructure.',
      es: 'Preparación integral para la certificación oficial de AWS: conceptos de computación en la nube, seguridad, arquitecturas de alta disponibilidad e infraestructura esencial.',
    },
    skills: ['AWS Cloud', 'Cloud Architecture', 'Security & Compliance', 'Cloud Infrastructure'],
  },
  {
    slug: 'scrum-fundamentals-certified',
    title: {
      en: 'Scrum Fundamentals Certified (SFC)',
      es: 'Scrum Fundamentals Certified (SFC)',
    },
    issuer: 'SCRUMstudy',
    date: 'Septiembre 2026',
    status: 'completed',
    badgeLabel: {
      en: 'Verified',
      es: 'Verificado',
    },
    desc: {
      en: 'Scrum framework fundamentals: roles, events, and artifacts, sprint management, and collaborative teamwork in agile development environments.',
      es: 'Fundamentos del marco Scrum: roles, eventos y artefactos, gestión de sprints y trabajo colaborativo en equipos de desarrollo ágil.',
    },
    skills: ['Scrum', 'Agile', 'Sprint Planning', 'Teamwork'],
    credentialUrl: '/certificates/scrum_cert.pdf',
  },
  {
    slug: 'spec-driven-development',
    title: {
      en: 'Spec Driven Development',
      es: 'Spec Driven Development',
    },
    issuer: 'Platzi',
    date: 'Septiembre 2026',
    status: 'completed',
    badgeLabel: {
      en: 'Verified',
      es: 'Verificado',
    },
    desc: {
      en: 'Spec-Driven Development methodology for building software with AI agents: clear specifications, structured context, planning, and spec-guided validation.',
      es: 'Metodología Spec-Driven Development para construir software con agentes de IA: especificaciones claras, contexto estructurado, planificación y validación guiada por specs.',
    },
    skills: ['Spec-Driven Development', 'AI Agents', 'Prompting', 'Planning'],
    credentialUrl: '/certificates/spec_driven_cert.pdf',
  },
  {
    slug: 'laravel-backend-udemy',
    title: {
      en: 'Backend Programming in PHP Laravel',
      es: 'Curso de Programación Backend en PHP Laravel',
    },
    issuer: 'Udemy — Héctor de León',
    date: 'Julio 2026',
    status: 'completed',
    badgeLabel: {
      en: 'Verified',
      es: 'Verificado',
    },
    desc: {
      en: 'Backend development with PHP and Laravel (12h): Eloquent ORM, MVC architecture, routing, middleware, authentication, and REST API building.',
      es: 'Desarrollo backend con PHP y Laravel (12h): Eloquent ORM, arquitectura MVC, rutas, middleware, autenticación y construcción de APIs REST.',
    },
    skills: ['Laravel', 'PHP', 'Eloquent ORM', 'REST APIs', 'MVC'],
    credentialUrl: '/certificates/laravel_cert.pdf',
  },
  {
    slug: 'aws-academy-machine-learning',
    title: {
      en: 'AWS Academy Graduate — Machine Learning Foundations',
      es: 'AWS Academy Graduate — Machine Learning Foundations',
    },
    issuer: 'AWS Academy',
    date: 'Marzo 2023',
    status: 'completed',
    badgeLabel: {
      en: 'Verified',
      es: 'Verificado',
    },
    desc: {
      en: 'Foundations of machine learning, supervised and unsupervised models, Amazon SageMaker workflows, and Python data science stack (Pandas, NumPy, Scikit-learn).',
      es: 'Fundamentos de machine learning, aprendizaje supervisado y no supervisado, flujos de trabajo con Amazon SageMaker, y librerías de Python (Pandas, NumPy, Scikit-learn).',
    },
    skills: ['Machine Learning', 'Amazon SageMaker', 'Python', 'Scikit-learn', 'Pandas'],
    credentialUrl: '/certificates/aws_ml_foundations.pdf',
  },
  {
    slug: 'aws-academy-data-engineering',
    title: {
      en: 'AWS Academy Graduate — Data Engineering',
      es: 'AWS Academy Graduate — Data Engineering',
    },
    issuer: 'AWS Academy',
    date: '2023',
    status: 'completed',
    badgeLabel: {
      en: 'Verified',
      es: 'Verificado',
    },
    desc: {
      en: 'Cloud data engineering principles, automated ETL (Extract, Transform, Load) pipelines, scalable storage, and best practices for efficient data transformation and storage in AWS.',
      es: 'Fundamentos de ingeniería de datos en la nube, automatización de pipelines ETL (Extract, Transform, Load), almacenamiento escalable y buenas prácticas para preparación y transformación de datos en AWS.',
    },
    skills: ['Data Engineering', 'ETL Pipelines', 'AWS Storage', 'Data Modeling'],
    credentialUrl: '/certificates/aws_data_engineering.pdf',
  },
];
