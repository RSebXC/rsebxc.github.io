export interface Experience {
  organization: string;
  role: string;
  start: string;
  end?: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  tags: string[];
}

export interface Project {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  role: string;
  contribution: string;
  details: string[];
  technologies: string[];
  repository: string;
  diagram: { label: string; nodes: string[]; output: string };
  featured?: boolean;
  kind: 'own' | 'collaboration';
  stage: string;
  visual:
    | 'finance'
    | 'services'
    | 'routes'
    | 'pipeline'
    | 'queue'
    | 'monitor'
    | 'disk'
    | 'cloud'
    | 'compiler';
  highlights: string[];
  proof: string;
  documentation: string;
}
