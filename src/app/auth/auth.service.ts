import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../modelli/user.models';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  recensioniCount: number = 0;
  recensioni: string[] = [];


  APIkey='AIzaSyBIFfzsHEY-ECfG-We8Ia57ZdLJ0vuaugk'
  signUpURL=`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.APIkey}`
  signInURL=`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.APIkey}`
  isLoggedIn: boolean;
  user : User

  constructor(private http: HttpClient, private router: Router) { }
  // private apiUrl = 'https://revsite-7732b-default-rtdb.europe-west1.firebasedatabase.app/'; 


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

  createUser(email: string, id: string, token: string, expirationDate: Date, profileImage: string,profileImageUrl: string){
    this.user = new User(email,id,token,expirationDate,profileImage,profileImageUrl);
    this.isLoggedIn = true
  }
  getId(){
    return this.user.id;
  }
  logout(){
    this.isLoggedIn= false
    this.user= null
    localStorage.removeItem('user')
    this.router.navigate(['/homepage'])
  }
useDefaultProfileImage(): void {
  this.user.profileImage = 'assets/img/user.png';
}
updateProfileImage(imageUrl: string): void {
  this.user.profileImage = imageUrl;
}
  pathLogin(){
    this.router.navigate(['/login'])
  }
  pathRegister(){
    this.router.navigate(['/register'])
  }

  private recensioniSubject = new BehaviorSubject<string[]>([]);
  recensioni$ = this.recensioniSubject.asObservable();
  aggiungiRecensione(recensione: string) {
    const recensioniAttuali = this.recensioniSubject.value;
    const nuoveRecensioni = [...recensioniAttuali, recensione];
    this.recensioniSubject.next(nuoveRecensioni);
  }
  private recensioneSubject = new BehaviorSubject<string>('');
  recensione$ = this.recensioneSubject.asObservable();
  inviaRecensione(recensione: string) {
    this.recensioneSubject.next(recensione);
  }


  getRecensioni(): Observable<string[]> {
    return this.recensioni$;
  }
  getNumeroRecensioni(): Observable<number> {
    return this.recensioni$.pipe(map(recensioni => recensioni.length));
  }
}
