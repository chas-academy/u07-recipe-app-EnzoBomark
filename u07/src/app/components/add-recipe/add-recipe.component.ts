import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { SavedRecipesService } from 'src/app/services/saved-recipes.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {
  ingredientsNode;
  directionsNode;
  ingredientIdx:number = 2;
  directionIdx:number = 2;

  constructor(
    private savedRecipesService: SavedRecipesService,

  ) { }

  ngOnInit(): void {
    this.ingredientsNode = document.getElementById('ingredients')
    this.directionsNode = document.getElementById('directions')
  }

  addIngredient(){
    if(this.ingredientIdx > 20) return false;
    let file = document.createElement('input');
    file.type = 'text';
    file.classList.add('bg-gray-50', 'w-11/12', 'px-5', 'py-4', 'rounded-md', 'ingredient', 'mb-3');
    file.placeholder = `Ingredient ${this.ingredientIdx}`;
    file.name = `ingredient-${this.ingredientIdx}`;
    this.ingredientsNode.appendChild(file)
    this.ingredientIdx++;
  }

  addDirection(){
    if(this.directionIdx > 10) return false;
    let file = document.createElement('input');
    file.type = 'text';
    file.classList.add('bg-gray-50', 'w-11/12', 'px-5', 'py-4', 'rounded-md', 'direction' , 'mb-3');
    file.placeholder = `Direction ${this.directionIdx}`;
    file.name = `direction-${this.directionIdx}`;
    this.directionsNode.appendChild(file)
    this.directionIdx++;
  }

  getQuery(query){

    const recipe = {
      title: '',
      image: '',
      readyInMinutes: 0,
      vegan: false,
      vegetarian: false,
      glutenFree: false,
      lowFodmap: false,
      ingredients: [],
      directions: [],
    }

    // console.log(query[`ingredient-1`]);

    const ingredients = document.querySelectorAll('.ingredient');
    const directions = document.querySelectorAll('.direction');

    for(let i = 1; i <= ingredients.length; i++){
      recipe.ingredients.push(query[`ingredient-${i}`])
    }

    for(let i = 1; i <= directions.length; i++){
      console.log(query[`direction-${i}`]);
      recipe.directions.push(query[`direction-${i}`])
    }

    recipe.title = query.title;
    recipe.readyInMinutes = query.readyInMinutes;
    recipe.vegan = query.vegan;
    recipe.vegetarian = query.vegetarian;
    recipe.glutenFree = query.glutenFree;
    recipe.lowFodmap = query.lowFodmap;

    // console.log(recipe);
  }
}
