import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponentComponent } from './app/app-component/app-component.component';

bootstrapApplication(AppComponentComponent, appConfig)
.catch((err) => console.error('Ocorreu um erro:', err.message));

