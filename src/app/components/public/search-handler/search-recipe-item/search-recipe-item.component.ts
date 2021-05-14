import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/shared/interfaces/recipe';

@Component({
  selector: 'app-search-recipe-item',
  templateUrl: './search-recipe-item.component.html',
  styleUrls: ['./search-recipe-item.component.scss']
})
export class SearchRecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit(): void {}
}
