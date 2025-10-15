import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  animatedLevel: number;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'all';
}

interface Tool {
  name: string;
  icon: string;
}

interface Stats {
  linesOfCode: string;
  projects: number;
  clients: number;
  awards: number;
  animatedValue?: number;
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
  Math = Math; 

  skills: Skill[] = [
    { name: 'Angular', level: 95, animatedLevel: 0, icon: 'fab fa-angular', category: 'frontend' },
    { name: 'React', level: 90, animatedLevel: 0, icon: 'fab fa-react', category: 'frontend' },
    { name: 'Vue.js', level: 85, animatedLevel: 0, icon: 'fab fa-vuejs', category: 'frontend' },
    { name: 'TypeScript', level: 92, animatedLevel: 0, icon: 'fab fa-js', category: 'frontend' },
    { name: 'HTML5 & CSS3', level: 98, animatedLevel: 0, icon: 'fab fa-html5', category: 'frontend' },
    { name: 'Tailwind CSS', level: 95, animatedLevel: 0, icon: 'fas fa-palette', category: 'frontend' },
    { name: 'Node.js', level: 88, animatedLevel: 0, icon: 'fab fa-node-js', category: 'backend' },
    { name: 'Express.js', level: 85, animatedLevel: 0, icon: 'fas fa-server', category: 'backend' },
    { name: 'MongoDB', level: 82, animatedLevel: 0, icon: 'fas fa-database', category: 'backend' },
    { name: 'PostgreSQL', level: 80, animatedLevel: 0, icon: 'fas fa-database', category: 'backend' },
    { name: 'Python', level: 75, animatedLevel: 0, icon: 'fab fa-python', category: 'backend' },
    { name: 'Django', level: 70, animatedLevel: 0, icon: 'fas fa-code', category: 'backend' },
    { name: 'Git & GitHub', level: 95, animatedLevel: 0, icon: 'fab fa-git-alt', category: 'tools' },
    { name: 'Docker', level: 78, animatedLevel: 0, icon: 'fab fa-docker', category: 'tools' },
    { name: 'AWS', level: 75, animatedLevel: 0, icon: 'fab fa-aws', category: 'tools' },
    { name: 'Figma', level: 85, animatedLevel: 0, icon: 'fab fa-figma', category: 'tools' }
  ];

  filteredSkills: Skill[] = [];

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

  stats: Stats[] = [
    { linesOfCode: '100K+', projects: 0, clients: 0, awards: 0, animatedValue: 0 },
    { linesOfCode: '', projects: 50, clients: 0, awards: 0, animatedValue: 0 },
    { linesOfCode: '', projects: 0, clients: 30, awards: 0, animatedValue: 0 },
    { linesOfCode: '', projects: 0, clients: 0, awards: 8, animatedValue: 0 }
  ];

  ngOnInit() {
    this.filterSkills('all');
    setTimeout(() => this.animateStats(), 500);
  }

  filterSkills(category: string) {
    this.selectedCategory = category;
    
    if (category === 'all') {
      this.filteredSkills = [...this.skills];
    } else {
      this.filteredSkills = this.skills.filter(skill => skill.category === category);
    }

    this.filteredSkills.forEach(skill => skill.animatedLevel = 0);
    setTimeout(() => this.animateSkillBars(), 100);
  }

  animateSkillBars() {
    this.filteredSkills.forEach((skill, index) => {
      setTimeout(() => {
        skill.animatedLevel = skill.level;
      }, index * 80);
    });
  }

  animateStats() {
    this.stats.forEach((stat, index) => {
      const target = stat.projects || stat.clients || stat.awards;
      if (target > 0) {
        this.animateNumber(index, 0, target, 2000);
      }
    });
  }

  animateNumber(index: number, start: number, end: number, duration: number) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        this.stats[index].animatedValue = end;
        clearInterval(timer);
      } else {
        this.stats[index].animatedValue = Math.floor(current);
      }
    }, 16);
  }

  getLevelText(level: number): string {
    if (level >= 90) return 'Experto';
    if (level >= 75) return 'Avanzado';
    if (level >= 60) return 'Intermedio';
    return 'Básico';
  }

  getSkillColor(level: number): string {
    if (level >= 90) return '#FFD700';
    if (level >= 75) return '#5B8FF9';
    if (level >= 60) return '#E94560';
    return '#6B7280';
  }
}