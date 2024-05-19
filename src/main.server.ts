import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import 'localstorage-polyfill';
import { initializeApp } from "firebase/app";
global['localStorage'] = localStorage;
const bootstrap = () => bootstrapApplication(AppComponent, config);
export default bootstrap;

const firebaseConfig = {
    apiKey: "AIzaSyBIFfzsHEY-ECfG-We8Ia57ZdLJ0vuaugk",
    authDomain: "revsite-7732b.firebaseapp.com",
    databaseURL: "https://revsite-7732b-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "revsite-7732b",
    storageBucket: "revsite-7732b.appspot.com",
    messagingSenderId: "548196603349",
    appId: "1:548196603349:web:bad76e30e8f097dbe6595c"
  };
  const app = initializeApp(firebaseConfig);
