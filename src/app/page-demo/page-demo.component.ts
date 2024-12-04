import { Component } from '@angular/core';
import { Person, MINNIE } from '../person';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-demo',
  templateUrl: './page-demo.component.html',
  styleUrls: ['./page-demo.component.scss'],
  standalone: true,
  imports: [CommonModule], // Importiert CommonModule für Pipes wie uppercase
})
export class PageDemoComponent {
  me: Person = MINNIE;

  // Optional: Getter für Blockschrift
  get uppercaseSurname(): string {
    return this.me.surname.toUpperCase();
  }
}
