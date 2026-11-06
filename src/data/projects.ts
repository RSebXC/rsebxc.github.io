import type { Project } from './types';

export const projects: Project[] = [
  {
    id: 'finanzas',
    category: 'Producto móvil',
    title: 'Mis Finanzas · Claridad sin conexión',
    kind: 'own',
    stage: 'App Android',
    visual: 'finance',
    featured: true,
    description:
      'Una app Android para entender gastos, presupuestos y ahorros en quetzales, con datos locales y una interfaz pensada para el día a día.',
    role: 'Producto · Arquitectura · Desarrollo',
    contribution:
      'Definí la idea, el contexto, los casos de uso, la arquitectura y la implementación completa, con desarrollo asistido por IA.',
    highlights: [
      'Reportes visuales y simulación de ahorro.',
      'SQLite local y asistente basado en reglas.',
    ],
    details: [
      'Interfaz nativa en Kotlin y base SQLite local; la aplicación no solicita permiso de Internet.',
      'Reportes por período, categorías y comercios; simulación de ahorros sin alterar los movimientos.',
      'Importación opcional de alertas compatibles, presupuestos, recordatorios y respaldos mediante acciones explícitas.',
      'Las capturas del repositorio utilizan datos ficticios. El asistente es un motor local basado en reglas.',
    ],
    technologies: ['Kotlin', 'Android', 'SQLite'],
    repository: 'https://github.com/RSebXC/App-ControlFinanzas',
    documentation:
      'https://github.com/RSebXC/App-ControlFinanzas/tree/main/docs',
    proof: 'Datos locales · Sin permiso de Internet',
    diagram: {
      label: 'Capturas reales · Datos de demostración',
      nodes: ['Registro', 'SQLite', 'Reportes', 'Ahorro'],
      output: 'Kotlin / Android / SQLite',
    },
    number: '01',
  },
  {
    id: 'microservicios',
    number: '02',
    category: 'Arquitectura distribuida',
    title: 'Plataforma de microservicios',
    description:
      'Una plataforma para conectar producción, calidad, inventario y ventas sin concentrar toda la lógica en un único servicio.',
    role: 'Coordinación · Frontend y backend',
    contribution:
      'Coordiné el equipo, definí el planteamiento de los servicios, desarrollé la mayor parte del frontend e implementé varios backends.',
    details: [
      'API Gateway en NestJS con autenticación JWT y control de acceso mediante roles y perfiles.',
      'Separación de responsabilidades por dominio y comunicación entre servicios mediante NATS.',
      'Contenedores Docker, workflows de integración y entrega continua, y exposición de métricas para observabilidad.',
    ],
    technologies: ['TypeScript', 'NestJS', 'NATS', 'Docker', 'CI/CD'],
    repository: 'https://github.com/RSebXC/Proyecto-SA-B-3',
    diagram: {
      label: 'Arquitectura de servicios',
      nodes: ['Frontend', 'API Gateway', 'NATS', 'Servicios'],
      output: 'Auth / Producción / Calidad / Inventario',
    },
    featured: false,
    kind: 'collaboration',
    stage: 'Implementación',
    visual: 'services',
    highlights: [
      'Dominios separados y comunicación con NATS.',
      'Autenticación, roles y métricas desde el API Gateway.',
    ],
    proof: 'Arquitectura por dominios',
    documentation:
      'https://github.com/RSebXC/Proyecto-SA-B-3/tree/main/backend',
  },
  {
    id: 'gtvs',
    category: 'Algoritmos y APIs',
    title: 'GTVS · Rutas con contexto',
    kind: 'own',
    stage: 'Prototipo V1',
    visual: 'routes',
    description:
      'Un prototipo para comparar rutas sobre una red abstracta y explicar cómo influyen la distancia y los incidentes estimados en cada alternativa.',
    role: 'Concepto · Arquitectura · Implementación',
    contribution:
      'Diseñé el concepto, las reglas, los casos de uso, la arquitectura y el prototipo, con desarrollo asistido por IA.',
    highlights: [
      'Dijkstra, perfiles de ruta y explicación por tramo.',
      'API Python, SQLite y reportes con revisión.',
    ],
    details: [
      'API HTTP e interfaz web de V1 sobre una red de demostración con datos sintéticos.',
      'Cálculo de alternativas con Dijkstra, información insuficiente y deduplicación de rutas coincidentes.',
      'Reportes pendientes, revisión protegida, idempotencia y persistencia; verificaciones funcionales registradas en el repositorio.',
      'El riesgo es una estimación relativa. No es navegación real ni una garantía de seguridad; el cliente Android tiene código, pero su compilación no está verificada.',
    ],
    technologies: ['Python', 'SQLite', 'JavaScript', 'Kotlin'],
    repository: 'https://github.com/RSebXC/GTVS-2027',
    documentation: 'https://github.com/RSebXC/GTVS-2027/tree/main/prototipo',
    proof: 'Prototipo verificable con datos sintéticos',
    diagram: {
      label: 'Red abstracta de demostración',
      nodes: ['Origen', 'Grafo', 'Dijkstra', 'Rutas'],
      output: 'Distancia / Contexto / Explicación',
    },
    number: '03',
  },
  {
    id: 'sg-food',
    number: '04',
    category: 'Ingeniería de datos',
    title: 'SG-Food · Datos listos para analizar',
    description:
      'De tablas operativas y archivos CSV a un modelo de ventas e inventario que se puede consultar, validar y reconstruir.',
    role: 'Ingeniería de datos · Responsable principal',
    contribution:
      'Diseñé y desarrollé la mayor parte del flujo de Big Data e ingeniería de datos dentro del equipo.',
    details: [
      'Extracción y carga con Python desde PostgreSQL y archivos CSV; metadatos de carga y reejecución sin duplicar datos.',
      'Orquestación con Apache Airflow y transformación por capas con dbt Core.',
      'Modelo dimensional, pruebas de calidad y conciliaciones de conteos e importes.',
    ],
    technologies: ['Python', 'Airflow', 'dbt', 'PostgreSQL', 'Docker'],
    repository: 'https://github.com/RSebXC/SS22S2026_G26/tree/main/Proyecto1',
    diagram: {
      label: 'Flujo ELT de SG-Food',
      nodes: ['Fuentes', 'Python', 'dbt', 'Marts'],
      output: 'Airflow / Calidad de datos / Análisis',
    },
    kind: 'collaboration',
    stage: 'Implementación',
    visual: 'pipeline',
    highlights: [
      'Orquestación con Airflow y transformación con dbt.',
      'Calidad de datos, conciliaciones y cargas repetibles.',
    ],
    proof: 'Trazabilidad de principio a fin',
    documentation:
      'https://github.com/RSebXC/SS22S2026_G26/tree/main/Proyecto1/docs',
    featured: false,
  },
  {
    id: 'barberia',
    category: 'Diseño de producto',
    title: 'Turnos de barbería · Una fila, varios equipos',
    kind: 'own',
    stage: 'Análisis y arquitectura',
    visual: 'queue',
    description:
      'Diseño de un sistema para coordinar recepción, barberos, administración y pantalla de llamados alrededor de una sola fila de atención.',
    role: 'Idea · Casos de uso · Arquitectura',
    contribution:
      'Definí la idea, el contexto de operación, los casos de uso, las reglas de negocio y la arquitectura propuesta, con apoyo de herramientas de IA.',
    highlights: [
      '13 casos de uso y reglas de prioridad documentadas.',
      'Concurrencia, permisos y contratos de API definidos.',
    ],
    details: [
      'La versión pública revisada contiene análisis y documentación; la implementación operativa está pendiente.',
      'Arquitectura propuesta de monolito modular con Next.js, TypeScript y PostgreSQL.',
      'Registro, llamado, ausencias, cambios de preferencia y jornada definidos mediante reglas y escenarios de aceptación.',
      'Diseño de idempotencia, reservas transaccionales y vistas por rol para evitar asignar un turno a dos barberos.',
    ],
    technologies: ['Arquitectura', 'Casos de uso', 'PostgreSQL', 'TypeScript'],
    repository: 'https://github.com/RSebXC/Servicio-Barberia',
    documentation:
      'https://github.com/RSebXC/Servicio-Barberia/tree/main/documentacion',
    proof: '13 casos de uso · Arquitectura propuesta',
    diagram: {
      label: 'Flujo propuesto · Diseño de producto',
      nodes: ['Registro', 'Fila', 'Atención', 'Reporte'],
      output: 'Recepción / Barbero / Administración / TV',
    },
    number: '05',
  },
  {
    id: 'monitoreo',
    number: '06',
    category: 'Sistemas y observabilidad',
    title: 'Monitor de contenedores · Del kernel a Grafana',
    description:
      'Un recorrido completo para observar procesos y contenedores: captura en Linux, procesamiento en Go y visualización de métricas.',
    role: 'Diseño e implementación completa',
    contribution:
      'Construí todos los componentes del sistema, desde los módulos de kernel hasta el procesamiento de métricas y su visualización.',
    details: [
      'Módulos de kernel en C que exponen métricas de procesos y contenedores mediante /proc.',
      'Daemon en Go para leer métricas, gestionar contenedores y almacenar información en SQLite.',
      'Dashboards de Grafana y scripts para simular carga y observar el comportamiento del sistema.',
    ],
    technologies: ['Go', 'C', 'Linux', 'Docker', 'Grafana', 'SQLite'],
    repository:
      'https://github.com/RSebXC/202204496_LAB_SO1_2S2025/tree/main/Proyecto2',
    diagram: {
      label: 'Recorrido de las métricas',
      nodes: ['Kernel C', '/proc', 'Daemon Go', 'Grafana'],
      output: 'Procesos / Contenedores / Métricas',
    },
    kind: 'own',
    stage: 'Implementación',
    visual: 'monitor',
    highlights: [
      'Módulos de kernel en C y daemon en Go.',
      'Persistencia SQLite y dashboards en Grafana.',
    ],
    proof: 'Captura → procesamiento → visualización',
    documentation:
      'https://github.com/RSebXC/202204496_LAB_SO1_2S2025/tree/main/Proyecto2/Manual%20Tecnico',
    featured: false,
  },
  {
    id: 'discos',
    number: '07',
    category: 'Sistemas y almacenamiento',
    title: 'Discos virtuales · El almacenamiento por dentro',
    description:
      'Un intérprete de comandos para crear discos, gestionar particiones y explorar cómo se organiza un sistema de archivos.',
    role: 'Diseño e implementación completa',
    contribution:
      'Diseñé e implementé todo el proyecto: backend en Go, interfaz en React, estructuras de disco, comandos y reportes.',
    details: [
      'Operaciones de discos y particiones MBR/EBR, montaje y formateo.',
      'Estructuras de sistema de archivos EXT2: inodos, bloques, bitmaps y superbloque.',
      'API HTTP que conecta el intérprete de comandos con la interfaz web y generación de reportes.',
    ],
    technologies: ['Go', 'React', 'HTTP', 'MBR / EBR', 'EXT2'],
    repository: 'https://github.com/RSebXC/MIA_2S_P1_202204496',
    diagram: {
      label: 'Estructura del administrador de discos',
      nodes: ['React', 'API Go', 'Comandos', 'Disco'],
      output: 'Particiones / Inodos / Bloques',
    },
    kind: 'own',
    stage: 'Implementación',
    visual: 'disk',
    highlights: [
      'Particiones MBR/EBR y estructuras EXT2.',
      'Backend Go, interfaz React y reportes del disco.',
    ],
    proof: 'Del comando a los bloques',
    documentation:
      'https://github.com/RSebXC/MIA_2S_P1_202204496/tree/main/structures',
    featured: false,
  },
  {
    id: 'cloudcinema',
    number: '08',
    category: 'Infraestructura cloud',
    title: 'CloudCinema · Arquitectura en AWS',
    description:
      'Una aplicación de películas con frontend, APIs y datos desplegados en capas, cada una con su responsabilidad en AWS.',
    role: 'Arquitectura e infraestructura cloud',
    contribution:
      'Desarrollé toda la infraestructura cloud y trabajé la integración de las capas. Las APIs de FastAPI y Express fueron implementadas por mi equipo.',
    details: [
      'Frontend React y archivos multimedia en Amazon S3.',
      'Capa de aplicación en EC2 y base de datos MySQL en RDS.',
      'Configuración de servicios AWS, acceso mediante IAM y conectividad entre las capas de la aplicación.',
    ],
    technologies: ['AWS', 'EC2', 'S3', 'RDS', 'IAM', 'React'],
    repository:
      'https://github.com/RSebXC/SEMINARIO1_A_1S2026_G5/tree/main/Practica_1',
    diagram: {
      label: 'Arquitectura cloud de tres capas',
      nodes: ['React / S3', 'EC2', 'APIs', 'RDS'],
      output: 'Infraestructura / Accesos / Integración',
    },
    kind: 'collaboration',
    stage: 'Implementación',
    visual: 'cloud',
    highlights: [
      'Frontend y archivos en S3; aplicación en EC2.',
      'MySQL en RDS y configuración de accesos con IAM.',
    ],
    proof: 'Infraestructura de tres capas',
    documentation:
      'https://github.com/RSebXC/SEMINARIO1_A_1S2026_G5/tree/main/Practica_1',
    featured: false,
  },
  {
    id: 'compiladores',
    number: '09',
    category: 'Lenguajes y compiladores',
    title: 'OakLand-js · Del lenguaje a RISC-V',
    description:
      'Un editor web que conecta una gramática propia con análisis, interpretación y generación de código ensamblador.',
    role: 'Diseño e implementación completa',
    contribution:
      'Realicé todo el proyecto: gramática, análisis, intérprete, compilador, generación de código e interfaz web.',
    details: [
      'Gramática PEG y representación del programa mediante nodos de un árbol de sintaxis abstracta.',
      'Patrón Visitor para recorrer expresiones, variables y estructuras de control.',
      'Generador de ensamblador RISC-V, editor de código y reportes de errores.',
    ],
    technologies: ['JavaScript', 'PEG.js', 'AST', 'Visitor', 'RISC-V'],
    repository: 'https://github.com/RSebXC/OLC2_Proyecto1_202204496',
    diagram: {
      label: 'Etapas del compilador',
      nodes: ['Código', 'Parser', 'AST', 'RISC-V'],
      output: 'Análisis / Interpretación / Compilación',
    },
    kind: 'own',
    stage: 'Implementación',
    visual: 'compiler',
    highlights: [
      'Parser PEG, árbol de sintaxis y patrón Visitor.',
      'Intérprete, generador RISC-V y reporte de errores.',
    ],
    proof: 'Lenguaje → AST → ensamblador',
    documentation:
      'https://github.com/RSebXC/OLC2_Proyecto1_202204496/tree/main/backend',
    featured: false,
  },
];
