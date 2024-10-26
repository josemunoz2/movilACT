import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// Inicializar Firebase Analytics (si es necesario)
const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);
