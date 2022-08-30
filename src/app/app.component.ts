import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  imagesCount = [];

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.imagesCount.push('class-' + i);
    }
  }
}
