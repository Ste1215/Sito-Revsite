import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-recensioni',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './recensioni.component.html',
  styleUrl: './recensioni.component.css'
})
export class RecensioniComponent {

}
