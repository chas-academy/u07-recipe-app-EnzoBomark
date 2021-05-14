import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Watchlist } from 'src/app/shared/interfaces/watchlist'

@Injectable({
  providedIn: 'root'
})
export class RecipeHandlerService {

  recipe: any;
  
  constructor(private http: HttpClient) { }

  getLists(): Observable<Watchlist[]> {
    return this.http.get<Watchlist[]>('https://u08-recipe.herokuapp.com/api/list');
  }

  setList(list: any) {
    return this.http.post('https://u08-recipe.herokuapp.com/api/list', list);
  }

  showList(name: string) {
    return this.http.get('https://u08-recipe.herokuapp.com/api/list/' + name);
  }

  deleteList(id: number) {
    return this.http.delete('https://u08-recipe.herokuapp.com/api/list/' + id);
  }

  setRecipe(recipe: any) {
    return this.http.post('https://u08-recipe.herokuapp.com/api/recipe', recipe);
  }

  deleteRecipe(id: number) {
    return this.http.delete('https://u08-recipe.herokuapp.com/api/recipe/' + id);
  }
}
