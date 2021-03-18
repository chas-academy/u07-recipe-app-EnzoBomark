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
  recipesUrl:string = 'https://api.spoonacular.com/recipes/complexSearch';
  API_KEY:string = GlobalConstants.API_KEY;
  number:string = '?number=10'
  type:string = '&type=dessert'

  //ADD TYPE SEARCH
  //ADD SEARCH OPTIONS

  constructor(private http: HttpClient) { }

  getComplexSearch():Observable<ComplexSearch[]> {
    return this.http.get<ComplexSearch[]>(`${this.recipesUrl}${this.number}${this.type}${this.API_KEY}`);
  }
}
