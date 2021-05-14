import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class ApiHandlerService {
    //RESIPE SEARCH//
    SEARCH_URL:string = 'https://api.spoonacular.com/recipes/complexSearch?number=10';
    RANDOM_URL:string = 'https://api.spoonacular.com/recipes/random?number=10';
    FIND_URL:string = 'https://api.spoonacular.com/recipes/';
    API_KEY:string = `&apiKey=${environment.API_KEY}`;

    constructor(private http: HttpClient) { }
 
    getComplexSearch(query):Observable<any> {
      let params = new HttpParams({fromObject:query})
      return this.http.get<any>(`${this.SEARCH_URL}${this.API_KEY}&addRecipeInformation=true`, {params: params})
      .pipe(
        map(response => response.results),
      );
    }

    getRecipes(): Observable<any> {
      return this.http.get<any>(`${this.RANDOM_URL}${this.API_KEY}`)
      .pipe(
        map(response => response.recipes),
      );
    }

    getRecipe(id): Observable<any> {
      return this.http.get<any>(`${this.FIND_URL}${id}/information?${this.API_KEY}`)
      .pipe(
        map(response => response),
      );
    }
}
