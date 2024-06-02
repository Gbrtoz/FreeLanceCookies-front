import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { freelances } from '../../../freelances-example';
import { FreelanceCardComponent } from "../comps/freelance-card/freelance-card.component";

@Component({
    selector: 'app-inicio',
    standalone: true,
    templateUrl: './inicio.component.html',
    styleUrl: './inicio.component.css',
    imports: [CommonModule, FreelanceCardComponent, RouterModule]
})
export class InicioComponent {
  freelances = [...freelances];
}
