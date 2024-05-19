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

