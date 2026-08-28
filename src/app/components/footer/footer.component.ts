
import { Component, DestroyRef, inject, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common'; 


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
  private readonly destroyRef = inject(DestroyRef);
  private readonly ngZone = inject(NgZone);
  currentYear: number = new Date().getFullYear();
  showScrollTop: boolean = false;

  socialLinks: SocialLink[] = [
    { name: 'GitHub', url: 'https://github.com/Stevebr10', icon: 'fab fa-github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/brandon-oña-2187b6333/', icon: 'fab fa-linkedin' },
    // { name: 'Twitter', url: 'https://twitter.com/tu-usuario', icon: 'fab fa-twitter' },
    // { name: 'Instagram', url: 'https://instagram.com/tu-usuario', icon: 'fab fa-instagram' },
    { name: 'Email', url: 'mailto:stevebrandon1010@gmail.com', icon: 'fas fa-envelope' }
  ];

  quickLinks: Link[] = [
    { name: 'Inicio', url: '#home' },
    { name: 'Sobre Mí', url: '#about' },
    { name: 'Stack Tecnológico', url: '#skills' },
    { name: 'Mis Proyectos', url: '#projects' },
    // { name: 'Experiencia', url: '#experience' },
    // { name: 'Contacto', url: '#contact' }
  ];

  services: Service[] = [
    { name: 'Desarrollo Web', icon: 'fas fa-laptop-code' },
    { name: 'Aplicaciones Móviles', icon: 'fas fa-mobile-alt' },
    { name: 'UI/UX Design', icon: 'fas fa-palette' },
    // { name: 'Consultoría Tech', icon: 'fas fa-lightbulb' },
    // { name: 'SEO & Performance', icon: 'fas fa-chart-line' }
  ];

  constructor() {
    this.ngZone.runOutsideAngular(() => {
      const updateScrollState = () => {
        const nextState = window.scrollY > 400;

        if (nextState !== this.showScrollTop) {
          this.ngZone.run(() => {
            this.showScrollTop = nextState;
          });
        }
      };

      window.addEventListener('scroll', updateScrollState, { passive: true });
      this.destroyRef.onDestroy(() => {
        window.removeEventListener('scroll', updateScrollState);
      });
    });
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}