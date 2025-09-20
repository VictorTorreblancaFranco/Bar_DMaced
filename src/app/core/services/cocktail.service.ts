import { Injectable } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  private cocktails: Cocktail[] = [
    {
      id: 1,
      name: 'Mojito Dmaced',
      description: 'Refrescante mezcla de ron, menta y limón.',
      price: 25,
      image: '/assets/images/mojito.jpg'
    },
    {
      id: 2,
      name: 'Piña Colada Dmaced',
      description: 'Clásico tropical con piña y coco.',
      price: 28,
      image: '/assets/images/pina-colada.jpg'
    },
    {
      id: 3,
      name: 'Whisky Sour Dmaced',
      description: 'Whisky con un toque cítrico.',
      price: 30,
      image: '/assets/images/whisky-sour.jpg'
    }
  ];

  getCocktails(): Cocktail[] {
    return this.cocktails;
  }
}
