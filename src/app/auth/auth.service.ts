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
  signUp(nome:string,email: string, password: string): Observable<any>{
    return this.http.post(this.signUpURL,{nome: nome, email: email, password: password, returnSecureToken: true})
  }
  signIn(email: string, password: string): Observable<any>{
    return this.http.post(this.signInURL,{email: email, password: password, returnSecureToken: true})
  }

  createUser(nome: string,email: string, id: string, token: string, expirationDate: Date, profileImage: string,profileImageUrl: string){
    this.user = new User(nome || 'default',email,id,token,expirationDate,profileImage,profileImageUrl);
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

  //  private recensioniSubject = new BehaviorSubject<Recensione[]>([]);
  // recensioni$ = this.recensioniSubject.asObservable();
  // aggiungiRecensione(recensione: Recensione) {
  //   const recensioniAttuali = this.recensioniSubject.value;
  //   const nuoveRecensioni = [...recensioniAttuali, recensione];
  //   this.recensioniSubject.next(nuoveRecensioni);
  // }
  // private recensioneSubject = new BehaviorSubject<string>('');
  // recensione$ = this.recensioneSubject.asObservable();
  // inviaRecensione(recensione: string) {
  //   this.recensioneSubject.next(recensione);
  // }
  // getRecensioniByNegozio(negozio: string): Observable<Recensione[]> {
  //   return this.recensioni$.pipe(
  //     map(recensioni => recensioni.filter(recensione => recensione.negozio === negozio))
  //   );
  // }

  // getRecensioni(): Observable<Recensione[]> {
  //   return this.recensioni$;
  // }
  // getNumeroRecensioni(): Observable<number> {
  //   return this.recensioni$.pipe(map(recensioni => recensioni.length));
  // }
  private recensioniSubjects: { [negozio: string]: BehaviorSubject<Recensione[]> } = {};
  private recensioniSubject = new BehaviorSubject<Recensione[]>([]);
  recensioni$ = this.recensioniSubject.asObservable();

  private recensioneSubject = new BehaviorSubject<Recensione>(null);
  recensione$ = this.recensioneSubject.asObservable();
  
  getRecensioniByNegozio(negozio: string): Observable<Recensione[]> {
    if (!this.recensioniSubjects[negozio]) {
      this.recensioniSubjects[negozio] = new BehaviorSubject<Recensione[]>([]);
    }
    return this.recensioniSubjects[negozio].asObservable();
  }
  aggiungiRecensione(recensione: Recensione) {
    const negozio = recensione.negozio;
    if (!this.recensioniSubjects[negozio]) {
      this.recensioniSubjects[negozio] = new BehaviorSubject<Recensione[]>([]);
    }
    const recensioniAttuali = this.recensioniSubjects[negozio].value;
    const nuoveRecensioni = [...recensioniAttuali, recensione];
    this.recensioniSubjects[negozio].next(nuoveRecensioni);
  }

  inviaRecensione(recensione: Recensione) {
    this.recensioneSubject.next(recensione);
  }
  
}
export interface Recensione {
  testo: string;
  negozio: string;
}