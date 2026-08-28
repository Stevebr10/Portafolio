// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-header',
//   imports: [],
//   templateUrl: './header.component.html',
//   styleUrl: './header.component.css'
// })
// export class HeaderComponent {

// }
import { Component, DestroyRef, inject, NgZone } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common'; // <-- 1. IMPORTA CommonModule
import { ThemeService, Theme } from '../../shared/services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true, // <-- 2. AÑADE standalone: true
  imports: [
    CommonModule // <-- 3. AÑADE CommonModule a los imports
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('slideDown', [
      transition(':enter', [
        style({ height: '0', opacity: 0 }),
        animate('300ms ease-out', style({ height: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ height: '0', opacity: 0 }))
      ])
    ])
  ]
})
export class HeaderComponent {
  
  themeService = inject(ThemeService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly ngZone = inject(NgZone);
  isMenuOpen = false;
  isScrolled = false;
  isThemeMenuOpen = false;

  availableThemes: {id: Theme; name: string; icon: string}[] =[
    {id: 'blaugrana', name:'Personalizado', icon: 'fas fa-palette'},
    {id: 'light', name: 'Claro', icon: 'fas fa-sun'},
    {id: 'dark', name: 'Oscuro', icon: 'fas fa-moon'}
  ]
  
  menuItems = [
    { name: 'Inicio', link: '#home' },
    { name: 'Sobre Mí', link: '#about' },
    { name: 'Habilidades', link: '#skills' },
    // { name: 'Proyectos', link: '#projects' },
    // { name: 'Experiencia', link: '#experience' },
    // { name: 'Contacto', link: '#contact' }
  ];

  constructor() {
    this.ngZone.runOutsideAngular(() => {
      const updateScrollState = () => {
        const nextState = window.scrollY > 50;

        if (nextState !== this.isScrolled) {
          this.ngZone.run(() => {
            this.isScrolled = nextState;
          });
        }
      };

      window.addEventListener('scroll', updateScrollState, { passive: true });
      this.destroyRef.onDestroy(() => {
        window.removeEventListener('scroll', updateScrollState);
      });
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  toggleThemeMenu() {
    this.isThemeMenuOpen = !this.isThemeMenuOpen;
  }

  selectTheme(themeId: Theme) {
    this.themeService.setTheme(themeId);
    this.isThemeMenuOpen = false;
  }

  changeTheme() {
    this.themeService.toggleTheme();
  }
}
