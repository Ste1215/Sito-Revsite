import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

      constructor(private authService: AuthService, private router: Router) {}
  InLogin(){
    this.authService.pathLogin();
  }
  inLogout(){
    this.authService.logout();
  }
}
