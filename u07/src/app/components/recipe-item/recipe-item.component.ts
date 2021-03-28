import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe';
import { RecipeInstructionsService } from 'src/app/services/recipe-instructions.service';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(
    private router:Router,
    private recipeInstructionsService:RecipeInstructionsService
  ) { }

  ngOnInit(): void {
  }

  getInstructions() {
    this.recipeInstructionsService.setRecipe(this.recipe);
    this.redirectTo('/recipes/instructions');
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 }

}
