import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService, Recensione } from '../../auth/auth.service';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
@Component({
  selector: 'app-recensioni-streaming',
  standalone: true,
  imports: [
    MatCardModule,FormsModule,
    CommonModule,
    MatButtonModule,
    MatChipsModule,MatDialogActions,MatDialogClose,
    MatDialogContent,MatDialogTitle,
  ],
  templateUrl: './recensioni-streaming.component.html',
  styleUrl: './recensioni-streaming.component.css'
})
export class RecensioniStreamingComponent implements OnInit {
  constructor(private authService: AuthService) { }
  categoria: 'streaming';
  recensioni: Recensione[] = [];
  ngOnInit(): void {
    this.authService.getRecensioniByNegozio('Youtube').subscribe(recensioni => {
      this.recensioni = recensioni;
    });
    this.authService.getRecensioniByNegozio('Twitch').subscribe(recensioni => {
      this.recensioni = recensioni;
    });
    this.authService.getRecensioniByNegozio('Altadefinizione').subscribe(recensioni => {
      this.recensioni = recensioni;
    });
  }
  @Output() recensioneInviata = new EventEmitter<string>();
  mostraRecensione: boolean = false;
  mostraBottone: boolean = true;
  nuovaRecensione: string = '';
  negozioCorrente: string = 'Youtube';
  selezionaNegozio(negozio: string){
    this.negozioCorrente = negozio;
  }
  inviaRecensione() {
    this.recensioneInviata.emit(this.nuovaRecensione);
    if (this.nuovaRecensione.trim() !== '') {
      this.authService.aggiungiRecensione({ testo: this.nuovaRecensione, negozio: this.negozioCorrente  });
      this.nuovaRecensione = '';
    }
  }

}
