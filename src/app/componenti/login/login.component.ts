import { Component,OnInit } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatToolbarModule} from '@angular/material/toolbar';
import { AuthService } from '../../auth/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  hide = true;
  constructor(private authService: AuthService,private router: Router){}
  ngOnInit(): void {
   
  }

  onSubmit(form: NgForm){
    const email =form.value.email
    const password =form.value.password
    this.authService.signIn(email,password)
    .subscribe((data: any) => {
      console.log(data)
     const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000)
      this.authService.createUser(data.email, data.localId, data.idToken,data.expiresIn, './assets/images/userProfilo.jpg')
     localStorage.setItem('user',JSON.stringify(this.authService.user))
    })
    form.reset();
  }
  atLogin(){
    this.router.navigate(['/register'])
  }

}
