import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { AuthService } from '../../auth/auth.service'
import {ElementRef, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatIconModule} from '@angular/material/icon';
import {AsyncPipe} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-recensioni',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatButtonModule,
    FormsModule,
    MatDialogTitle,
     MatDialogContent,
      MatDialogActions, 
      MatDialogClose,
      MatChipsModule,
      MatFormFieldModule,
      MatChipsModule,
      MatIconModule,
      MatAutocompleteModule,
      ReactiveFormsModule,
      AsyncPipe,
  ],
  templateUrl: './recensioni.component.html',
  styleUrl: './recensioni.component.css'
})
export class RecensioniComponent implements OnInit{
  @Output() recensioneInviata = new EventEmitter<string>();
  recensioni: string[] = [];
  ngOnInit(): void {}
  constructor(private authService: AuthService) {}
  mostraRecensione: boolean = false;
  mostraBottone: boolean = true;
  nuovaRecensione: string = '';
  negozioCorrente: string = 'Mediaworld';
  selezionaNegozio(negozio: string){
    this.negozioCorrente = negozio;
  }
  inviaRecensione() {
    // evento con la nuova recensione
    this.recensioneInviata.emit(this.nuovaRecensione);
    // reset del textArea (dove inserisco la recensione)
    if (this.nuovaRecensione.trim() !== '') {
      this.authService.aggiungiRecensione({ testo: this.nuovaRecensione, negozio: this.negozioCorrente  });
      this.nuovaRecensione = '';
    }
  }

  //versione vecchia funzionante ma dove il conteggio aumentava anche dove non ho messo una recensione
    // inviaRecensione() {
  //   // evento con la nuova recensione
  //   this.recensioneInviata.emit(this.nuovaRecensione);
  //   //reset del textArea (dove inserisco la recensione)
  //   if (this.nuovaRecensione.trim() !== '') {
  //   this.authService.inviaRecensione(this.nuovaRecensione);
  //   this.authService.aggiungiRecensione({testo: this.nuovaRecensione,negozio:'Mediaworld'});
  //   this.nuovaRecensione='';
  //   }
  // }



}
