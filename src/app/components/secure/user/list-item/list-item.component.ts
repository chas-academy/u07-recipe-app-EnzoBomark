import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() recipe: any;
  data: any
  constructor() { }

  ngOnInit(): void {
    this.data = {
      saved_id: this.recipe.id,
      id: this.recipe.recipe_id,
      title: this.recipe.recipe_title,
      image: this.recipe.image_url,
      vegan: this.recipe.vegan,
      vegetarian: this.recipe.vegetarian,
      glutenFree: this.recipe.glutenfree,
      lowFodmap: this.recipe.lowfodmap,
      readyInMinutes: this.recipe.ready_in_minutes
    }
  }

}
