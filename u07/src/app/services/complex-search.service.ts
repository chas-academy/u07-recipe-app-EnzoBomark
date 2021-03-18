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
  // API_URL:string = 'https://api.spoonacular.com/recipes/complexSearch';
  API_URL:string = '';
  API_KEY:string = GlobalConstants.API_KEY;

  //QUERYS//
  NUMBER:string = '?number=10';

  QUERY:string = '&query=';
  queryValue:string = '';
  query:string = `${this.QUERY}${this.queryValue}`;


  //ADD type
  TYPE:string = '&type=';
  typeValue:string = '';
  type:string = `${this.TYPE}${this.typeValue}`;

  //ADD intolerances
  INTOLERANCES:string = '&intolerances=';
  intoleranceValue:string = '';
  intolerances:string = `${this.INTOLERANCES}${this.intoleranceValue}`;

  //ADD cuisine
  CUISINE:string = '&cuisine=';
  cuisineValue:string = '';
  cuisine:string = `${this.CUISINE}${this.cuisineValue}`;

  //ADD diet
  DIET:string = '&diet=';
  dietValue:string = '';
  diet:string = `${this.DIET}${this.dietValue}`;

  constructor(private http: HttpClient) { }

  getComplexSearch():Observable<ComplexSearch[]> {
    return this.http.get<ComplexSearch[]>(`${this.API_URL}${this.NUMBER}${this.query}${this.type}${this.intolerances}${this.cuisine}${this.diet}${this.API_KEY}`);
  }
}
