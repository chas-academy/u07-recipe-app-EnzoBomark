import { Component, OnInit, Input } from '@angular/core';
import { RecipeInstructionsService } from 'src/app/services/recipe-instructions.service';
import { SavedRecipesService } from 'src/app/services/saved-recipes.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-recipe-instructions',
  templateUrl: './recipe-instructions.component.html',
  styleUrls: ['./recipe-instructions.component.scss']
})
export class RecipeInstructionsComponent implements OnInit {
  step: string = 'Sorry we currently have some trubble receiving this recipe';
  id: number = 0;
  title: string = '';
  image: string = '';
  setValue:boolean = true;
  ingredients: Array<object> = [];

  constructor(
    private recipeInstructionsService: RecipeInstructionsService,
     private savedRecipesService: SavedRecipesService,
     private route: ActivatedRoute,
     ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParams => {
      this.image = queryParams['image'];
      this.title = queryParams['title'];
      this.id = queryParams['id'];
      this.recipeInstructionsService.getComplexSearch(queryParams['id']).subscribe(recipes => {
        if(recipes != ''){
          let recipeArray = [];
          Object.values(recipes).forEach(recipe => Object.values(recipe).map(cell => recipeArray.push(cell)));
          this.step = recipeArray[1][0].step;
          this.ingredients = recipeArray[1][0].ingredients;
        }
      })
    });
  }

  ngDoCheck():void {
    this.savedRecipesService.getRecipes();
    if(this.savedRecipesService.getRecipes().find(recipe => Object.values(recipe)[0] == this.id)) this.setValue = false;
    else this.setValue = true;
  }

  setRecipes(id:number, title:string , imageUrl: string){
    this.savedRecipesService.setRecipes(id, title, imageUrl);
  }
}
