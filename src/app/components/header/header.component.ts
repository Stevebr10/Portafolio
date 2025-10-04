// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-header',
//   imports: [],
//   templateUrl: './header.component.html',
//   styleUrl: './header.component.css'
// })
// export class HeaderComponent {

// }
import { Component, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
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
  isMenuOpen = false;
  isScrolled = false;
  
  menuItems = [
    { name: 'Inicio', link: '#home' },
    { name: 'Sobre Mí', link: '#about' },
    { name: 'Habilidades', link: '#skills' },
    { name: 'Proyectos', link: '#projects' },
    { name: 'Experiencia', link: '#experience' },
    { name: 'Contacto', link: '#contact' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
