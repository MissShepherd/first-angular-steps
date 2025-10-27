import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { provideRouter, RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

// 🥚 Main Page
@Component({
  selector: 'home-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="container">
      <h1>Welcome to Angular Base</h1>

      <div class="card">
        <h2>Example Card</h2>
        <p>Click Gudetama for some fun facts!</p>

        <div class="gif-container">
          <a routerLink="/gudetama">
            <img
              class="gudetama"
              src="https://i.pinimg.com/originals/d7/a0/9f/d7a09ffd64f946e0087ed82b8c7a4665.gif"
              alt="Gudetama"
            />
          </a>
        </div>

        <input #box type="text" placeholder="Type something..." />
        <button class="btn" (click)="onClick()">Click Me</button>
      </div>
    </div>
  `
})
export class HomePage {
  onClick() {
    console.log('Button clicked');
  }
}

// 🍳 Gudetama Fun Facts Page
@Component({
  selector: 'gudetama-page',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <div class="container">
      <div class="card">
        <h2>🥚 Gudetama Fun Facts</h2>
        <ul class="facts">
          <li>Gudetama’s name comes from “gude gude” (lazy) and “tamago” (egg).</li>
          <li>He first appeared in 2013 as part of a Sanrio character contest.</li>
          <li>He hates getting up and prefers to stay under his bacon blanket.</li>
          <li>He’s voiced by a real person who sighs instead of talking!</li>
          <li>Gudetama has his own Netflix show — “Gudetama: An Eggcellent Adventure.”</li>
        </ul>
        <a routerLink="/" class="btn">⬅ Back</a>
      </div>
    </div>
  `
})
export class GudetamaPage {}

// 🧭 Routes
const routes = [
  { path: '', component: HomePage },
  { path: 'gudetama', component: GudetamaPage },
];

// 🚀 Bootstrap the app with routing
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {}

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
