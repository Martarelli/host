import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => loadRemoteModule('mfe1', './HomeComponent')
      .then((m) => m.HomeComponent),
  }
];
