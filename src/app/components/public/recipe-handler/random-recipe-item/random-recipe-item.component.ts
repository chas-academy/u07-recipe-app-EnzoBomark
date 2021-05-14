import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/shared/interfaces/recipe';

@Component({
  selector: 'app-random-recipe-item',
  templateUrl: './random-recipe-item.component.html',
  styleUrls: ['./random-recipe-item.component.scss']
})
export class RandomRecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
