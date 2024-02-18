import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { AuthService, Recensione } from '../../auth/auth.service';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-valutazioni',
  standalone: true,
  imports: [
    MatTabsModule,
    CommonModule,
    MatCardModule,
  ],
  templateUrl: './valutazioni.component.html',
  styleUrl: './valutazioni.component.css'
})
export class ValutazioniComponent implements OnInit {
  recensioni: string[] = [];
  recensioniMediaworld: Recensione[] = [];
  recensioniEuronics: Recensione[] = [];
  recensioniUnieuro: Recensione[] = [];
  userNome: string;
  negozi: string[] = ['Mediaworld', 'Euronics', 'Unieuro'];
  recensioniPerNegozi: { [key: string]: Recensione[] } = {};
        constructor(private authService: AuthService){}
  ngOnInit(): void {
    this.negozi.forEach(negozio => {
      this.authService.getRecensioniByNegozio(negozio).subscribe(recensioni => {
        this.recensioniPerNegozi[negozio] = recensioni;
      });
    });
    // this.authService.getRecensioniByNegozio('Mediaworld').subscribe(recensioni => {
    //   this.recensioniMediaworld = recensioni;
    // });
  
    // this.authService.getRecensioniByNegozio('Euronics').subscribe(recensioni => {
    //   this.recensioniEuronics = recensioni;
    // });
  }
  
  getNome(){
    const nome= this.authService.user.nome;
    return nome;
  }
  

}
