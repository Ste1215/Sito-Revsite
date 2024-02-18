import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService, Recensione } from '../../auth/auth.service';
import { RecensioniComponent } from "../recensioni/recensioni.component";


@Component({
    selector: 'app-elettronica',
    standalone: true,
    templateUrl: './elettronica.component.html',
    styleUrl: './elettronica.component.css',
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        RecensioniComponent,
    ]
})
export class ElettronicaComponent implements OnInit{
  numeroRecensioni: number = 0;
  recensioneInseritaDallUtente: string;
    negozi =[
    {nome: "Mediaworld", numeroRecensioni: 0},
    {nome: "Euronics", numeroRecensioni: 0},
    {nome: "Unieuro", numeroRecensioni: 0},
  ]
  constructor(private router: Router,public authService: AuthService){}
  ngOnInit(): void {
    this.authService.getRecensioniByNegozio('Mediaworld').subscribe(recensioni => {
      this.negozi[0].numeroRecensioni = recensioni.length;
    });

    this.authService.getRecensioniByNegozio('Euronics').subscribe(recensioni => {
      this.negozi[1].numeroRecensioni = recensioni.length;
    });
    this.authService.getRecensioniByNegozio('Unieuro').subscribe(recensioni => {
      this.negozi[2].numeroRecensioni = recensioni.length;
    });

    this.authService.recensione$.subscribe(recensione => {
      
      if (recensione) {
        const negozioIndex = this.negozi.findIndex(negozio => negozio.nome === recensione.negozio);
        if (negozioIndex !== -1) {
          this.negozi[negozioIndex].numeroRecensioni++;
        }
      }
    });
  }
    // this.authService.recensione$.subscribe(recensione => {
    //   this.recensioneInseritaDallUtente = recensione;
    // });
gestisciNuovaRecensioneInviata(nuovaRecensione: string, negozio: string) {
      this.numeroRecensioni++;
      const recensione: Recensione = {
        testo: nuovaRecensione,
        negozio: negozio,
      };
      this.authService.aggiungiRecensione(recensione);
    }


  // gestisciNuovaRecensioneInviata(nuovaRecensione: string) {
  //   this.numeroRecensioni++;
  //   const recensione: Recensione ={
  //     testo: nuovaRecensione,
  //     negozio: 'Mediaworld',
  //   }
  //   this.authService.aggiungiRecensione(recensione);
  //  }
   
   
   //this.recensioneInseritaDallUtente;
   color= "orange";
  onRecensioni(){
    this.router.navigate(['/recensioni']);
  }
  onValutazioni(){
    this.router.navigate(['/valutazioni']);
  }
}
