import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
  ]
};
export const config = mergeApplicationConfig(appConfig, serverConfig);
