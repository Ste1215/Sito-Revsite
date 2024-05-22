import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBIFfzsHEY-ECfG-We8Ia57ZdLJ0vuaugk",
  authDomain: "revsite-7732b.firebaseapp.com",
  databaseURL: "https://revsite-7732b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "revsite-7732b",
  storageBucket: "revsite-7732b.appspot.com",
  messagingSenderId: "548196603349",
  appId: "1:548196603349:web:896275500abbc835e6595c"
};


const app = initializeApp(firebaseConfig);

bootstrapApplication(AppComponent, appConfig)

