import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SavedRecipesService {
  recipes: Array<object> = [];

  constructor() { }

  setRecipes(id:number, title:string) {
    this.recipes.push({id: id, title: title});
  }

  getRecipes() {
    return this.recipes;
  }
}
