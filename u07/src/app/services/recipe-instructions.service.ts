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

  recipeId:number = null;

  constructor(private http: HttpClient) { }

  getComplexSearch(recipeId) {
    this.recipeId = recipeId;
    return this.http.get(`${this.API_URL}${this.recipeId}${this.ANALYZEDINSTRUCTIONS}${this.API_KEY}`);
  }
}
