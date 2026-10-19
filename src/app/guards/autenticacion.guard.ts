import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AutenticacionService } from '../services/autenticacion.service';

/**
 * Guard funcional: deja entrar a la ruta solo si hay sesión iniciada.
 * Si no la hay, redirige al inicio.
 */
export const autenticacionGuard: CanActivateFn = () => {
  const autenticacion = inject(AutenticacionService);
  const router = inject(Router);

  if (autenticacion.sesionIniciada()) {
    return true;
  }
  return router.createUrlTree(['/home']);
};
