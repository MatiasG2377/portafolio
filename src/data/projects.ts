import type { DomainKey } from './domains';
import type { Localized } from './types';

export interface Project {
  /** Identificador único, usado como key y en la URL del filtro. */
  slug: string;
  /** Debe existir en domains.ts. El chip de filtro se genera solo. */
  domain: DomainKey;
  title: Localized;
  desc: Localized;
  /** Tecnologías / etiquetas. No se traducen. */
  tags: string[];
  /** Opcional: imagen en /public (ej. '/projects/dashboard.png'). Sin ella se dibuja el patrón de rayas. */
  image?: string;
  /** Opcional: enlace externo al proyecto o repo. La card entera se vuelve clicable. */
  url?: string;
}

/**
 * Añadir un proyecto = añadir un objeto a esta lista. Nada más.
 * El grid, los chips de filtro y los contadores se adaptan solos.
 */
export const projects: Project[] = [
  {
    slug: 'modular-dashboard',
    domain: 'web',
    title: { en: 'Modular Dashboard Framework', es: 'Framework Modular de Dashboards' },
    desc: {
      en: 'A component-driven dashboard system built for reuse across products.',
      es: 'Un sistema de dashboards basado en componentes, reutilizable entre productos.',
    },
    tags: ['React', 'TypeScript', 'Design Systems'],
  },
  {
    slug: 'realtime-collab',
    domain: 'web',
    title: { en: 'Realtime Collaboration Tool', es: 'Herramienta de Colaboración en Tiempo Real' },
    desc: {
      en: 'Multiplayer editing with conflict-free state sync.',
      es: 'Edición multiusuario con sincronización de estado sin conflictos.',
    },
    tags: ['WebSockets', 'Node.js', 'CRDT'],
  },
  {
    slug: 'self-healing-pipeline',
    domain: 'automation',
    title: { en: 'Infrastructure Self-Healing Pipeline', es: 'Pipeline de Auto-recuperación' },
    desc: {
      en: 'Automated detection and recovery for failing services.',
      es: 'Detección y recuperación automática de servicios con fallos.',
    },
    tags: ['CI/CD', 'Scripting', 'Monitoring'],
  },
  {
    slug: 'retrieval-assistant',
    domain: 'ai',
    title: { en: 'Contextual Retrieval Assistant', es: 'Asistente de Recuperación Contextual' },
    desc: {
      en: 'A retrieval-augmented assistant for internal documentation.',
      es: 'Un asistente RAG para documentación interna.',
    },
    tags: ['LLMs', 'Embeddings', 'Python'],
  },
  {
    slug: 'distributed-scheduler',
    domain: 'systems',
    title: { en: 'Distributed Job Scheduler', es: 'Planificador de Tareas Distribuido' },
    desc: {
      en: 'A fault-tolerant scheduler for background workloads.',
      es: 'Un planificador tolerante a fallos para cargas en segundo plano.',
    },
    tags: ['Distributed Systems', 'Queues', 'Go'],
  },
  {
    slug: 'edge-patterns',
    domain: 'research',
    title: { en: 'Exploring Edge Computing Patterns', es: 'Explorando Patrones de Edge Computing' },
    desc: {
      en: 'A study of latency-sensitive architectures at the edge.',
      es: 'Un estudio de arquitecturas sensibles a la latencia en el edge.',
    },
    tags: ['Edge', 'Research', 'Prototyping'],
  },
];
