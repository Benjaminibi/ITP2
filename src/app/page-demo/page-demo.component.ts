import { Component } from '@angular/core';
import { Person, MINNIE } from '../person';

@Component({
  selector: 'app-page-demo',
  templateUrl: './page-demo.component.html',
  styleUrls: ['./page-demo.component.scss'],
  standalone: true,
})
export class PageDemoComponent {
  me: Person = MINNIE;
}
