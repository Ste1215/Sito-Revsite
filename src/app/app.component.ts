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
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule, 
    RouterOutlet,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent  implements OnInit{
  title = 'REVSITE';

 constructor(private authService: AuthService){}
  ngOnInit(): void {
    if(localStorage.getItem('user')){
      const user = JSON.parse(localStorage.getItem('user'))
      console.log(user)
      this.authService.createUser(user.email, user.id, user._token, user._expirationDate, 'assets/img/user.png');
    console.log(this.authService.user)
    }
  }
 onLogout(){
  this.authService.logout()
 }

}
