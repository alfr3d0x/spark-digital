import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  active: number;
  lastVisited: number;

  handleClick(index: number) {
    this.lastVisited = this.active;
    this.active = index;
  }
}
