import { NgTemplateOutlet } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonChip,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { Heroe } from '../../models/heroe.model';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe-detalle',
  standalone: true,
  imports: [
    NgTemplateOutlet,
    RouterLink,
    IonBackButton,
    IonButton,
    IonButtons,
    IonChip,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonTitle,
    IonToolbar,
  ],
  templateUrl: './heroe-detalle.page.html',
  styleUrl: './heroe-detalle.page.scss',
})
export class HeroeDetallePage implements OnInit {
  private readonly ruta = inject(ActivatedRoute);
  private readonly heroesService = inject(HeroesService);

  protected heroe?: Heroe;

  ngOnInit(): void {
    // Lee el parámetro :id de la URL (/heroes/3) y busca el héroe
    const id = Number(this.ruta.snapshot.paramMap.get('id'));
    this.heroe = this.heroesService.obtenerPorId(id);
  }
}
