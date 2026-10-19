import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logInOutline, logOutOutline } from 'ionicons/icons';
import { AutenticacionService } from '../../services/autenticacion.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, IonButton, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export class HomePage {
  // inject() es la forma moderna de pedir un servicio
  protected readonly autenticacion = inject(AutenticacionService);

  constructor() {
    addIcons({ logInOutline, logOutOutline });
  }

  iniciarSesion(): void {
    this.autenticacion.iniciarSesion();
  }

  cerrarSesion(): void {
    this.autenticacion.cerrarSesion();
  }
}
