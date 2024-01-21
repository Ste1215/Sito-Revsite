import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-categorie',
  standalone: true,
  imports: [
    MatIconModule,
    MatToolbarModule,
  ],
  templateUrl: './categorie.component.html',
  styleUrl: './categorie.component.css'
})
export class CategorieComponent {

}
