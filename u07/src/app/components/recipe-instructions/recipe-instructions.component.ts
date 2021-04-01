import { Component, OnInit, Input } from '@angular/core';
import { RecipeInstructionsService } from 'src/app/services/recipe-instructions.service';
import { SavedRecipesService } from 'src/app/services/saved-recipes.service';
@Component({
  selector: 'app-recipe-instructions',
  templateUrl: './recipe-instructions.component.html',
  styleUrls: ['./recipe-instructions.component.scss']
})
export class RecipeInstructionsComponent implements OnInit {
  step: string = 'Sorry we currently have some trubble receiving this recipe';
  setValue:boolean = true;
  recipe;

  constructor(
    private recipeInstructionsService: RecipeInstructionsService,
    private savedRecipesService: SavedRecipesService,
  ) { }

  ngOnInit(): void {
  }

  ngDoCheck():void {
    this.recipe = this.recipeInstructionsService.getRecipeValues();
    console.log(this.recipe);
    this.savedRecipesService.getRecipes();
    if(this.savedRecipesService.getRecipes().find(recipe => recipe.id == this.recipe.id)) this.setValue = false;
    else this.setValue = true;
  }

  setRecipes(recipe){
    this.savedRecipesService.setRecipes(recipe);
  }
}
