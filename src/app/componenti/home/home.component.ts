import { Component } from '@angular/core';
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
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
        RouterModule,
        MatListModule,
        MatSidenavModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatGridListModule,
        FooterComponent
    ]
})
export class HomeComponent {
  constructor(private authService: AuthService, private router: Router) {}
  
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
    this.router.navigate(['/homapage']);
  }
}
