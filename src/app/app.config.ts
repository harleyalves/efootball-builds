// src/app/app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { 
  provideFirebaseApp, 
  initializeApp 
} from '@angular/fire/app';
import { 
  provideFirestore, 
  getFirestore 
} from '@angular/fire/firestore';
import { 
  provideStorage, 
  getStorage 
} from '@angular/fire/storage'; // Add this import

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()), // Add this line
  ]
};