import type { Experience } from './types';

export const experience: Experience[] = [
  {
    organization: 'Superintendencia de Administración Tributaria (SAT)',
    role: 'Servicios técnicos · Desarrollo y soporte',
    start: '2026-05',
    period: 'Mayo 2026 — actualidad',
    location: 'Ciudad de Guatemala',
    description:
      'Soporte de bases de datos y sistemas institucionales, con desarrollo y mantenimiento de aplicaciones Java.',
    highlights: [
      'Diagnóstico y resolución de tickets mediante consultas SQL, análisis de información y seguimiento de incidencias.',
      'Desarrollo de funcionalidades y corrección de errores en aplicaciones Java; backend de una solución de gestión de proyectos con Spring Boot y PrimeFaces.',
      'Autenticación, roles, proyectos y asignación de grupos de trabajo.',
      'Scripts SQL y PL/SQL para correcciones, actualizaciones y migraciones; análisis y depuración en Oracle Forms.',
    ],
    tags: ['Java', 'Spring Boot', 'Oracle', 'SQL / PL/SQL'],
  },
  {
    organization: 'Universidad de San Carlos de Guatemala',
    role: 'Prácticas laborales · Proyecto de telemedicina',
    start: '2026-07',
    end: '2026-10',
    period: 'Julio — octubre 2026',
    location: 'Ciudad de Guatemala',
    description:
      'Participación en una plataforma de telemedicina con arquitectura de microservicios.',
    highlights: [
      'Backend e infraestructura con TypeScript, NestJS y PostgreSQL para autenticación y gestión de pacientes y médicos.',
      'Integración de frontend en Angular con servicios de backend.',
      'API Gateway con Nginx, contenedores Docker y pipelines en GitLab.',
      'Trabajo en equipo con metodologías ágiles, Scrum y entrega continua.',
    ],
    tags: ['NestJS', 'PostgreSQL', 'Angular', 'Docker'],
  },
  {
    organization: 'Almacenes Siman Guatemala',
    role: 'Auxiliar de canales digitales',
    start: '2022-10',
    end: '2023-01',
    period: 'Octubre 2022 — enero 2023',
    location: 'Guatemala',
    description:
      'Atención de consultas y seguimiento de pedidos en plataformas en línea.',
    highlights: [
      'Comunicación con clientes por canales digitales, con respuestas oportunas y seguimiento de sus solicitudes.',
    ],
    tags: ['Atención al cliente', 'Resolución de problemas'],
  },
];
