import { Routes } from '@angular/router';
import { Teste1Component } from './pages/teste-1/teste-1.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'teste1'
  },
  {
    path: 'teste1',
    loadComponent: () => import('./pages/teste-1/teste-1.component').then(c => c.Teste1Component)
  },
  {
    path: 'teste2',
    loadComponent: () => import('./pages/teste-2/teste-2.component').then(c => c.Teste2Component)
  },
  {
    path: 'teste3',
    loadComponent: () => import('./pages/teste-3/teste-3.component').then(c => c.Teste3Component)
  },
  {
    path: 'teste4',
    loadComponent: () => import('./pages/teste-4/teste-4.component').then(c => c.Teste4Component)
  },
  {
    path: 'teste5',
    loadComponent: () => import('./pages/teste-5/teste-5.component').then(c => c.Teste5Component)
  }
];
