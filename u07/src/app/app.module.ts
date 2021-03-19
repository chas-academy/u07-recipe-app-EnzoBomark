import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
import { ComplexSearchComponent } from './components/complex-search/complex-search.component';
import { ComplexSearchItemComponent } from './components/complex-search-item/complex-search-item.component';
import { HomeComponent } from './components/home/home.component';
import { RecipeInstructionsComponent } from './components/recipe-instructions/recipe-instructions.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeItemComponent,
    ComplexSearchComponent,
    ComplexSearchItemComponent,
    HomeComponent,
    RecipeInstructionsComponent
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
