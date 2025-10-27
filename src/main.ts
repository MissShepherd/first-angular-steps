import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';

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
            src="https://i.pinimg.com/originals/d7/a0/9f/d7a09ffd64f946e0087ed82b8c7a4665.gif"
            alt="Gudetama"
          />
        </div>

        <input #box type="text" placeholder="Type something..." />
        <button class="btn" (click)="onClick()">Click Me</button>
      </div>
    </div>
  `
})
export class AppComponent {
  onClick() {
    console.log('Button clicked');
  }
}

bootstrapApplication(AppComponent);
