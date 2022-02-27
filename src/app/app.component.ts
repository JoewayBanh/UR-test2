import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],

  template: `
    <body>
      <button
        [className]="clicked ? 'liked like-button' : 'like-button'"
        (click)="toggle()"
      >
        Like |
        <span>{{ initialCount }}</span>
      </button>
    </body>
  `,
})
export class AppComponent {
  public initialCount: number = 100;
  public clicked: boolean = false;

  toggle = () => {
    this.clicked = !this.clicked;

    if (this.clicked) {
      this.initialCount = 101;
    } else {
      this.initialCount = 100;
    }
  };
}
