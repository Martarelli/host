import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ClientsComponent } from './pages/clients/clients.component';

export const routes: Routes = [
  {
    path: 'clients',
    component: ClientsComponent,
  },

  {
    path: '',
    component: WelcomeComponent,
  },
];
