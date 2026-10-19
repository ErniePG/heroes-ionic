import { Routes } from '@angular/router';
import { autenticacionGuard } from './guards/autenticacion.guard';

/**
 * Mapa de la aplicación. Cada página se carga de forma perezosa (lazy loading)
 * con loadComponent: su código se descarga solo cuando el usuario entra.
 */
export const routes: Routes = [
  // Ruta inicial: '' redirige a /home
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    title: 'Inicio',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'heroes',
    title: 'Héroes',
    loadComponent: () => import('./pages/heroes/heroes.page').then((m) => m.HeroesPage),
  },
  {
    // :id es un parámetro dinámico, por ejemplo /heroes/3
    path: 'heroes/:id',
    title: 'Detalle del héroe',
    loadComponent: () =>
      import('./pages/heroe-detalle/heroe-detalle.page').then((m) => m.HeroeDetallePage),
  },
  {
    // Ruta protegida: el guard decide si se puede entrar
    path: 'equipo',
    title: 'Zona del equipo',
    canActivate: [autenticacionGuard],
    loadComponent: () => import('./pages/equipo/equipo.page').then((m) => m.EquipoPage),
  },
  {
    // Siempre al final: captura cualquier ruta que no exista (404)
    path: '**',
    title: 'No encontrada',
    loadComponent: () =>
      import('./pages/no-encontrada/no-encontrada.page').then((m) => m.NoEncontradaPage),
  },
];
