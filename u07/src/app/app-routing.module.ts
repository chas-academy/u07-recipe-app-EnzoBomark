import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RecipeInstructionsComponent } from './components/recipe-instructions/recipe-instructions.component';
import { ComplexSearchComponent } from './components/complex-search/complex-search.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch : 'full'},
  {path: 'recipes/instructions', component: RecipeInstructionsComponent, pathMatch : 'full'},
  {path: 'recipes', component: ComplexSearchComponent, pathMatch : 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
