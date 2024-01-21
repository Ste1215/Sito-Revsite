import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../modelli/user.models';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  APIkey='AIzaSyBIFfzsHEY-ECfG-We8Ia57ZdLJ0vuaugk'
  signUpURL=`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.APIkey}`
  signInURL=`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.APIkey}`
  isLoggedIn: boolean;
  user : User
  constructor(private http: HttpClient, private router: Router) { }
  
  isAuthenticated(){
    return this.isLoggedIn
  }
  signUp(email: string, password: string){
    console.log(email, password);
    return this.http.post(this.signUpURL,{ email: email, password: password, returnSecureToken: true})
  }
  signIn(email: string, password: string){
    return this.http.post(this.signInURL,{ email: email, password: password, returnSecureToken: true})
  }

  createUser(email: string, id: string, token: string, expirationDate: Date, profileImage: string){
    this.user = new User(email,id,token,expirationDate,profileImage)
    this.isLoggedIn = true
  }
  logout(){
    this.isLoggedIn= false
    this.user= null
    localStorage.removeItem('user')
    this.router.navigate(['/homepage'])
  }
  pathLogin(){
    this.router.navigate(['/login'])
  }

  
}
