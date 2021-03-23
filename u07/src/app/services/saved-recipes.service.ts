import { not } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SavedRecipesService {
  recipes: Array<object> = [];

  constructor() { }

  setRecipes(id:number, title:string, imageUrl:string) {
    // Add if recipe does not exist, remove if it exists
    if(!this.recipes.find(recipe => Object.values(recipe)[0] == id)){
      this.recipes.push({id: id, title: title, image: imageUrl});
      console.log('add');
    } else {
      if(this.recipes.length != 0) this.recipes = this.recipes.filter(recipe => Object.values(recipe)[0] != id);
      console.log('remove');
    }
  }

  removeRecipe(id:number) {
    if(this.recipes.length != 0) this.recipes = this.recipes.filter(recipe => Object.values(recipe)[0] != id);
  }

  getRecipes() {
    return this.recipes;
  }
}
