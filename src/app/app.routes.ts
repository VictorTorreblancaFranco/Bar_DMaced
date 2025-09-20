import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { About } from './features/about/about';
import { Cocktails } from './features/cocktails/cocktails';

export const routes: Routes = [
  { path: '', component: Home, title: 'Dmaced | Inicio' },
  { path: 'nosotros', component: About, title: 'Dmaced | Nosotros' },
  { path: 'cocteles', component: Cocktails, title: 'Dmaced | Cocteles' },
  { path: '**', redirectTo: '' }
];
