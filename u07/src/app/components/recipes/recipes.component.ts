import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/servives/recipe.service';
import { Recipe } from '../../models/Recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipes:Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(recipes => {
      console.log(recipes)
    });
  }
}
