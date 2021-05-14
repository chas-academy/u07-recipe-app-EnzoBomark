import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeHandlerService } from 'src/app/shared/services/recipe-handler.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  recipes: any;
  list: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private recipeHandlerService: RecipeHandlerService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(result => {
      this.list = result;
      this.recipeHandlerService.showList(result.name).subscribe(recipes => {
        this.recipes = recipes
      })
    });
  }

  deleteRecipe(id) {
    this.recipeHandlerService.deleteRecipe(id).subscribe(
      result => {
        this.recipes.splice(this.recipes.findIndex(function(i){
          return i.id === id;
      }), 1);
      },
      error => {
        console.log(error)
      }
    );
  }

  deleteList(id) {
    this.recipeHandlerService.deleteList(id).subscribe(
      result => {
        this.router.navigate(['/user'])
      },
      error => {
        console.log(error)
      }
    );
  }

}
