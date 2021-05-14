import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  @Input() recipe: any;

  constructor(
    private router:Router,
  ) { }

  ngOnInit(): void {
  }

  getInstructions() {
    this.router.navigate(['/recipes/instructions'], {queryParams: {id: this.recipe.id}});
  }
}
