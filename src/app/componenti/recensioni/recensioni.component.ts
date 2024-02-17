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
  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @Output() recensioneInviata = new EventEmitter<string>();
  recensioni: string[] = [];
  ngOnInit(): void {}

  constructor(private authService: AuthService) {
    this.filteredShop = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.AllShop.slice())),
    );
  }
  mostraRecensione: boolean = false;
  mostraBottone: boolean = true;
  nuovaRecensione: string = '';
  inviaRecensione() {
    // evento con la nuova recensione
    this.recensioneInviata.emit(this.nuovaRecensione);
    //reset del textArea (dove inserisco la recensione)
    if (this.nuovaRecensione.trim() !== '') {
    this.authService.inviaRecensione(this.nuovaRecensione);
    this.authService.aggiungiRecensione(this.nuovaRecensione);
    this.nuovaRecensione='';
    }
  }

  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl('');
  filteredShop: Observable<string[]>;
  EletronicsShop: string[] = ['MediaWorld'];
  AllShop: string[] = ['Mediaworld', 'Euronics', 'Unieuro',];
  announcer = inject(LiveAnnouncer);
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.EletronicsShop.push(value);
    }
    event.chipInput!.clear();
    this.fruitCtrl.setValue(null);
  }
  remove(fruit: string): void {
    const index = this.EletronicsShop.indexOf(fruit);
    if (index >= 0) {
      this.EletronicsShop.splice(index, 1);
      this.announcer.announce(`Removed ${fruit}`);
    }
  }
  selected(event: MatAutocompleteSelectedEvent): void {
    this.EletronicsShop.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.AllShop.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }




}
