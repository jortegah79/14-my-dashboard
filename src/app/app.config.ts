import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withViewTransitions({
    skipInitialTransition: true,
    onViewTransitionCreated(transitionInfo) {
      //console.log(transitionInfo)
    }
  })),
  //ahora se añaden aqui los modulos que son importados a nivel lgobsal
  importProvidersFrom(
    HttpClientModule
  )

  ]
};
