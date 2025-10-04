// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-hero',
//   imports: [],
//   templateUrl: './hero.component.html',
//   styleUrl: './hero.component.css'
// })
// export class HeroComponent {

// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule // 2. Añádelo aquí
  ],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  // Puedes agregar lógica adicional aquí
}