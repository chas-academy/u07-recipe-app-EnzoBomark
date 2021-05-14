import { Component, OnInit } from '@angular/core';
import { ApiHandlerService } from 'src/app/shared/services/api-handler.service';
import { Recipe } from 'src/app/shared/interfaces/recipe';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.scss']
})
export class SearchRecipeComponent implements OnInit {

  recipes: Recipe[];

  constructor(
    private apiHandlerService: ApiHandlerService, 
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(result => {
      this.apiHandlerService.getComplexSearch(result).subscribe(recipes => {
        this.recipes = recipes
      });
    });
  }
}
