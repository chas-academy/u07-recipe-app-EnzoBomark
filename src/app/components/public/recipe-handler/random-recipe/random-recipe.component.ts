import { Component, OnInit } from '@angular/core';
import { ApiHandlerService } from 'src/app/shared/services/api-handler.service';
import { Recipe } from 'src/app/shared/interfaces/recipe';

@Component({
  selector: 'app-random-recipe',
  templateUrl: './random-recipe.component.html',
  styleUrls: ['./random-recipe.component.scss']
})
export class RandomRecipeComponent implements OnInit {

  recipes: Recipe[];

  constructor(private apiHandlerService: ApiHandlerService) {
   }

  ngOnInit(): void {
    this.apiHandlerService.getRecipes().subscribe(recipes => {
      this.recipes = recipes
    }, (error) => {
      console.log('error occured: ', error)
    });
  }

}
