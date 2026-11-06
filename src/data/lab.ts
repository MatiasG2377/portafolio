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
    title: { en: 'AI & LLM Experimentation', es: 'Experimentación con IA & LLMs' },
    status: { en: 'Exploring', es: 'Explorando' },
    desc: {
      en: 'Prompt engineering, intelligent agents, OCR models, and integrating AI into everyday applications.',
      es: 'Ingeniería de prompts, agentes inteligentes, modelos OCR e integración de IA en aplicaciones cotidianas.',
    },
  },
  {
    title: { en: 'Cloud Architecture (AWS)', es: 'Arquitectura Cloud (AWS)' },
    status: { en: 'Exploring', es: 'Explorando' },
    desc: {
      en: 'Cloud Practitioner path, AWS services, and resilient cloud architectures.',
      es: 'Ruta Cloud Practitioner, servicios de AWS y arquitecturas resilientes.',
    },
  },
  {
    title: { en: 'Data Engineering & Pipelines', es: 'Ingeniería de Datos & Pipelines' },
    status: { en: 'Practicing', es: 'Practicando' },
    desc: {
      en: 'ETL workflows, data transformation, and cloud pipelines (AWS Data Engineering).',
      es: 'Flujos ETL, transformación de datos y pipelines cloud (AWS Data Engineering).',
    },
  },
  {
    title: { en: 'Machine Learning Foundations', es: 'Fundamentos de Machine Learning' },
    status: { en: 'Studying', es: 'Estudiando' },
    desc: {
      en: 'Supervised/unsupervised models, SageMaker, Pandas, and Scikit-learn.',
      es: 'Modelos supervisados y no supervisados, SageMaker, Pandas y Scikit-learn.',
    },
  },
  {
    title: { en: 'Python Ecosystem & Automation', es: 'Ecosistema Python & Automatización' },
    status: { en: 'Practicing', es: 'Practicando' },
    desc: {
      en: 'FastAPI, Django REST, scripting, and practical challenges (100 Days of Python).',
      es: 'FastAPI, Django REST, scripting y retos prácticos (100 Days of Python).',
    },
  },
  {
    title: { en: 'Full-Stack Modern Stacks', es: 'Stacks Modernos Full-Stack' },
    status: { en: 'Practicing', es: 'Practicando' },
    desc: {
      en: 'Production patterns with Laravel, Blade, React, and Next.js.',
      es: 'Patrones de producción con Laravel, Blade, React y Next.js.',
    },
  },
  {
    title: { en: 'SCRUM Methodologies', es: 'Metodologías SCRUM' },
    status: { en: 'Practicing', es: 'Practicando' },
    desc: {
      en: 'Agile framework practices: sprint planning, Scrum roles and artifacts for collaborative software delivery.',
      es: 'Prácticas del marco ágil: planificación de sprints, roles y artefactos Scrum para entrega colaborativa de software.',
    },
  },
  {
    title: { en: 'Human-Computer Interaction (HCI)', es: 'Interacción Humano-Computador (IHC)' },
    status: { en: 'Studying', es: 'Estudiando' },
    desc: {
      en: 'Usability principles, UX heuristics, and accessible interface design applied to real products.',
      es: 'Principios de usabilidad, heurísticas UX y diseño de interfaces accesibles aplicados a productos reales.',
    },
  },
  {
    title: { en: 'AI Integration into Systems', es: 'Integración de IA en Sistemas' },
    status: { en: 'Exploring', es: 'Explorando' },
    desc: {
      en: 'Embedding intelligent capabilities (LLMs, automation, agents) into existing web and enterprise systems.',
      es: 'Incorporación de capacidades inteligentes (LLMs, automatización, agentes) en sistemas web y empresariales existentes.',
    },
  },
];
