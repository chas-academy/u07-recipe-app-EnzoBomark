import { Component, OnInit } from '@angular/core';
import { SavedRecipesService } from 'src/app/services/saved-recipes.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private savedRecipesService: SavedRecipesService) { }

  ngOnInit(): void {
  }

  ngDoCheck():void {
    console.log(this.savedRecipesService.getRecipes());
  }

  setRecipes(id:number, title:string){
    this.savedRecipesService.setRecipes(id, title);
  }
}
