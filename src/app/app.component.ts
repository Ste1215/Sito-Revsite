import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AuthService } from './auth/auth.service';
import { FooterComponent } from "./componenti/footer/footer.component";
import { CategorieComponent } from "./componenti/categorie/categorie.component";
import { ThemeService } from './servizi/theme.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        MatSidenavModule,
        MatButtonModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterOutlet,
        FooterComponent,
        CategorieComponent
    ],
    template:` 
    <div ngbDropdownMenu aria-labelledby="dropdownBasic1" style="background-color: white;">
    <button ngbDropdownItem (click)="changeTheme('light')">Light</button>
    <button ngbDropdownItem (click)="changeTheme('dark')">Dark</button>
    </div>
   `,
})
export class AppComponent implements OnInit{
  title = 'REVSITE';
 constructor(private authService: AuthService){}
 changeTheme(theme:string){
    const body=document.body as HTMLElement
    body.setAttribute('data-bs-theme',theme)
  }
  ngOnInit(): void {
    if(localStorage.getItem('user')){
      const user = JSON.parse(localStorage.getItem('user'))
      this.authService.createUser(user.email,user.nome, user.id, user._token, user._expirationDate, 'assets/img/user.png', user.profileImageUrl);
    console.log(this.authService.user)
    }
  }
 onLogout(){
  this.authService.logout();
 }
// "@angular/material/prebuilt-themes/indigo-pink.css",
}
