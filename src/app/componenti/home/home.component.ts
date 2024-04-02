import { Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import { FooterComponent } from "../footer/footer.component";
import firebase from "firebase/compat/app";
import { CommonModule } from "@angular/common";
import { ThemeService } from '../../servizi/theme.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
        MatSlideToggleModule,
        RouterModule,
        MatListModule,
        MatSidenavModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatGridListModule,
        FooterComponent,
        CommonModule,
        MatButtonModule, 
        MatIconModule,

    ]
})
export class HomeComponent {
  constructor(public authService: AuthService, private router: Router) {}
  loginWithGitHub(){
    const provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(() => {
        this.router.navigate(['/dashboard/categorie']);
      })
  }
  InLogin(){
    this.authService.pathLogin();
  }
  inLogout(){
    this.authService.logout();
  }
  inRegister(){
    this.authService.pathRegister();
  }
  onHome(){
    this.router.navigate(['/']);
  }

  themeService: ThemeService = inject(ThemeService);
  toggleTheme() {
    this.themeService.updateTheme();
  }
  
}
