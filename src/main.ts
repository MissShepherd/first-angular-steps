import { bootstrapApplication } from '@angular/platform-browser';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Welcome to Angular Base</h1>

      <div class="card">
        <h2>Example Card</h2>
        <p>Watch Gudetama move around!</p>

        <div class="gif-container">
          <img
            class="gudetama"
            [src]="gifUrl + cacheBuster"
            alt="Gudetama"
          />
        </div>

        <input #box type="text" placeholder="Type something..." />
        <button class="btn" (click)="onClick()">Click Me</button>
      </div>
    </div>
  `
})
export class AppComponent implements OnInit, OnDestroy {
  gifUrl =
    'https://i.pinimg.com/originals/d7/a0/9f/d7a09ffd64f946e0087ed82b8c7a4665.gif';
  cacheBuster = '';
  refreshMs = 3000; // adjust based on gif length (ms)
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

bootstrapApplication(AppComponent);
