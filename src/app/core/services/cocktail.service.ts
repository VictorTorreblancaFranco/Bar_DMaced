import { Injectable } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface';

@Injectable({ providedIn: 'root' })
export class CocktailService {
  private cocktails: Cocktail[] = [
    {
      name: 'Pisco Sour',
      description: 'El cóctel peruano por excelencia con pisco, limón, jarabe de goma y clara de huevo.',
      price: 25,
      image: '/images/cocteles/piscosour.jpeg'
    },
    {
      name: 'Chilcano',
      description: 'Pisco, ginger ale, limón y amargo de angostura. Refrescante y ligero.',
      price: 20,
      image: '/images/cocteles/chilcano.jpg'
    },
    {
      name: 'Chichivi',
      description: 'Bebida afroperuana ancestral hecha con fermento de caña, tradición y cultura en un vaso.',
      price: 18,
      image: '/images/cocteles/chinchivi.jpeg'
    },
    {
      name: 'Mojito',
      description: 'Ron blanco, hierbabuena, azúcar, limón y soda. El rey caribeño de la frescura.',
      price: 22,
      image: '/images/cocteles/mojito.webp'
    },
    {
      name: 'Margarita',
      description: 'Tequila, triple sec y jugo de limón en copa escarchada con sal.',
      price: 24,
      image: '/images/cocteles/margarita.jpeg'
    },
    {
      name: 'Caipirinha',
      description: 'Clásico brasileño con cachaça, lima y azúcar.',
      price: 20,
      image: '/images/cocteles/cahipirinha.jpg'
    },
    {
      name: 'Negroni',
      description: 'Gin, vermouth rojo y Campari, clásico aperitivo italiano.',
      price: 28,
      image: '/images/cocteles/negroni.jpeg'
    },
    {
      name: 'Bloody Mary',
      description: 'Vodka, jugo de tomate, especias y limón.',
      price: 26,
      image: '/images/cocteles/bloddy.jpg'
    },
    {
      name: 'Whisky Sour',
      description: 'Whisky, limón y azúcar, la versión clásica del sour.',
      price: 28,
      image: '/images/cocteles/whisky.jpeg'
    },
    {
      name: 'Piña Colada',
      description: 'Ron, piña y crema de coco. Tropical y cremosa.',
      price: 23,
      image: '/images/cocteles/piña.jpeg'
    }
  ];

  getCocktails(): Cocktail[] {
    return this.cocktails;
  }
}
