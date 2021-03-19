import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ComplexSearch } from '../models/ComplexSearch';
import { Observable } from 'rxjs';
import{ GlobalConstants } from '../common/global-constants';

@Injectable({
  providedIn: 'root'
})

export class ComplexSearchService {
  //RESIPE SEARCH//
  API_URL:string = 'https://api.spoonacular.com/recipes/complexSearch';
  // API_URL:string = '';
  API_KEY:string = GlobalConstants.API_KEY;

  includeNutrition:string = '&includeNutrition=true'

  //QUERYS//
  NUMBER:string = '?number=10';

  QUERY:string = '&query=';
  queryValue:string = '';

  //ADD type
  TYPE:string = '&type=';
  typeValue:string = '';

  //ADD intolerances
  INTOLERANCES:string = '&intolerances=';
  intoleranceValue:string = '';

  //ADD cuisine
  CUISINE:string = '&cuisine=';
  cuisineValue:string = '';

  //ADD diet
  DIET:string = '&diet=';
  dietValue:string = '';

  constructor(private http: HttpClient) { }

  getComplexSearch(query):Observable<ComplexSearch[]> {
    this.queryValue = query.query;
    this.typeValue = query.type;
    this.intoleranceValue = query.intolerances;
    this.cuisineValue = query.cuisine;
    this.dietValue = query.diet;

    return this.http.get<ComplexSearch[]>(`${this.API_URL}${this.NUMBER}${this.QUERY}${this.queryValue}${this.TYPE}${this.typeValue}${this.INTOLERANCES}${this.intoleranceValue}${this.CUISINE}${this.cuisineValue}${this.DIET}${this.dietValue}${this.includeNutrition}${this.API_KEY}`);
  }
}
