import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../models/cocktail.model';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css'],
})
export class CocktailListComponent implements OnInit {
  cocktails!: any[];

  ngOnInit(): void {
    this.cocktailService.getCocktails().subscribe((cocktailsFromJsonFile) => {
      this.cocktails = (cocktailsFromJsonFile.results);
    });
    console.log(this.cocktails);
  }

  constructor(
    public cocktailsList: CocktailService,
    public cocktailService: CocktailService
  ) {}
}
