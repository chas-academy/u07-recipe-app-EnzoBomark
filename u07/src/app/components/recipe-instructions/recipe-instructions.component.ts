import { Component, OnInit, Input } from '@angular/core';
import { RecipeInstructionsService } from 'src/app/services/recipe-instructions.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-recipe-instructions',
  templateUrl: './recipe-instructions.component.html',
  styleUrls: ['./recipe-instructions.component.scss']
})
export class RecipeInstructionsComponent implements OnInit {
  step: string = 'Sorry we currently have some trubble receiving this recipe';
  image: string = '';
  ingredients: Array<object> = [];

  constructor(private recipeInstructionsService: RecipeInstructionsService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParams => {
      this.image = queryParams['image'];
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


}
