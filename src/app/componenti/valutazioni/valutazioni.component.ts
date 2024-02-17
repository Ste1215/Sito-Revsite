import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'app-valutazioni',
  standalone: true,
  imports: [
    MatTabsModule,
  ],
  templateUrl: './valutazioni.component.html',
  styleUrl: './valutazioni.component.css'
})
export class ValutazioniComponent implements OnInit {
  recensioni: string[] = [];

        constructor(private authService: AuthService){}
  ngOnInit(): void {
    // this.authService.getRecensioni().subscribe(recensioni => {
    //   this.recensioni = recensioni;
    // });
  }
  
}
