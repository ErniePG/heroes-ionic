import { Injectable, signal } from '@angular/core';

/** Sesión simulada (sin backend) para poder demostrar el guard. */
@Injectable({ providedIn: 'root' })
export class AutenticacionService {
  private readonly _sesionIniciada = signal(false);

  /** Señal de solo lectura: se puede usar directo en el HTML con sesionIniciada(). */
  readonly sesionIniciada = this._sesionIniciada.asReadonly();

  iniciarSesion(): void {
    this._sesionIniciada.set(true);
  }

  cerrarSesion(): void {
    this._sesionIniciada.set(false);
  }
}
