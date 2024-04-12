import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { provideAuth0 } from '@auth0/auth0-angular';


platformBrowserDynamic().bootstrapModule(AppModule,{
  providers: [
    provideAuth0({
      domain: 'dev-5je8pmo34iqgtwjf.us.auth0.com',
      clientId: 'RA6rlItnKMTorG1l4rixt41mqHFn72Qp',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ]
})
  .catch(err => console.error(err));
