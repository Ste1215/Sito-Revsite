import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth/auth.service';
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
  
  
  constructor(private router: Router,public authService: AuthService){}
  ngOnInit(): void {
    this.authService.recensione$.subscribe(recensione => {
      this.recensioneInseritaDallUtente = recensione;
    });
  }
  numeroRecensioni: number = 0;
  recensioneInseritaDallUtente: string;
  gestisciNuovaRecensioneInviata() {
    this.numeroRecensioni++;
    const nuovaRecensione = this.recensioneInseritaDallUtente;
    this.authService.aggiungiRecensione(nuovaRecensione);
  }
   color= "orange";
  onRecensioni(){
    this.router.navigate(['/recensioni']);
  }
  onValutazioni(){
    this.router.navigate(['/valutazioni']);
  }
}
