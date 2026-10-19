import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { HeroeCardComponent } from '../../components/heroe-card/heroe-card.component';
import { Heroe } from '../../models/heroe.model';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    HeroeCardComponent, // componente hijo que se usa en el HTML
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
  ],
  templateUrl: './heroes.page.html',
})
export class HeroesPage {
  private readonly heroesService = inject(HeroesService);
  private readonly router = inject(Router);

  protected readonly heroes: Heroe[] = this.heroesService.obtenerTodos();

  /** Se ejecuta cuando la tarjeta hija emite el evento (seleccionado). */
  verDetalle(id: number): void {
    // Navegar desde el código TypeScript
    this.router.navigate(['/heroes', id]);
  }
}
