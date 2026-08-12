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
  category: 'Web' | 'Mobile' | 'Backend' | 'Full Stack';
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  filters: string[] = ['Todos', 'Web', 'Mobile', 'Backend', 'Full Stack'];
  selectedFilter: string = 'Todos';
  
  projects: Project[] = [
    {
      id: 1,
      title: 'Spotify Clone - Arquitectura Web',
      description: 'Aplicación web completa para gestión de música. Incluye un chat en tiempo real mediante WebSockets y una base de datos contenerizada para asegurar su portabilidad.',
      image: 'images/spotify.png',
      technologies: ['Angular', 'Python', 'PostgreSQL', 'Docker'],
      demoUrl: 'https://youtube.com',
      githubUrl: 'https://github.com/Stevebr10',
      featured: true,
      category: 'Web' // <-- Ahora el filtro Web funcionará
    },
    {
      id: 2,
      title: 'Navegación en Interiores',
      description: 'Aplicación móvil interactiva para facilitar la orientación. Integra hardware nativo del dispositivo (GPS, BLE, NFC) para localización precisa en tiempo real.',
      image: 'assets/images/project-nav.jpg',
      technologies: ['Angular', 'Capacitor', 'Hardware APIs'],
      demoUrl: 'https://youtube.com',
      githubUrl: 'https://github.com/Stevebr10',
      featured: true,
      category: 'Mobile'
    },
    {
      id: 3,
      title: 'Microservicios - API Canciones',
      description: 'Refactorización de arquitectura monolítica a microservicios independientes. Mejora la escalabilidad en la gestión de usuarios, canciones y playlists.',
      image: 'assets/images/project-api.jpg',
      technologies: ['Python', 'Docker', 'REST API'],
      demoUrl: '',
      githubUrl: 'https://github.com/Stevebr10',
      featured: true,
      category: 'Backend'
    },
    {
      id: 4,
      title: 'Gestor de Tareas Móvil',
      description: 'Aplicación nativa para la administración de actividades. Cuenta con operaciones CRUD completas, categorización dinámica y notificaciones automáticas.',
      image: 'assets/images/project-tasks.jpg',
      technologies: ['Android Studio', 'Java', 'SQLite'],
      demoUrl: 'https://youtube.com',
      githubUrl: 'https://github.com/Stevebr10',
      featured: false,
      category: 'Mobile'
    },
    {
      id: 5,
      title: 'Sistema de Gestión Hotelera',
      description: 'Aplicación de escritorio integral para la administración de reservas, control de disponibilidad y generación de reportes operativos.',
      image: 'assets/images/project-hotel.jpg',
      technologies: ['Java', 'NetBeans', 'SQL Server'],
      demoUrl: 'https://youtube.com',
      githubUrl: 'https://github.com/Stevebr10',
      featured: false,
      category: 'Backend'
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
      'Todos': 'fas fa-th-large',
      'Web': 'fas fa-globe',
      'Mobile': 'fas fa-mobile-alt',
      'Backend': 'fas fa-server',
      'Full Stack': 'fas fa-layer-group'
    };
    return icons[filter] || 'fas fa-folder';
  }
}