import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../models/cocktail.models';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css'],
})
export class CocktailListComponent {
  cocktails:any
  
  ngOnInit():void {
  this.getCocktails()
}
  constructor(public cocktailsList: CocktailService) {
  }
  getCocktails(){
    this.cocktails=this.cocktailsList
    console.log(this.cocktails)
  }
}
