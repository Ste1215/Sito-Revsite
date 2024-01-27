import { Component, OnInit } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import { Router, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AuthService } from '../../auth/auth.service'; 
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  constructor(public authService: AuthService, private router: Router){}
  isMenuVisible = false;
  ngOnInit(): void {
    if( this.authService.isAuthenticated() === true){
    this.router.navigate(["/categorie"]); 
}else{
    this.router.navigate(["/"]);  
}
}


toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
}

  onLogOut(){
    this.authService.logout();
    
  }
  pathLogin(){
    this.authService.pathLogin();
  }
}
