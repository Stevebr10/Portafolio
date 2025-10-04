// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-about',
//   imports: [],
//   templateUrl: './about.component.html',
//   styleUrl: './about.component.css'
// })
// export class AboutComponent {

// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Interest {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-about',
  standalone: true, // <-- 2. AÑADE standalone: true
  imports: [
    CommonModule // <-- 3. AÑADE CommonModule a los imports
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  yearsOfExperience: number = 5;
  completedProjects: number = 50;

  interests: Interest[] = [
    { name: 'Desarrollo Web', icon: 'fas fa-code' },
    { name: 'UI/UX Design', icon: 'fas fa-palette' },
    { name: 'Machine Learning', icon: 'fas fa-brain' },
    { name: 'Open Source', icon: 'fab fa-github' },
    { name: 'Fotografía', icon: 'fas fa-camera' },
    { name: 'Gaming', icon: 'fas fa-gamepad' }
  ];
}