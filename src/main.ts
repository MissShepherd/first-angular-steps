import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Welcome to Angular Base</h1>


      <div class="card">
        <h2>Example Card</h2>
        <p>This is a simple card with a bit of CSS styling.</p>
        <br><input #box type="text" placeholder="Type something..." />
        <button class="btn" (click)="onClick()">Click Me</button> 
      </div>
    </div>
  `
})
export class AppComponent {
  onClick() {

  }
}

bootstrapApplication(AppComponent);
