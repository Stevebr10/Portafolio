// skills.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'all';
  description: string;
  highlight: string;
}

interface Stats {
  linesOfCode: string;
  projects: number;
  clients: number;
  awards: number;
}


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  categories: string[] = ['all', 'frontend', 'backend', 'tools'];
  selectedCategory: string = 'all';


  skills: Skill[] = [
    { 
      name: 'Angular', 
      level: 95, 
      icon: 'fab fa-angular', 
      category: 'frontend', 
      description: 'Desarrollo de SPAs y componentes interactivos para sistemas de gestión empresarial. Creación de apps móviles usando Angular y Capacitor.',
      highlight: 'Integración de +20 APIs REST'
    },
    { 
      name: 'Python', 
      level: 90, 
      icon: 'fab fa-python', 
      category: 'backend', 
      description: 'Programación de soluciones backend, creación de APIs RESTful con arquitectura de microservicios y desarrollo de scripts para automatización.',
      highlight: 'Reducción del 40% en trabajo manual (Scraping)'
    },
    { 
      name: 'PostgreSQL & SQL', 
      level: 85, 
      icon: 'fas fa-database', 
      category: 'backend', 
      description: 'Modelado de entidades complejas, diseño de bases de datos relacionales y optimización de consultas para mejorar tiempos de respuesta.',
      highlight: 'Mejora del 25% en eficiencia de consultas'
    },
    { 
      name: 'PHP', 
      level: 80, 
      icon: 'fab fa-php', 
      category: 'backend', 
      description: 'Desarrollo de funcionalidades fullstack para sistemas de gestión financiera, automatizando el procesamiento masivo de datos (archivos Excel).',
      highlight: 'Reducción del 30% en carga de información'
    },
    { 
      name: 'Java & C#', 
      level: 80, 
      icon: 'fab fa-java', 
      category: 'backend', 
      description: 'Análisis, desarrollo y despliegue de aplicaciones de escritorio y soluciones informáticas seguras para gestión empresarial e institucional.',
      highlight: 'Liderazgo en App de Gestión Hotelera'
    },
    { 
      name: 'Docker & Git', 
      level: 85, 
      icon: 'fab fa-docker', 
      category: 'tools', 
      description: 'Gestión colaborativa de código fuente y contenedorización de bases de datos y microservicios para asegurar portabilidad y escalabilidad.',
      highlight: 'Arquitectura de Microservicios Portables'
    }
  ];

  filteredSkills: Skill[] = [];
  activeSkill: Skill | null = null;





  ngOnInit() {
    this.filterSkills('all');
  }

  filterSkills(category: string) {
    this.selectedCategory = category;
    this.filteredSkills = category === 'all' 
      ? [...this.skills] 
      : this.skills.filter(skill => skill.category === category);
    
    this.activeSkill = this.filteredSkills.length > 0 ? this.filteredSkills[0] : null;
  }


  setActiveSkill(skill: Skill) {
    this.activeSkill = skill;
  }

  // Funcion para mover el carrusel
  nextSkill() {
    if (!this.activeSkill || !this.filteredSkills.length) return;
    const currentIndex = this.filteredSkills.indexOf(this.activeSkill);
    const nextIndex = (currentIndex + 1) % this.filteredSkills.length; 
    this.activeSkill = this.filteredSkills[nextIndex];
  }

  prevSkill() {
    if (!this.activeSkill) return;
    const currentIndex = this.filteredSkills.indexOf(this.activeSkill);
    const prevIndex = (currentIndex - 1 + this.filteredSkills.length) % this.filteredSkills.length;
    this.activeSkill = this.filteredSkills[prevIndex];
  }

  // NUEVO: Lógica matemática para las clases dinámicas del carrusel 3D
  getCarouselItemClasses(skill: Skill): string {
    if (!this.activeSkill || this.filteredSkills.length === 0) return 'hidden';

    const activeIndex = this.filteredSkills.indexOf(this.activeSkill);
    const skillIndex = this.filteredSkills.indexOf(skill);
    const total = this.filteredSkills.length;

    // Elemento central (Activo)
    if (skillIndex === activeIndex) {
      return 'z-30 scale-110 opacity-100 translate-x-0 blur-none shadow-glow border-barca-gold';
    }

    // Siguiente elemento (Derecha)
    const nextIndex = (activeIndex + 1) % total;
    if (skillIndex === nextIndex) {
      return 'z-20 scale-75 opacity-40 translate-x-28 md:translate-x-40 blur-[2px] cursor-pointer hover:opacity-80 border-barca-blue/50';
    }

    // Elemento anterior (Izquierda)
    const prevIndex = (activeIndex - 1 + total) % total;
    if (skillIndex === prevIndex) {
      return 'z-20 scale-75 opacity-40 -translate-x-28 md:-translate-x-40 blur-[2px] cursor-pointer hover:opacity-80 border-barca-blue/50';
    }

    // Ocultar los demás suavemente
    return 'z-0 scale-50 opacity-0 absolute blur-md border-transparent pointer-events-none';
  }

  getProgressBarClass(level: number): string {
    if (level >= 90) {
      return 'bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-3)] shadow-[0_0_10px_var(--accent-3)]';
    }
    if (level >= 75) {
      return 'bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)]';
    }
    return 'bg-gradient-to-r from-[var(--accent-2)] to-[var(--accent-3)]';
  }
}