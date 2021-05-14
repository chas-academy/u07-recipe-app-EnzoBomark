import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiHandlerService } from 'src/app/shared/services/api-handler.service'
import { Recipe }  from 'src/app/shared/interfaces/recipe'
import { RecipeHandlerService } from '../../services/recipe-handler.service';
@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})

export class InstructionsComponent implements OnInit {
  step: string = 'Sorry we currently have some trubble receiving this recipe';
  recipe: Recipe;
  lists: any;
  openList: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiHandlerService: ApiHandlerService,
    private recipeHandlerService: RecipeHandlerService
  ) { }

  ngOnInit(): void {
    this.recipeHandlerService.getLists().subscribe(result => this.lists = result);
    this.activatedRoute.queryParams.subscribe(result => {
      this.apiHandlerService.getRecipe(result.id).subscribe(result => {
        this.recipe = result
        console.log(result);
      })
    });
  }

  openLists(){
    this.openList = !this.openList;
  }

  setRecipe(id){
    const data = {
      recipe_id: this.recipe.id,
      recipe_title: this.recipe.title,
      vegan: this.recipe.vegan,
      vegetarian: this.recipe.vegetarian,
      glutenfree: this.recipe.glutenFree,
      lowfodmap: this.recipe.lowFodmap,
      image_url: this.recipe.image,
      ready_in_minutes: this.recipe.readyInMinutes,
      watchlist_id: id,
    }

    this.recipeHandlerService.setRecipe(data).subscribe(
      result => {
        console.log(result);
      }, 
      error => {
        console.log(error);
      }
    );
  }
}
