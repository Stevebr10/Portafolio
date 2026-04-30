import { Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark' | 'blaugrana';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // Usamos Signals de Angular (la forma moderna de manejar estados)
  currentTheme = signal<Theme>('blaugrana');

  constructor() {
    this.loadTheme();
  }

  toggleTheme() {
    const themes: Theme[] = ['light', 'dark', 'blaugrana'];
    const currentIndex = themes.indexOf(this.currentTheme());
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    this.setTheme(nextTheme);
  }

  setTheme(theme: Theme) {
    this.currentTheme.set(theme);
    localStorage.setItem('portfolio-theme', theme);
    this.applyThemeToDocument(theme);
  }

  private loadTheme() {
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme;
    if (savedTheme) {
      this.setTheme(savedTheme);
    } else {
      this.applyThemeToDocument(this.currentTheme());
    }
  }

  private applyThemeToDocument(theme: Theme) {
    const htmlTag = document.documentElement;
    // Removemos todos los temas previos
    htmlTag.classList.remove('theme-light', 'theme-dark', 'theme-blaugrana');
    // Agregamos el nuevo
    htmlTag.classList.add(`theme-${theme}`);
    
    // Si usas el modo dark nativo de Tailwind, lo sincronizamos:
    if (theme === 'dark' || theme === 'blaugrana') {
      htmlTag.classList.add('dark');
    } else {
      htmlTag.classList.remove('dark');
    }
  }
}