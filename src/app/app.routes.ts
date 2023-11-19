import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    //esto funcionara porque el dashboar component es una clase que exporta por defecto
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [
      //algunas importatas por defecto y otras no para recordar como se puede hacer...
      { path: 'change-detection', title: 'Change detection', loadComponent: () => import('./dashboard/pages/change-detection/change-detection.component') },
      { path: 'control-flow', title: 'Control flow', loadComponent: () => import('./dashboard/pages/control-flow/control-flow.component').then(c => c.ControlFlowComponent) },
      { path: 'defer-options', title: 'Defer options', loadComponent: () => import('./dashboard/pages/defer-options/defer-options.component') },
      { path: 'defer-views', title: 'Defer views', loadComponent: () => import('./dashboard/pages/defer-views/defer-views.component').then(c => c.DeferViewsComponent) },
      { path: 'user/:id', title: 'User', loadComponent: () => import('./dashboard/pages/user/user.component') },
      { path: 'users-list', title: 'User list', loadComponent: () => import('./dashboard/pages/users/users.component').then(c => c.UsersComponent) },
      { path: 'view-transition', title: 'View transition', loadComponent: () => import('./dashboard/pages/view-transition/view-transition.component') },
      { path: '', redirectTo: 'control-flow', pathMatch: 'full' },
    ]
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }

];
