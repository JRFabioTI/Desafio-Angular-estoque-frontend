import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponentComponent } from './app/app-component/app-component.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponentComponent, config);

export default bootstrap;
