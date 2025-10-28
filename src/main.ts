import { bootstrapApplication } from '@angular/platform-browser';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { provideRouter, RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

/* ===============================
   🏠 HOME PAGE (with looping GIF)
================================= */
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
          <!-- Clickable Gudetama -->
          <a routerLink="/gudetama">
            <img
              class="gudetama"
              [src]="gifUrl + cacheBuster"
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
export class HomePage implements OnInit, OnDestroy {
  gifUrl =
    'https://i.pinimg.com/originals/d7/a0/9f/d7a09ffd64f946e0087ed82b8c7a4665.gif';
  cacheBuster = '';
  refreshMs = 3000; // adjust based on gif length
  private timer?: number;

  ngOnInit() {
    this.startLoop();
  }

  ngOnDestroy() {
    if (this.timer) clearInterval(this.timer);
  }

  startLoop() {
    this.timer = window.setInterval(() => {
      // Force reload by changing the URL slightly
      this.cacheBuster = `?t=${Date.now()}`;
    }, this.refreshMs);
  }

  onClick() {
    console.log('Button clicked');
  }
}

/* ===============================
   🍳 GUDETAMA FUN FACTS PAGE
================================= */
@Component({
  selector: 'gudetama-page',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <div class="container">
      <div class="card">
        <h2>🥚 Gudetama Fun Facts</h2>
        <ul class="facts">
          <li>"Gudetama" comes from "gude gude" (lazy) and "tamago" (egg).</li>
          <li>He first appeared in a 2013 Sanrio character contest.</li>
          <li>Prefers to stay under his bacon blanket instead of working.</li>
          <li>His voice actress mostly sighs instead of talking!</li>
          <li>He even has a Netflix show — “Gudetama: An Eggcellent Adventure.”</li>
        </ul>
        <a routerLink="/" class="btn">⬅ Back</a>
      </div>
    </div>
  `
})
export class GudetamaPage {}

const routes = [
  { path: '', component: HomePage },
  { path: 'gudetama', component: GudetamaPage },
];

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
