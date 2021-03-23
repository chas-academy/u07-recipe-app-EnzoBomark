import { Component, OnInit } from '@angular/core';
import { SavedRecipesService } from 'src/app/services/saved-recipes.service'
import { Router  } from '@angular/router';

@Component({
  selector: 'app-saved-recipes',
  templateUrl: './saved-recipes.component.html',
  styleUrls: ['./saved-recipes.component.scss']
})
export class SavedRecipesComponent implements OnInit {
  recipes: Array<object> = [];

  constructor(private savedRecipesService: SavedRecipesService, private router:Router) { }

  ngOnInit(): void {
  }

  ngDoCheck():void {
    this.recipes = this.savedRecipesService.getRecipes();
  }

  removeRecipe(recipeId: number) {
    this.savedRecipesService.removeRecipe(recipeId);
  }

  getInstructions(recipeId: number,title: string, imageUrl: string) {
    this.router.navigate(['/recipes/instructions'], {queryParams: {id: recipeId, title: title, image: imageUrl} });
  }
}
