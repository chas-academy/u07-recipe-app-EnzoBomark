import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Recipe } from '../models/Recipe';
import { Observable } from 'rxjs';
import{ GlobalConstants } from '../common/global-constants';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  //RANDOM LIST
  recipesUrl:string = 'https://api.spoonacular.com/recipes/random';
  API_KEY:string = GlobalConstants.API_KEY;
  number:string = '?number=10'
  includeNutrition:string = '&includeNutrition=true'

  constructor(private http: HttpClient) { }

  getRecipes():Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.recipesUrl}${this.number}${this.includeNutrition}${this.API_KEY}`);
  }
}
