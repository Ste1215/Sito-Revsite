import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-categorie',
  standalone: true,
  imports: [
    MatIconModule,
    MatToolbarModule,
    CommonModule,
  ],
  templateUrl: './categorie.component.html',
  styleUrl: './categorie.component.css',
  animations:[
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        animate('850ms ease-in', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class CategorieComponent {


}
