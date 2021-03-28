import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RecipeInstructionsService {
  //RESIPE INSTRUCTIONS SEARCH//

  recipe;

  constructor(private http: HttpClient) {}

  setRecipe(recipe) {
    this.recipe = recipe;
    localStorage.setItem("recipeValue", JSON.stringify(this.recipe));
  }

  getRecipeValues() {
    return JSON.parse(localStorage.getItem("recipeValue") || "[]");
  }
}
