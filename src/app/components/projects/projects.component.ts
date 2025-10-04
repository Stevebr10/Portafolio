// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-projects',
//   imports: [],
//   templateUrl: './projects.component.html',
//   styleUrl: './projects.component.css'
// })
// export class ProjectsComponent {

// }

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  filters: string[] = ['Todos', 'Web', 'Mobile', 'Full Stack', 'UI/UX'];
  selectedFilter: string = 'Todos';
  
  projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos y panel de administración. Incluye gestión de inventario y análisis de ventas.',
      image: 'https://placehold.co/600x400/004D98/ffffff?text=E-Commerce',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      demoUrl: '#',
      githubUrl: '#',
      featured: true,
      category: 'Full Stack'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplicación de gestión de tareas colaborativa con tableros Kanban, asignación de tareas, notificaciones en tiempo real y seguimiento de progreso.',
      image: 'https://placehold.co/600x400/A50044/ffffff?text=Task+App',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      demoUrl: '#',
      githubUrl: '#',
      featured: true,
      category: 'Web'
    },
    {
      id: 3,
      title: 'Fitness Tracker Mobile',
      description: 'Aplicación móvil para seguimiento de ejercicios y nutrición. Incluye planes personalizados, seguimiento de calorías y estadísticas detalladas.',
      image: 'https://placehold.co/600x400/EDBB00/0a0e27?text=Fitness+Tracker',
      technologies: ['React Native', 'Redux', 'Node.js'],
      demoUrl: '#',
      featured: false,
      category: 'Mobile'
    },
    {
      id: 4,
      title: 'Dashboard Analytics',
      description: 'Dashboard interactivo para visualización de datos con gráficos en tiempo real, filtros avanzados y exportación de reportes.',
      image: 'https://placehold.co/600x400/0a0e27/ffffff?text=Dashboard',
      technologies: ['Vue.js', 'D3.js', 'Express'],
      demoUrl: '#',
      githubUrl: '#',
      featured: false,
      category: 'Web'
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'Panel de control para gestión de redes sociales con programación de publicaciones, análisis de métricas y generación de reportes automáticos.',
      image: 'https://placehold.co/600x400/004D98/ffffff?text=Social+Dashboard',
      technologies: ['Angular', 'TypeScript', 'PostgreSQL', 'Redis'],
      demoUrl: '#',
      githubUrl: '#',
      featured: true,
      category: 'Full Stack'
    },
    {
      id: 6,
      title: 'Portfolio Design System',
      description: 'Sistema de diseño completo con componentes reutilizables, guía de estilos y documentación interactiva para proyectos empresariales.',
      image: 'https://placehold.co/600x400/A50044/ffffff?text=Design+System',
      technologies: ['Figma', 'Storybook', 'React', 'Styled Components'],
      demoUrl: '#',
      featured: false,
      category: 'UI/UX'
    },
    {
      id: 7,
      title: 'Real Estate Platform',
      description: 'Plataforma inmobiliaria con búsqueda avanzada, tours virtuales 360°, calculadora de hipotecas y sistema de citas con agentes.',
      image: 'https://placehold.co/600x400/EDBB00/0a0e27?text=Real+Estate',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Mapbox'],
      demoUrl: '#',
      githubUrl: '#',
      featured: false,
      category: 'Full Stack'
    },
    {
      id: 8,
      title: 'Weather Forecast App',
      description: 'Aplicación del clima con pronósticos detallados, mapas interactivos, alertas meteorológicas y diseño responsive.',
      image: 'https://placehold.co/600x400/0a0e27/ffffff?text=Weather+App',
      technologies: ['React', 'OpenWeather API', 'Leaflet'],
      demoUrl: '#',
      githubUrl: '#',
      featured: false,
      category: 'Web'
    },
    {
      id: 9,
      title: 'Learning Management System',
      description: 'Sistema de gestión de aprendizaje con cursos en línea, evaluaciones, certificados y seguimiento de progreso de estudiantes.',
      image: 'https://placehold.co/600x400/004D98/ffffff?text=LMS',
      technologies: ['Angular', 'NestJS', 'MongoDB', 'AWS S3'],
      demoUrl: '#',
      featured: false,
      category: 'Full Stack'
    }
  ];
  
  filteredProjects: Project[] = [];
  displayedProjects: Project[] = [];
  projectsPerPage: number = 6;
  currentPage: number = 1;
  hasMoreProjects: boolean = false;

  ngOnInit() {
    this.filterProjects('Todos');
  }

  filterProjects(filter: string) {
    this.selectedFilter = filter;
    this.currentPage = 1;

    if (filter === 'Todos') {
      this.filteredProjects = [...this.projects];
    } else {
      this.filteredProjects = this.projects.filter(project => project.category === filter);
    }
    this.updateDisplayedProjects();
  }

  updateDisplayedProjects() {
    const endIndex = this.currentPage * this.projectsPerPage;
    this.displayedProjects = this.filteredProjects.slice(0, endIndex);
    this.hasMoreProjects = endIndex < this.filteredProjects.length;
  }

  loadMore() {
    this.currentPage++;
    this.updateDisplayedProjects();
  }

  getFilterIcon(filter: string): string {
    const icons: { [key: string]: string } = {
      'Todos': 'fas fa-th',
      'Web': 'fas fa-globe',
      'Mobile': 'fas fa-mobile-alt',
      'Full Stack': 'fas fa-layer-group',
      'UI/UX': 'fas fa-pencil-ruler'
    };
    return icons[filter] || 'fas fa-folder';
  }
}