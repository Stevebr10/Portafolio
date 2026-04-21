// skills.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'all';
  description: string;
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
    { name: 'Angular', level: 95, icon: 'fab fa-angular', category: 'frontend', description: 'Desarrollo de SPAs robustas y escalables con el ecosistema completo de Angular.' },
    { name: 'React', level: 90, icon: 'fab fa-react', category: 'frontend', description: 'Creación de UIs interactivas y componentizadas con un enfoque en el rendimiento.' },
    { name: 'TypeScript', level: 90, icon: 'fas fa-code', category: 'frontend', description: 'Aumento de la calidad del código y la mantenibilidad con tipado estático.' },
    { name: 'Tailwind CSS', level: 95, icon: 'fas fa-palette', category: 'frontend', description: 'Diseño de interfaces modernas y responsivas a gran velocidad con un enfoque utility-first.' },
    { name: 'Node.js', level: 88, icon: 'fab fa-node-js', category: 'backend', description: 'Construcción de APIs RESTful eficientes y rápidas del lado del servidor.' },
    { name: 'MongoDB', level: 82, icon: 'fas fa-database', category: 'backend', description: 'Modelado y gestión de bases de datos NoSQL flexibles y orientadas a documentos.' },

    { name: 'Git & GitHub', level: 95, icon: 'fab fa-git-alt', category: 'tools', description: 'Control de versiones avanzado, flujos de trabajo colaborativos y CI/CD.' },
    { name: 'Docker', level: 85, icon: 'fab fa-docker', category: 'tools', description: 'Contenerización de aplicaciones para despliegues consistentes y escalables.' }
  ];

  filteredSkills: Skill[] = [];
  activeSkill: Skill | null = null;


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
    this.filteredSkills = [];

    setTimeout(() => {
      if ( category === 'all') {
        this.filteredSkills = [...this.skills];
      }else{
        this.filteredSkills = this.skills.filter(skill => skill.category === category);
      }
      if(this.filteredSkills.length >0) {
        this.activeSkill = this.filteredSkills[0];
      }
    }, 100);
  }


  setActiveSkill(skill: Skill) {
    this.activeSkill = skill;
  }

  getProgressBarClass(level: number): string {
    if (level >= 90) return 'bg-gradient-to-r from-barca-blue to-barca-gold shadow-[0_0_10px_var(--barca-gold)]';
    if (level >= 75) return 'bg-gradient-to-r from-barca-blue to-barca-red';
    if (level >= 60) return 'bg-gradient-to-r from-barca-red to-barca-gold';
    return 'bg-gradient-to-r from-barca-dark to-barca-red';
  }
}