import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe';
import { RecipeInstructionsService } from 'src/app/services/recipe-instructions.service';
import { SavedRecipesService } from 'src/app/services/saved-recipes.service';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  setValue:boolean = true;

  constructor(
    private router:Router,
    private recipeInstructionsService:RecipeInstructionsService,
    private savedRecipesService: SavedRecipesService
  ) { }

  ngOnInit(): void {
  }

  ngDoCheck():void {
    if(this.savedRecipesService.getRecipes().find(recipe => recipe.id == this.recipe.id)) this.setValue = false;
    else this.setValue = true;
  }

  getInstructions() {
    this.recipeInstructionsService.setRecipe(this.recipe);
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
