import { Component, OnInit, Input } from '@angular/core';
import { RecipeInstructionsService } from 'src/app/services/recipe-instructions.service';
import { SavedRecipesService } from 'src/app/services/saved-recipes.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-recipe-instructions',
  templateUrl: './recipe-instructions.component.html',
  styleUrls: ['./recipe-instructions.component.scss']
})
export class RecipeInstructionsComponent implements OnInit {
  step: string = 'Sorry we currently have some trubble receiving this recipe';
  setValue:boolean = true;
  recipeValue;
  ingredients: Array<object> = [];

  constructor(
    private recipeInstructionsService: RecipeInstructionsService,
    private savedRecipesService: SavedRecipesService,
    private _location: Location,
  ) { }

  ngOnInit(): void {
      this.recipeInstructionsService.getRecipe().subscribe(recipes => {
        if(recipes != ''){
          let recipeArray = [];
          Object.values(recipes).forEach(recipe => Object.values(recipe).map(cell => recipeArray.push(cell)));
          this.step = recipeArray[1][0].step;
          this.ingredients = recipeArray[1][0].ingredients;
        }
      });
  }

  ngDoCheck():void {
    this.recipeValue = this.recipeInstructionsService.getRecipeValues();
    this.savedRecipesService.getRecipes();
    if(this.savedRecipesService.getRecipes().find(recipe => Object.values(recipe)[0] == this.recipeValue.id)) this.setValue = false;
    else this.setValue = true;
  }

  backClicked() {
    this._location.back();
  }

  setRecipes(id:number, title:string , imageUrl: string){
    this.savedRecipesService.setRecipes(id, title, imageUrl);
  }
}
