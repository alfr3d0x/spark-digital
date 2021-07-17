import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  active: number;
  visits = new Set();
  squares = new Array(16);

  handleClick(index: number) {
    if (this.visits.size >= this.squares.length) {
      this.visits.clear();
    }
    this.visits.add(index);
    this.active = index;
  }

  hasBennVisited(index: number) {
    return !!(this.visits.has(index) && index !== this.active);
  }
}
