import { Component } from '@angular/core';
import { CocktailService } from '../../core/services/cocktail.service';
import { Cocktail } from '../../core/interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktails',
  standalone: true,
  templateUrl: './cocktails.html',
  styleUrl: './cocktails.scss',
})
export class Cocktails {
  cocktails: Cocktail[];

  constructor(private cocktailService: CocktailService) {
    this.cocktails = this.cocktailService.getCocktails();
  }
}
