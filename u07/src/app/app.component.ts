import { Component } from '@angular/core';
import { Router  } from '@angular/router';
import { ComplexSearchService } from 'src/app/services/complex-search.service';
import { SavedRecipesService } from 'src/app/services/saved-recipes.service'
import{ GlobalConstants } from 'src/app/common/global-constants';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = '';
  savedRecipes:number;
  backBtnActive: boolean = false;

  type = GlobalConstants.TYPE;
  intolerances = GlobalConstants.INTOLERANCES;
  cuisine = GlobalConstants.CUISINE;
  diet = GlobalConstants.DIET;

  constructor(
    private router:Router,
    private complexSearchService:ComplexSearchService,
    private savedRecipesService:SavedRecipesService,
    private _location: Location,
  ) { }

  ngDoCheck() {
    if(location.pathname != '/') {
      this.title = ''
      this.backBtnActive = true;
    } else {
      this.title = 'What would you like to Cook?'
      this.backBtnActive = false;
    };
    this.savedRecipes = this.savedRecipesService.getRecipes().length;
  }

  backClicked() {
     if(location.pathname != '/') return this._location.back();
  }

  showFilter() {
    if(document.querySelector('.filters').classList.contains('active')) {
      document.querySelector('.filters').classList.remove('active');
    } else {
      document.querySelector('.filters').classList.add('active');
    }
  }

  getQuery(query: object): void{
    console.log(query);
    this.complexSearchService.setComplexSearch(query);
    this.redirectTo('/recipes');
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 }
}
