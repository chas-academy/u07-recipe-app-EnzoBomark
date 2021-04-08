import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RecipeInstructionsComponent } from './components/recipe-instructions/recipe-instructions.component';
import { ComplexSearchComponent } from './components/complex-search/complex-search.component';
import { SavedRecipesComponent } from './components/saved-recipes/saved-recipes.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch : 'full'},
  {path: 'recipes/instructions', component: RecipeInstructionsComponent, pathMatch : 'full'},
  {path: 'recipes', component: ComplexSearchComponent, pathMatch : 'full'},
  {path: 'saved-recipes', component: SavedRecipesComponent, pathMatch : 'full'},
  {path: 'add-recipe', component: AddRecipeComponent, pathMatch : 'full'},
  {path: '**', component: HomeComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
