import { Component, input, output } from '@angular/core';
import {
  IonAvatar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from '@ionic/angular/standalone';
import { Heroe } from '../../models/heroe.model';

/** Componente hijo: muestra un héroe en una ion-card. Lo usa la página de héroes. */
@Component({
  selector: 'app-heroe-card',
  standalone: true,
  imports: [IonAvatar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle],
  templateUrl: './heroe-card.component.html',
  styleUrl: './heroe-card.component.scss',
})
export class HeroeCardComponent {
  /** Dato que recibe del padre: <app-heroe-card [heroe]="heroe" /> */
  readonly heroe = input.required<Heroe>();

  /** Evento que le avisa al padre: <app-heroe-card (seleccionado)="verDetalle($event)" /> */
  readonly seleccionado = output<number>();

  seleccionar(): void {
    this.seleccionado.emit(this.heroe().id);
  }
}
