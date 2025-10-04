// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'portafolio-balugrana';
// }

// import { Component, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import * as AOS from 'aos';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   title = 'portafolio-balugrana';

//   ngOnInit() {
//     AOS.init({
//       duration: 1000,
//       once: true,
//       easing: 'ease-in-out',
//       offset: 100
//     });
//   }
// }

// src/app/app.component.ts

import { Component, OnInit } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';

// Importa todos los componentes que vas a usar
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true, // Asegúrate de que tu componente sea standalone
  imports: [
    //RouterOutlet,
    // Añade todos tus componentes aquí sss
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portafolio-balugrana';

  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
      offset: 100
    });
  }
}