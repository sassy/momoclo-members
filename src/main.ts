import 'core-js/shim';
import 'zone.js/dist/zone';
import 'clarity-ui/clarity-ui.min.css';

import { platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
