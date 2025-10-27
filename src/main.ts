import { bootstrapApplication } from '@angular/platform-browser';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Welcome to Angular Base</h1>

      <div class="card">
        <h2>Example Card</h2>
        <p>This is a simple card with a bit of CSS styling.</p>

        <img
          class="gif"
          [src]="gifUrl + cacheBuster"
          alt="looped gif"
        />

        <br />
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
  loopTime = 3000; // milliseconds (adjust to match gif length)
  private timer?: number;

  ngOnInit() {
    this.startLoop();
  }

  ngOnDestroy() {
    if (this.timer) clearInterval(this.timer);
  }

  startLoop() {
    this.timer = window.setInterval(() => {
      this.cacheBuster = `?t=${Date.now()}`; // reloads the gif
    }, this.loopTime);
  }

  onClick() {
    console.log('Button clicked');
  }
}

bootstrapApplication(AppComponent);
