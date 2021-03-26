import { not } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SavedRecipesService {
  recipes = [];

  constructor() { }

  setRecipes(id:number, title:string, imageUrl:string) {
    this.recipes = JSON.parse(localStorage.getItem("savedRecipes") || "[]");
    if(!this.recipes.find(recipe => recipe.id == id)) this.recipes.push({id: id, title: title, image: imageUrl});
    else if(this.recipes.length != 0) this.recipes = this.recipes.filter(recipe => recipe.id != id);
    localStorage.setItem('savedRecipes', JSON.stringify(this.recipes));
  }

  removeRecipe(id:number) {
    this.recipes = JSON.parse(localStorage.getItem("savedRecipes") || "[]");
    if(this.recipes.length != 0) this.recipes = this.recipes.filter(recipe => recipe.id != id);
    localStorage.setItem('savedRecipes', JSON.stringify(this.recipes));
  }

  getRecipes() {
    return JSON.parse(localStorage.getItem("savedRecipes") || "[]");
  }
}
