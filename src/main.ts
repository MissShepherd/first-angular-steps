import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="card">
      <h1>Hello Angular</h1>
      <p>This is a minimal Angular base example.</p>
    </div>
  `,
})
export class AppComponent {}

bootstrapApplication(AppComponent).catch(err => console.error(err));
