import { Component } from '@angular/core';
import { Router  } from '@angular/router';
import { ComplexSearchService } from 'src/app/services/complex-search.service';
import { SavedRecipesService } from 'src/app/services/saved-recipes.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'Cookalicious';
  savedRecipes:number;

  constructor(
    private router:Router,
    private complexSearchService:ComplexSearchService,
    private savedRecipesService:SavedRecipesService
  ) { }

  ngDoCheck() {
    this.savedRecipes = this.savedRecipesService.getRecipes().length;
  }

  getQuery(query: object): void{
    //Send query to complex search component who will send it to complex-search-service
    this.complexSearchService.setComplexSearch(query);

    this.redirectTo('/recipes');
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 }
}
