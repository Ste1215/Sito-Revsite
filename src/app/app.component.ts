import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AuthService } from './auth/auth.service';

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
        
    ],
})
export class AppComponent  implements OnInit{
  title = 'REVSITE';

 constructor(private authService: AuthService){}
  ngOnInit(): void {
    if(localStorage.getItem('user')){
      const user = JSON.parse(localStorage.getItem('user'))
      const nome = user.nome || 'default';
      this.authService.createUser(user.email,nome, user.id, user._token, user._expirationDate, 'assets/img/user.png', user.profileImageUrl);
    console.log(this.authService.user)
    }
  }
 onLogout(){
  this.authService.logout()
 }

}
