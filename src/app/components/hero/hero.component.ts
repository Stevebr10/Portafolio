// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-hero',
//   imports: [],
//   templateUrl: './hero.component.html',
//   styleUrl: './hero.component.css'
// })
// export class HeroComponent {

// }

import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule // 2. Añádelo aquí
  ],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeroComponent {
  readonly splineState = signal<'idle' | 'loading' | 'ready' | 'error'>('idle');

  async loadSpline(): Promise<void> {
    if (this.splineState() !== 'idle' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    this.splineState.set('loading');

    try {
      const existingScript = document.querySelector<HTMLScriptElement>('script[data-spline-viewer]');

      if (!existingScript) {
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement('script');
          script.type = 'module';
          script.src = 'https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js';
          script.dataset['splineViewer'] = 'true';
          script.onload = () => resolve();
          script.onerror = () => reject(new Error('No se pudo cargar Spline'));
          document.head.appendChild(script);
        });
      }

      await customElements.whenDefined('spline-viewer');
      this.splineState.set('ready');
    } catch {
      this.splineState.set('error');
    }
  }
}