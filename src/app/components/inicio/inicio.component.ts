import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { freelances } from '../../../freelances-example';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  freelances = [...freelances];
}
