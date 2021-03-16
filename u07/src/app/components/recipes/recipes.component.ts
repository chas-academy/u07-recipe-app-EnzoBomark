import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/Recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipes:Recipe[];

  constructor() { }

  ngOnInit(): void {
    this.recipes = [
    {
      id:1,
      title: 'chicken',
      complete: false,
    },
    {
      id:2,
      title: 'burger',
      complete: false,
    },
    {
      id:3,
      title: 'hotdog',
      complete: false,
    },
  ];
  }

}
