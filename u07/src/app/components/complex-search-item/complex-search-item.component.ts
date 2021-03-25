import { Component, OnInit, Input } from '@angular/core';
import { ComplexSearch } from 'src/app/models/ComplexSearch';
import { RecipeInstructionsService } from 'src/app/services/recipe-instructions.service';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-complex-search-item',
  templateUrl: './complex-search-item.component.html',
  styleUrls: ['./complex-search-item.component.scss']
})
export class ComplexSearchItemComponent implements OnInit {
  @Input() complexSearch: ComplexSearch;

  constructor(
    private router:Router,
    private recipeInstructionsService:RecipeInstructionsService
  ) { }

  ngOnInit(): void {
  }

  getInstructions(recipeId: number,title: string, imageUrl: string) {
    this.recipeInstructionsService.setRecipe(recipeId, title, imageUrl);
    this.redirectTo('/recipes/instructions');
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 }
}
