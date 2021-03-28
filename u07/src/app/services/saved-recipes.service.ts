import { not } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SavedRecipesService {
  recipes = [];

  constructor() { }

  setRecipes(recipe) {
    this.recipes = JSON.parse(localStorage.getItem("savedRecipes") || "[]");
    if(!this.recipes.find(recipes => recipes.id == recipe.id)) this.recipes.push(recipe);
    else if(this.recipes.length != 0) this.recipes = this.recipes.filter(recipes => recipes.id != recipe.id);
    localStorage.setItem('savedRecipes', JSON.stringify(this.recipes));
  }

  removeRecipe(id:number) {
    this.recipes = JSON.parse(localStorage.getItem("savedRecipes") || "[]");
    if(this.recipes.length != 0) this.recipes = this.recipes.filter(recipes => recipes.id != id);
    localStorage.setItem('savedRecipes', JSON.stringify(this.recipes));
  }

  getRecipes() {
    return JSON.parse(localStorage.getItem("savedRecipes") || "[]");
  }
}
