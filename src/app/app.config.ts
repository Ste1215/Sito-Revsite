import { ApplicationConfig } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';
import{FormsModule} from '@angular/forms';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch } from '@angular/common/http';
 import { initializeApp } from "firebase/app";
 import firebase from 'firebase/compat';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
     provideClientHydration(), 
    provideAnimations(),
    provideHttpClient(withFetch()),
    FormsModule,
    provideAnimations(),
  ],
};
const firebaseConfig = {
  apiKey: "AIzaSyBIFfzsHEY-ECfG-We8Ia57ZdLJ0vuaugk",
  authDomain: "revsite-7732b.firebaseapp.com",
  databaseURL: "https://revsite-7732b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "revsite-7732b",
  storageBucket: "revsite-7732b.appspot.com",
  messagingSenderId: "548196603349",
  appId: "1:548196603349:web:b2892ea42e5e0372e6595c"
};
const app = initializeApp(firebaseConfig);
