# Héroes Ionic

Proyecto base del **Equipo 3** para la exposición *Demostración de conocimiento de Angular + Ionic*.
Es una app pequeña de superhéroes pensada para que cada integrante explique su tema sobre el mismo código.

- Angular 20 (componentes standalone, sin NgModules)
- Ionic 8
- TypeScript en modo estricto
- Sin backend: los datos viven en un servicio local

---

## 1. Cómo ejecutar el proyecto

**Requisitos:** [Node.js](https://nodejs.org/) 20.19 o superior (o 22.12+) y Git.

```bash
git clone <URL-DEL-REPOSITORIO>
cd heroes-ionic
npm install
npm start
```

Abre <http://localhost:4200>. Para verla como móvil, abre las herramientas del navegador (`F12`) y activa la vista de dispositivo.

Otros comandos:

| Comando | Qué hace |
| --- | --- |
| `npm start` | Servidor de desarrollo con recarga automática |
| `npm run build` | Compila para producción en `dist/` |

---

## 2. Estructura

```
src/app/
├── app.component.ts          Raíz de la app (ion-app + ion-router-outlet)
├── app.config.ts             Configuración global (Ionic + enrutador)
├── app.routes.ts             Mapa de rutas  ← Tema 4 y 5
├── models/
│   └── heroe.model.ts        Interfaces Heroe y Origen  ← Tema 3
├── services/
│   ├── heroes.service.ts     Datos de los héroes
│   └── autenticacion.service.ts  Sesión simulada
├── guards/
│   └── autenticacion.guard.ts    Protege la ruta /equipo  ← Tema 2
├── components/
│   └── heroe-card/           Componente hijo con ion-card  ← Temas 7 y 8
└── pages/
    ├── home/                 Inicio (routerLink, @if / @else)
    ├── heroes/               Lista de héroes (@for, componente hijo)
    ├── heroe-detalle/        Detalle (@if, @switch, ng-template, objetos y arreglos)
    ├── equipo/               Página protegida por el guard
    └── no-encontrada/        Página 404
```

Convención de nombres: `*.page.ts` (páginas), `*.component.ts` (componentes reutilizables), `*.service.ts`, `*.guard.ts` y `*.model.ts`.

---

## 3. Dónde está cada tema

| # | Tema | Dónde verlo |
| --- | --- | --- |
| 1 | Componentes, servicios y models | `components/`, `services/`, `models/` |
| 2 | Guards | `guards/autenticacion.guard.ts` y `canActivate` en `app.routes.ts` |
| 3 | Models | `models/heroe.model.ts` (interface, tipo unión, objeto anidado, arreglo) |
| 4 | Uso práctico de `app.routes` | `app.routes.ts` (redirect, lazy loading, `:id`, guard, 404, `title`) |
| 5 | Navegar con rutas y `routerLink` | `home.page.html` (`routerLink`) y `heroes.page.ts` (`router.navigate`) |
| 6 | `@for`, `@if`, `ng-template` y datos | `heroe-detalle.page.html` y `heroes.page.html` |
| 7 | Llamar de un componente a otro | `heroes.page.html` usa `<app-heroe-card>` con `input()` y `output()` |
| 8 | Ejemplo de `ion-card` | `heroe-card.component.html` (imagen redondeada, nombre, descripción) |
| 9 | Git y GitHub | Secciones 4 y 5 de este README |
| 10 | Trabajo en equipo con Ionic + Angular | Sección 5 de este README |

### Rutas de la app

| Ruta | Página | Nota |
| --- | --- | --- |
| `/` | Redirige a `/home` | `pathMatch: 'full'` |
| `/home` | Inicio | Botón para iniciar y cerrar sesión |
| `/heroes` | Lista de héroes | 6 `ion-card` |
| `/heroes/:id` | Detalle | Ejemplo: `/heroes/4`; con un id que no existe muestra un aviso |
| `/equipo` | Zona del equipo | Solo entra con la sesión iniciada |
| cualquier otra | 404 | Ruta comodín `**` |

Para probar el guard: entra a `/equipo` sin sesión (te devuelve a `/home`), inicia sesión desde el inicio y vuelve a intentarlo.

---

## 4. Comandos de Git más usados

```bash
git status                       # ver qué archivos cambiaron
git pull                         # traer los cambios del remoto
git checkout -b feature/tema-3   # crear una rama nueva y cambiarse a ella
git checkout main                # volver a main
git add .                        # preparar todos los cambios
git commit -m "feat: agrega tema 3"
git push -u origin feature/tema-3   # subir la rama por primera vez
git merge main                   # traer main a tu rama para ponerla al día
git branch                       # ver ramas locales
```

> En versiones nuevas de Git también puedes usar `git switch` en lugar de `git checkout`.

---

## 5. Cómo trabajamos en equipo

La rama `main` está **protegida**: nadie sube directo a ella. Cada persona trabaja en su propia rama y entra a `main` mediante un Pull Request.

### Flujo para cada integrante

1. Clonar el repositorio (solo la primera vez) y ejecutar `npm install`.
2. Actualizar `main` antes de empezar:
   ```bash
   git checkout main
   git pull
   ```
3. Crear tu rama, con el número de tu tema:
   ```bash
   git checkout -b feature/tema-5-routerlink
   ```
4. Hacer los cambios y comprobar que compila (`npm run build`).
5. Guardar y subir:
   ```bash
   git add .
   git commit -m "feat: ejemplo de routerLink"
   git push -u origin feature/tema-5-routerlink
   ```
6. En GitHub, abrir un **Pull Request** hacia `main`, pedir revisión a un compañero y hacer **Merge** cuando lo aprueben.
7. Volver a `main` y hacer `git pull` para tener todo al día.

### Si hay conflictos

Si GitHub avisa de conflictos, ponte al día desde tu rama:

```bash
git checkout feature/tema-5-routerlink
git merge main
# resolver los archivos marcados con <<<<<<<, luego:
git add .
git commit
git push
```

Para evitarlos: cada quien edita **sus** archivos, hagan commits pequeños y hagan `git pull` seguido.

### Proteger `main` en GitHub (lo hace quien creó el repositorio)

1. Ir a **Settings → Branches → Add branch protection rule** (o **Rules → Rulesets**).
2. En *Branch name pattern* escribir `main`.
3. Activar **Require a pull request before merging** (y, si quieren, **Require approvals**).
4. Guardar.

---

## 6. Crear piezas nuevas con el CLI

```bash
npx ng generate component components/mi-componente --type=component
npx ng generate component pages/mi-pagina --type=page
npx ng generate service services/mi --type=service
npx ng generate guard guards/mi --functional       # crea guards/mi-guard.ts
npx ng generate interface models/mi model          # crea models/mi.model.ts
```

> El guard se genera como `mi-guard.ts`; renómbralo a `mi.guard.ts` para seguir la convención del proyecto.

Si agregas una página nueva, regístrala en `app.routes.ts`.

---

## 7. Imágenes de los héroes

Las imágenes están en `public/assets/heroes/` y son emblemas genéricos (iniciales sobre un fondo de color).
Para usar otras imágenes, copia los archivos a esa carpeta y cambia el campo `imagen` en `services/heroes.service.ts`. Si las imágenes tienen derechos de autor, úsenlas solo para la exposición.
