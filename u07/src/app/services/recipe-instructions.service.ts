import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import{ GlobalConstants } from '../common/global-constants';


@Injectable({
  providedIn: 'root'
})
export class RecipeInstructionsService {

  //RESIPE INSTRUCTIONS SEARCH//
  API_URL:string = 'https://api.spoonacular.com/recipes/';
  ANALYZEDINSTRUCTIONS:string = '/analyzedInstructions?stepBreakdown=false';
  // API_URL:string = '';
  API_KEY:string = GlobalConstants.API_KEY;

  recipeValue = {id: 0, title: '', image: ''};

  constructor(private http: HttpClient) { }

  setRecipe(recipeId, title, imageUrl) {

    this.recipeValue.id = recipeId;
    this.recipeValue.title = title;
    this.recipeValue.image = imageUrl;
  }

  getRecipeValues() {
    return  this.recipeValue;
  }

  getRecipe() {
    return this.http.get(`${this.API_URL}${this.recipeValue.id}${this.ANALYZEDINSTRUCTIONS}${this.API_KEY}`);
  }
}
