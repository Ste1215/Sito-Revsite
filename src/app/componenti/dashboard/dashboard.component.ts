import { Component, OnInit,ViewChild } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import { Router, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AuthService } from '../../auth/auth.service'; 
import { CommonModule } from '@angular/common';
import {MatMenuModule, MatMenuTrigger} from '@angular/material/menu';


import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { SettingsUserComponents } from './settings-user.component';
import { ArticleInterface } from '../../modelli/cercaArticoli.models';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
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
  customImageSelected: boolean = false;
 isMenuVisible = false;
 



  constructor(public dialog: MatDialog,public authService: AuthService, private router: Router){ }

  openDialog() {
    this.dialog.open(SettingsUserComponents);
  }
  ngOnInit(): void {
    if(this.authService.isAuthenticated() === true){
        this.router.navigate(["/categorie"]);   
      }else{
      this.router.navigate(["/"]);  
  }
  const isGoogleSignIn = this.authService.isUserSignedInWithGoogle();
   if(isGoogleSignIn){
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
  onCategorie(){
    this.router.navigate(['/categorie']);
  }
}
