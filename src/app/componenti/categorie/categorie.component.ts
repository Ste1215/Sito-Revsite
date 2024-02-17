import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormsModule } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { FirebaseService } from '../../servizi/firebase.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatTabsModule} from '@angular/material/tabs';
import { CategorieInterface } from '../../modelli/categorie.models';
import {  ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-categorie',
  standalone: true,
  imports: [
    MatTabsModule,
    FormsModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    CommonModule,
    ReactiveFormsModule,
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
export class CategorieComponent implements OnInit  {
// term: any;
// categorie: CategorieInterface[]= [];
// categoria: any;
// search='';
// searchForm= this.fb.nonNullable.group({
//   search: ''
// });
  constructor(private firebase: FirebaseService,private fb: FormBuilder) {}
  ngOnInit():void {
    // this.fetchData();
  }
  
  // fetchData(): void{
  //   this.firebase.getCategorie(this.search)
  //   .subscribe((categorie)=>{
  //     this.categorie=categorie;
  //   });
  // }
  // onSearchSubmit(): void{
  //   this.search=this.searchForm.value.search ?? '';
  //   this.fetchData();
  // }
}
