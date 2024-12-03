import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { PageDemoComponent } from './app/page-demo/page-demo.component';

export const routes = [
  { path: '', component: PageDemoComponent },
];

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
