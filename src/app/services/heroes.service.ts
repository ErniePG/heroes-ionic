import { Injectable } from '@angular/core';
import { Heroe } from '../models/heroe.model';

/** Servicio que entrega los datos de los héroes (datos locales de ejemplo). */
@Injectable({ providedIn: 'root' })
export class HeroesService {
  private readonly heroes: Heroe[] = [
    {
      id: 1,
      nombre: 'Spider-Man',
      descripcion: 'Un joven con habilidades arácnidas que protege su ciudad.',
      imagen: 'assets/heroes/spiderman.svg',
      universo: 'Marvel',
      poderes: ['Sentido arácnido', 'Agilidad', 'Trepar paredes'],
      origen: { ciudad: 'Nueva York', anioDebut: 1962 },
    },
    {
      id: 2,
      nombre: 'Iron Man',
      descripcion: 'Un genio inventor que combate el crimen con una armadura tecnológica.',
      imagen: 'assets/heroes/ironman.svg',
      universo: 'Marvel',
      poderes: ['Armadura de alta tecnología', 'Vuelo', 'Inteligencia'],
      origen: { ciudad: 'Malibú', anioDebut: 1963 },
    },
    {
      id: 3,
      nombre: 'Capitán América',
      descripcion: 'Un soldado con fuerza sobrehumana y un gran sentido de la justicia.',
      imagen: 'assets/heroes/capitan-america.svg',
      universo: 'Marvel',
      poderes: ['Fuerza mejorada', 'Liderazgo', 'Escudo indestructible'],
      origen: { ciudad: 'Brooklyn', anioDebut: 1941 },
    },
    {
      id: 4,
      nombre: 'Batman',
      descripcion: 'Un detective sin superpoderes que usa su ingenio para vigilar la noche.',
      imagen: 'assets/heroes/batman.svg',
      universo: 'DC',
      poderes: ['Inteligencia', 'Artes marciales', 'Tecnología'],
      origen: { ciudad: 'Gotham', anioDebut: 1939 },
    },
    {
      id: 5,
      nombre: 'Superman',
      descripcion: 'El héroe más poderoso, llegado de otro planeta para defender la Tierra.',
      imagen: 'assets/heroes/superman.svg',
      universo: 'DC',
      poderes: ['Superfuerza', 'Vuelo', 'Visión de calor'],
      origen: { ciudad: 'Metrópolis', anioDebut: 1938 },
    },
    {
      id: 6,
      nombre: 'Mujer Maravilla',
      descripcion: 'Una guerrera amazona que lucha por la verdad y la paz.',
      imagen: 'assets/heroes/mujer-maravilla.svg',
      universo: 'DC',
      poderes: ['Fuerza amazona', 'Lazo de la verdad', 'Combate'],
      origen: { ciudad: 'Temiscira', anioDebut: 1941 },
    },
  ];

  /** Devuelve la lista completa de héroes. */
  obtenerTodos(): Heroe[] {
    return this.heroes;
  }

  /** Busca un héroe por su id; devuelve undefined si no existe. */
  obtenerPorId(id: number): Heroe | undefined {
    return this.heroes.find((heroe) => heroe.id === id);
  }
}
