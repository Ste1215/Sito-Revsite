import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { FirebaseService } from '../../servizi/firebase.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatTabsModule} from '@angular/material/tabs';
import { CategorieInterface } from '../../modelli/categorie.models';
import {  ReactiveFormsModule } from '@angular/forms';
import { ArticleInterface } from '../../modelli/cercaArticoli.models';
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
   // articles: ArticleInterface[] = [];
   // searchForm: FormGroup;
  constructor(private authService: AuthService,private fb: FormBuilder){
  // this.searchForm = this.fb.group({
  //   searchValue: '',
  // });

}
  ngOnInit(): void {
   
  }
// ngOnInit(): void {
//   this.fetchData();
// }
// searchValue = '';
//barra di ricerca nella dashboard
  // fetchData():void {
  //   const searchTerm = this.searchForm.value.searchValue.trim();
  //   console.log("termine ricerca",searchTerm)
  //   this.authService.getArticles(this.searchValue)
  //   .subscribe((articles)  => {
  //       this.articles = articles;
  //     }
  //   );
  // }
  // fetchData(): void {
  //   const searchTerm = this.searchForm.value.searchValue.trim();
  //   console.log("termine ricerca", searchTerm);
  //   this.authService.getArticles(searchTerm)
  //     .subscribe((articles) => {
  //       this.articles = articles;
  //     });
  // }

  // onSearchSubmit(): void {
  //   this.fetchData();
  // }
// onSearchSubmit(): void {
//   this.searchValue = this.searchForm.value.searchValue ?? '';
//   this.fetchData();
// }
//fine logica della barra di ricerca dashboard

}
