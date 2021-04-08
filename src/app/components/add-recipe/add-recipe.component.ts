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
  url = '../../assets/icons/noimage.svg';
  ingredientIdx:number = 2;
  directionIdx:number = 2;

  constructor(
    private savedRecipesService: SavedRecipesService,

  ) { }

  ngOnInit(): void {
    this.ingredientsNode = document.getElementById('ingredients')
    this.directionsNode = document.getElementById('directions')
  }

  selectFile(event) {
    if(event.target.files){
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      }
    }
  }

  addIngredient(){
    if(this.ingredientIdx > 20) return false;
    let ing = document.createElement('input');
    ing.type = 'text';
    ing.classList.add('bg-gray-50', 'w-8/12', 'px-5', 'py-4', 'rounded-md', 'ingredient', 'mb-3', 'light-shadow', 'font-roboto', 'mr-5', 'focus:outline-none');
    ing.placeholder = `Ingredient ${this.ingredientIdx}`;

    let amo = document.createElement('input');
    amo.type = 'text';
    amo.classList.add('bg-gray-50', 'w-4/12', 'px-5', 'py-4', 'rounded-md', 'amount', 'mb-3', 'light-shadow', 'font-roboto', 'focus:outline-none');
    amo.placeholder = `Amount`;

    let div = document.createElement('div');
    div.classList.add('flex', 'justify-between', 'w-11/12');

    div.appendChild(ing);
    div.appendChild(amo);

    this.ingredientsNode.appendChild(div)
    this.ingredientIdx++;
  }

  removeIngredient(){
    if(this.ingredientsNode.children.length <= 1) return false
    this.ingredientsNode.removeChild(this.ingredientsNode.lastElementChild);
    this.ingredientIdx--;
  }

  addDirection(){
    if(this.directionIdx > 10) return false;
    let file = document.createElement('input');
    file.type = 'text';
    file.classList.add('bg-gray-50', 'w-11/12', 'px-5', 'py-4', 'rounded-md', 'direction', 'mb-3', 'light-shadow', 'font-roboto', 'focus:outline-none');
    file.placeholder = `Direction ${this.directionIdx}`;
    this.directionsNode.appendChild(file)
    this.directionIdx++;
  }

  removeDirection(){
    if(this.directionsNode.children.length <= 1) return false
    this.directionsNode.removeChild(this.directionsNode.lastElementChild);
    this.directionIdx--;
  }

  getQuery(query){
    const recipe = {
      id: '',
      title: '',
      image: '',
      readyInMinutes: 0,
      vegan: false,
      vegetarian: false,
      glutenFree: false,
      lowFodmap: false,
      ingredients: [],
      amount: [],
      directions: [],
    }

    const ingredients = document.querySelectorAll('.ingredient');
    const amounts = document.querySelectorAll('.amount');
    const directions = document.querySelectorAll('.direction');

    let ingredientArray = [].map.call(ingredients, el => el.value);
    let amountArray = [].map.call(amounts, el => el.value);
    let newObj = []
    for(let i = 0; i < ingredients.length; i++){
      newObj.push({name: ingredientArray[i], amount: amountArray[i]});
    }

    recipe.directions = [].map.call(directions, el => el.value)
    recipe.ingredients = newObj;
    recipe.title = query.title;
    recipe.id = query.title;
    recipe.image = this.url;
    recipe.readyInMinutes = query.readyInMinutes;
    recipe.vegan = query.vegan;
    recipe.vegetarian = query.vegetarian;
    recipe.glutenFree = query.glutenFree;
    recipe.lowFodmap = query.lowFodmap;

    document.getElementById('submitRecipe').style.backgroundColor = '#3B82F6'

    this.savedRecipesService.setRecipes(recipe);
  }
}
