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
  }

  removeRecipe(recipeId: number) {
    this.savedRecipesService.removeRecipe(recipeId);
  }

  getInstructions(recipeId: number,title: string, imageUrl: string) {
    this.recipeInstructionsService.setRecipe(recipeId, title, imageUrl);
    this.redirectTo('/recipes/instructions');
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 }
}
