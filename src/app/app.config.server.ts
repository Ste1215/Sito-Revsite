import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { initializeApp } from 'firebase/app';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    
  ]
  
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
export const config = mergeApplicationConfig(appConfig, serverConfig);
