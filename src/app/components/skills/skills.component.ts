// skills.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'all';
  description: string; // <-- AÑADIDO: Una breve descripción
}

// ... (la interfaz Tool y Stats se mantienen igual) ...
interface Tool {
  name: string;
  icon: string;
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

  // MODIFICADO: Se añade un campo 'description' para más contexto
  skills: Skill[] = [
    { name: 'Angular', level: 95, icon: 'fab fa-angular', category: 'frontend', description: 'Desarrollo de SPAs robustas y escalables con el ecosistema completo de Angular.' },
    { name: 'React', level: 90, icon: 'fab fa-react', category: 'frontend', description: 'Creación de UIs interactivas y componentizadas con un enfoque en el rendimiento.' },
    { name: 'TypeScript', level: 92, icon: 'fas fa-code', category: 'frontend', description: 'Aumento de la calidad del código y la mantenibilidad con tipado estático.' },
    { name: 'Tailwind CSS', level: 95, icon: 'fas fa-palette', category: 'frontend', description: 'Diseño de interfaces modernas y responsivas a gran velocidad con un enfoque utility-first.' },
    { name: 'Node.js', level: 88, icon: 'fab fa-node-js', category: 'backend', description: 'Construcción de APIs RESTful eficientes y rápidas del lado del servidor.' },
    { name: 'MongoDB', level: 82, icon: 'fas fa-database', category: 'backend', description: 'Modelado y gestión de bases de datos NoSQL flexibles y orientadas a documentos.' },
    { name: 'PostgreSQL', level: 80, icon: 'fas fa-database', category: 'backend', description: 'Diseño de bases de datos relacionales robustas y seguras.' },
    { name: 'Python', level: 75, icon: 'fab fa-python', category: 'backend', description: 'Desarrollo de scripts, automatización y lógica de backend con un lenguaje versátil.' },
    { name: 'Git & GitHub', level: 95, icon: 'fab fa-git-alt', category: 'tools', description: 'Control de versiones avanzado, flujos de trabajo colaborativos y CI/CD.' },
    { name: 'Docker', level: 78, icon: 'fab fa-docker', category: 'tools', description: 'Creación de entornos de desarrollo y producción consistentes mediante contenedores.' },
    { name: 'AWS', level: 75, icon: 'fab fa-aws', category: 'tools', description: 'Despliegue y gestión de aplicaciones en la nube, incluyendo EC2, S3 y Lambda.' },
    { name: 'Figma', level: 85, icon: 'fab fa-figma', category: 'tools', description: 'Diseño y prototipado de interfaces de usuario colaborativas y eficientes.' }
  ];

  filteredSkills: Skill[] = [];
  activeSkill: Skill | null = null; // <-- NUEVO: Para la habilidad activa en el panel

  // El resto de tus propiedades (tools, stats) se mantienen igual
  tools: Tool[] = [
    { name: 'VS Code', icon: 'fas fa-code' },
    { name: 'Postman', icon: 'fas fa-paper-plane' },
    { name: 'Jira', icon: 'fas fa-tasks' },
    { name: 'Slack', icon: 'fab fa-slack' },
    { name: 'Webpack', icon: 'fas fa-cube' },
    { name: 'NPM', icon: 'fab fa-npm' },
    { name: 'Linux', icon: 'fab fa-linux' },
    { name: 'Photoshop', icon: 'fas fa-image' }
  ];

  stats: Stats = {
    linesOfCode: '100K+',
    projects: 50,
    clients: 30,
    awards: 8
  };


  ngOnInit() {
    this.filterSkills('all');
  }

  filterSkills(category: string) {
    this.selectedCategory = category;
    this.activeSkill = null; // Resetea la habilidad activa al cambiar de filtro
    if (category === 'all') {
      this.filteredSkills = [...this.skills];
    } else {
      // Casteamos category para que coincida con el tipo de la interfaz
      this.filteredSkills = this.skills.filter(skill => skill.category === category);
    }
  }

  // --- NUEVAS FUNCIONES PARA INTERACTIVIDAD ---
  setActiveSkill(skill: Skill) {
    this.activeSkill = skill;
  }

  clearActiveSkill() {
    this.activeSkill = null;
  }

  // --- FUNCIONES LEGACY (getProgressBarClass se puede reutilizar) ---
  getProgressBarClass(level: number): string {
    if (level >= 90) return 'bg-gradient-to-r from-barca-blue to-barca-gold';
    if (level >= 75) return 'bg-gradient-to-r from-barca-blue to-barca-red';
    if (level >= 60) return 'bg-gradient-to-r from-barca-red to-barca-gold';
    return 'bg-gray-600';
  }
}