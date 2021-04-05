import { Component, OnInit, Input } from '@angular/core';
import { ComplexSearch } from 'src/app/models/ComplexSearch';
import { RecipeInstructionsService } from 'src/app/services/recipe-instructions.service';
import { SavedRecipesService } from 'src/app/services/saved-recipes.service';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-complex-search-item',
  templateUrl: './complex-search-item.component.html',
  styleUrls: ['./complex-search-item.component.scss']
})
export class ComplexSearchItemComponent implements OnInit {
  @Input() complexSearch: ComplexSearch;
  setValue:boolean = true;

  constructor(
    private router:Router,
    private recipeInstructionsService:RecipeInstructionsService,
    private savedRecipesService: SavedRecipesService
  ) { }

  ngOnInit(): void {
    // console.log(this.complexSearch);
  }

  ngDoCheck():void {
   if(this.savedRecipesService.getRecipes().find(recipe => recipe.id == this.complexSearch.id)) this.setValue = false;
   else this.setValue = true;
 }

  getInstructions() {
    this.recipeInstructionsService.setRecipe(this.complexSearch);
    this.redirectTo('/recipes/instructions');
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 }

  setRecipes(recipe){
    this.savedRecipesService.setRecipes(recipe);
  }
}
