// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-footer',
//   imports: [],
//   templateUrl: './footer.component.html',
//   styleUrl: './footer.component.css'
// })
// export class FooterComponent {

// }
import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule


interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

interface Link {
  name: string;
  url: string;
}

interface Service {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,               // Añade standalone: true
  imports: [CommonModule],        // Añade CommonModule a los imports
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  showScrollTop: boolean = false;

  socialLinks: SocialLink[] = [
    { name: 'GitHub', url: 'https://github.com/tu-usuario', icon: 'fab fa-github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/tu-usuario', icon: 'fab fa-linkedin' },
    { name: 'Twitter', url: 'https://twitter.com/tu-usuario', icon: 'fab fa-twitter' },
    { name: 'Instagram', url: 'https://instagram.com/tu-usuario', icon: 'fab fa-instagram' },
    { name: 'Email', url: 'mailto:tu@email.com', icon: 'fas fa-envelope' }
  ];

  quickLinks: Link[] = [
    { name: 'Inicio', url: '#home' },
    { name: 'Sobre Mí', url: '#about' },
    { name: 'Habilidades', url: '#skills' },
    { name: 'Proyectos', url: '#projects' },
    { name: 'Experiencia', url: '#experience' },
    { name: 'Contacto', url: '#contact' }
  ];

  services: Service[] = [
    { name: 'Desarrollo Web', icon: 'fas fa-laptop-code' },
    { name: 'Aplicaciones Móviles', icon: 'fas fa-mobile-alt' },
    { name: 'UI/UX Design', icon: 'fas fa-palette' },
    { name: 'Consultoría Tech', icon: 'fas fa-lightbulb' },
    { name: 'SEO & Performance', icon: 'fas fa-chart-line' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollTop = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}