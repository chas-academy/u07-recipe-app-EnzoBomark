import { Component, OnInit } from '@angular/core';
import { SavedRecipesService } from 'src/app/services/saved-recipes.service'
import { RecipeInstructionsService } from 'src/app/services/recipe-instructions.service';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-saved-recipes',
  templateUrl: './saved-recipes.component.html',
  styleUrls: ['./saved-recipes.component.scss']
})
export class SavedRecipesComponent implements OnInit {
  recipes: Array<object> = [];

  constructor(
    private router:Router,
    private savedRecipesService: SavedRecipesService,
    private recipeInstructionsService:RecipeInstructionsService
  ) { }

  ngOnInit(): void {
  }

  ngDoCheck():void {
    this.recipes = this.savedRecipesService.getRecipes();
    console.log(this.recipes);
  }
}
