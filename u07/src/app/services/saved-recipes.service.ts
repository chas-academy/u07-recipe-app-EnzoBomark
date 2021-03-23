import { not } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SavedRecipesService {
  recipes = [];

  constructor() { }

  setRecipes(id:number, title:string, imageUrl:string) {
    if(!this.recipes.find(recipe => recipe.id == id)) this.recipes.push({id: id, title: title, image: imageUrl});
    else if(this.recipes.length != 0) this.recipes = this.recipes.filter(recipe => recipe.id != id);
  }

  removeRecipe(id:number) {
    if(this.recipes.length != 0) this.recipes = this.recipes.filter(recipe => recipe.id != id);
  }

  getRecipes() {
    return this.recipes;
  }
}
