import type { DomainKey } from './domains';
import type { Localized } from './types';

export interface ProjectScreenshot {
  src: string;
  title: Localized;
  desc?: Localized;
}

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
  /** Opcional: enlace externo al proyecto o demo. */
  url?: string;
  /** Opcional: enlace al repositorio de código fuente. */
  repoUrl?: string;
  /** Opcional: capturas de pantalla para la galería interactiva. */
  screenshots?: ProjectScreenshot[];
}

/**
 * Añadir un proyecto = añadir un objeto a esta lista. Nada más.
 * El grid, los chips de filtro y los contadores se adaptan solos.
 */
export const projects: Project[] = [
  {
    slug: 'prodeoptica',
    domain: 'web',
    title: {
      en: 'ProdeOptica — Management & Clinical Platform',
      es: 'ProdeOptica — Plataforma de Gestión y Fichas Médicas',
    },
    desc: {
      en: 'Custom management system for optometry clinics: handles inventory, sales, kardex, and clinical records. Deployed with a PostgreSQL database on Render and frontend on Vercel per client decision. Private system in production with no public live link.',
      es: 'Sistema de gestión a medida para óptica: manejo de inventario, ventas, kardex y fichas médicas. Desplegado con base de datos PostgreSQL en Render y frontend en Vercel por decisión de los clientes. Sistema privado en producción, no cuenta con enlace público.',
    },
    tags: ['Next.js', 'Django REST', 'PostgreSQL', 'Render', 'Vercel', 'Tailwind CSS'],
    image: '/projects/prodeoptica/02-dashboard-analitica.png',
    repoUrl: 'https://github.com/MatiasG2377/prodeoptica',
    screenshots: [
      {
        src: '/projects/prodeoptica/01-inicio-sesion.png',
        title: {
          en: '1. Login & JWT Authentication',
          es: '1. Inicio de Sesión y Autenticación JWT',
        },
        desc: {
          en: 'Secure role-based access control (Admin, Manager, Salesperson) with responsive layout and JWT token management.',
          es: 'Acceso seguro con control de roles (Administrador, Gerente, Vendedor) y diseño responsivo.',
        },
      },
      {
        src: '/projects/prodeoptica/02-dashboard-analitica.png',
        title: {
          en: '2. Executive Dashboard & Real-Time Analytics',
          es: '2. Panel Ejecutivo y Analítica en Tiempo Real',
        },
        desc: {
          en: 'Managerial dashboard with sales KPIs, patient records, refraction distribution metrics, interactive Chart.js graphs, and stock alerts.',
          es: 'Dashboard gerencial con KPIs de ventas, pacientes atendidos, métricas de refracción, gráficas interactivas con Chart.js y alertas de inventario.',
        },
      },
      {
        src: '/projects/prodeoptica/03-punto-de-venta-pos.png',
        title: {
          en: '3. Point of Sale (POS) & Billing',
          es: '3. Punto de Venta (POS) y Facturación',
        },
        desc: {
          en: 'Agile sales terminal with category filtering (Frames, Sunglasses, Contact Lenses, Lenses), real-time search, stock checks, and cart drawer with automated tax/discount calculation.',
          es: 'Terminal de venta ágil con filtrado por categorías de productos (Armazones, Gafas de Sol, Lentes de Contacto, Lunas), buscador en tiempo real, control de stock y carrito lateral con cálculo automático de totales y descuentos.',
        },
      },
      {
        src: '/projects/prodeoptica/04-inventario-catalogo.png',
        title: {
          en: '4. Catalog & Inventory Management',
          es: '4. Catálogo y Gestión de Inventario',
        },
        desc: {
          en: 'Product catalog with minimum/maximum stock thresholds, stock level progress bars, category filters, and quick creation/editing.',
          es: 'Vista de productos con indicadores de stock mínimo/máximo, barras de nivel de existencias, filtros por categorías y opciones de edición/creación rápida.',
        },
      },
      {
        src: '/projects/prodeoptica/05-ficha-medica-optometria.png',
        title: {
          en: '5. Clinical Record & Optometric Exam (Refraction)',
          es: '5. Ficha Médica y Control Optométrico (Refracción)',
        },
        desc: {
          en: 'Specialized digital clinical history for optometry: full binocular refraction (OD & OS with sphere, cylinder, axis, PD, addition, visual acuity), contact lenses, and frame specs.',
          es: 'Historia clínica digital especializada para ópticas: refracción binocular completa (Ojo Derecho y Ojo Izquierdo con esfera, cilindro, eje, DNP, adición y agudeza visual), lentes de contacto y especificaciones de montura.',
        },
      },
      {
        src: '/projects/prodeoptica/06-kardex-movimientos.png',
        title: {
          en: '6. Kardex & Movement Traceability',
          es: '6. Kardex y Trazabilidad de Movimientos',
        },
        desc: {
          en: 'Valued inventory audit per product with physical balance, currency balance, and detailed historical record of purchases, sales, and invoice adjustments.',
          es: 'Auditoría valorizada de inventario por producto con cálculo de saldo físico, saldo en dólares, histórico detallado de compras, ventas y ajustes con referencia de facturas.',
        },
      },
      {
        src: '/projects/prodeoptica/07-gestion-abonos-creditos.png',
        title: {
          en: '7. Credit Sales & Payment Installments',
          es: '7. Gestión de Ventas a Crédito y Abonos',
        },
        desc: {
          en: 'Accounts receivable tracking, installment progress with percentage bars, breakdown of payment methods, and cash receipt issuance.',
          es: 'Control de cuentas por cobrar, seguimiento de cuotas de pago con barra de progreso porcentual, desglose de métodos de cobro y registro de recibos de caja.',
        },
      },
      {
        src: '/projects/prodeoptica/08-ingreso-mercaderia.png',
        title: {
          en: '8. Merchandise Intake & Procurement',
          es: '8. Registro de Ingresos de Mercadería',
        },
        desc: {
          en: 'Procurement form for supplier and laboratory orders with live calculation of projected stock, total cost, and invoice/batch number tracking.',
          es: 'Formulario de abastecimiento y compras a proveedores/laboratorios con cálculo en vivo de stock proyectado, costo total e ingreso de número de factura/lote.',
        },
      },
      {
        src: '/projects/prodeoptica/09-administracion-crud.png',
        title: {
          en: '9. System Administration & Master CRUDs',
          es: '9. Administración y Mantenimiento (CRUDs)',
        },
        desc: {
          en: 'Centralized management of master system entities (Suppliers, Laboratories, Branches, Categories) with real-time validation and actions.',
          es: 'Gestión centralizada de maestros del sistema (Proveedores, Laboratorios, Sucursales, Categorías) con validaciones y acciones en tiempo real.',
        },
      },
      {
        src: '/projects/prodeoptica/10-menu-navegacion.png',
        title: {
          en: '10. Global Navigation Drawer & Profile',
          es: '10. Navegación Global y Perfil de Usuario',
        },
        desc: {
          en: 'Side drawer navigation interconnecting all optical ERP modules with active session persistence.',
          es: 'Menú lateral tipo drawer que interconecta todos los módulos del ERP óptico con persistencia de sesión activa.',
        },
      },
    ],
  },
  {
    slug: 'spendy',
    domain: 'mobile',
    title: {
      en: 'Spendy — AI-Powered Expense & Budget Tracker',
      es: 'Spendy — Gestión de Gastos y Presupuestos con IA',
    },
    desc: {
      en: 'Mobile app built with Flutter, Firebase Auth, and Firebase Storage for smart expense tracking, budgeting, receipt scanning, and AI-driven transaction notification detection.',
      es: 'Aplicación móvil desarrollada en Flutter con Firebase Auth y Storage para control de gastos, presupuestos, escaneo de recibos e integración de IA para detección de notificaciones de consumo.',
    },
    tags: ['Flutter', 'Firebase Auth', 'Firebase Storage', 'AI / OCR', 'Mobile'],
  },
  {
    slug: '100-days-of-python',
    domain: 'python',
    title: {
      en: '100 Days of Code — Python Portfolio',
      es: '100 Días de Código — Repositorio Python',
    },
    desc: {
      en: 'Comprehensive repository covering 100 days of Python programming: algorithms, data manipulation, automation scripts, APIs, and mini-applications.',
      es: 'Repositorio práctico que abarca 100 días de programación en Python: algoritmos, manipulación de datos, scripts de automatización, APIs y miniaplicaciones.',
    },
    tags: ['Python', 'OOP', 'Automation', 'APIs', 'Data Analysis'],
    repoUrl: 'https://github.com/MatiasG2377/Python_100DaysOfPython',
    url: 'https://github.com/MatiasG2377/Python_100DaysOfPython',
  },
];
