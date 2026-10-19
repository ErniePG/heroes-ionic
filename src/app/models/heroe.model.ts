/** Universos posibles de un héroe (tipo unión: solo acepta estos valores). */
export type Universo = 'Marvel' | 'DC';

/** Datos del lugar y año en que apareció el héroe (objeto anidado). */
export interface Origen {
  ciudad: string;
  anioDebut: number;
}

/** Model principal de la app: describe la forma de un héroe. */
export interface Heroe {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  universo: Universo;
  poderes: string[]; // arreglo de textos
  origen: Origen; // objeto
}
