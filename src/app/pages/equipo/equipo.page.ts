import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

/** Página protegida por autenticacionGuard (ver app.routes.ts). */
@Component({
  selector: 'app-equipo',
  standalone: true,
  imports: [RouterLink, IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar],
  templateUrl: './equipo.page.html',
})
export class EquipoPage {}
