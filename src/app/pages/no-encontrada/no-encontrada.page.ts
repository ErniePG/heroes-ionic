import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

/** Se muestra cuando la URL no coincide con ninguna ruta (path '**'). */
@Component({
  selector: 'app-no-encontrada',
  standalone: true,
  imports: [RouterLink, IonButton, IonContent, IonHeader, IonTitle, IonToolbar],
  templateUrl: './no-encontrada.page.html',
})
export class NoEncontradaPage {}
