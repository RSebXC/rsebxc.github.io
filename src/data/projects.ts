import type { Project } from './types';

export const projects: Project[] = [
  {
    id: 'microservicios',
    number: '01',
    category: 'Arquitectura distribuida',
    title: 'Una plataforma. Varios servicios.',
    description:
      'Plataforma modular para procesos de producción, calidad, inventario y comercio electrónico, conectados mediante un API Gateway y mensajería NATS.',
    role: 'Coordinación del equipo · Frontend y backend',
    contribution:
      'Coordiné al grupo, participé en el planteamiento de cada servicio, desarrollé la mayor parte del frontend e implementé varios servicios de backend.',
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
    featured: true,
  },
  {
    id: 'sg-food',
    number: '02',
    category: 'Ingeniería de datos',
    title: 'SG-Food · De datos a decisiones',
    description:
      'Pipeline ELT que transforma datos de ventas e inventario en un modelo dimensional, con orquestación y validaciones de calidad.',
    role: 'Responsable principal del trabajo de datos',
    contribution:
      'Desarrollé la mayor parte del trabajo de Big Data e ingeniería de datos del proyecto grupal.',
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
  },
  {
    id: 'discos',
    number: '03',
    category: 'Sistemas y almacenamiento',
    title: 'Discos virtuales, desde adentro',
    description:
      'Aplicación que interpreta comandos para crear discos virtuales, administrar particiones y trabajar con estructuras de almacenamiento.',
    role: 'Desarrollo completo · Proyecto individual',
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
  },
  {
    id: 'monitoreo',
    number: '04',
    category: 'Sistemas y observabilidad',
    title: 'Del kernel al dashboard',
    description:
      'Sistema para monitorear procesos y contenedores, con captura de métricas desde Linux y gestión mediante un daemon en Go.',
    role: 'Desarrollo completo · Proyecto individual',
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
  },
  {
    id: 'cloudcinema',
    number: '05',
    category: 'Infraestructura cloud',
    title: 'CloudCinema · Una app en AWS',
    description:
      'Aplicación de catálogo y reproducción de películas, con arquitectura de tres capas y dos implementaciones de API.',
    role: 'Infraestructura en la nube · Proyecto grupal',
    contribution:
      'Me encargué de la infraestructura cloud. Mi equipo desarrolló las APIs en FastAPI y Express; participé desde la comprensión e integración de la arquitectura.',
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
  },
  {
    id: 'compiladores',
    number: '06',
    category: 'Lenguajes y compiladores',
    title: 'OakLand-js · Del código a RISC-V',
    description:
      'Intérprete y compilador con editor web, análisis sintáctico y generación de código ensamblador RISC-V.',
    role: 'Desarrollo completo · Compiladores 2',
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
  },
];
