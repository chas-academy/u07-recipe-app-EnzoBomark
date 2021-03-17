import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Recipe } from '../models/Recipe';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesUrl:string = 'https://api.spoonacular.com/recipes/716429/information';
  API_KEY:string = '?apiKey=af8b57deb431483a809745ca9fc5bb82';
  includeNutrition:string = '&includeNutrition=true'

  constructor(private http: HttpClient) { }

  getRecipes():Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.recipesUrl}${this.API_KEY}${this.includeNutrition}`);
  }
}
