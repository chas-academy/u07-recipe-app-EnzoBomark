// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';

// Components
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './auth/login/login.component'
import { RegisterComponent } from './auth/register/register.component'
import { RandomRecipeComponent } from './recipe-handler/random-recipe/random-recipe.component';
import { RandomRecipeItemComponent } from './recipe-handler/random-recipe-item/random-recipe-item.component';
import { SearchRecipeComponent } from './search-handler/search-recipe/search-recipe.component';
import { SearchRecipeItemComponent } from './search-handler/search-recipe-item/search-recipe-item.component';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    RandomRecipeComponent,
    RandomRecipeItemComponent,
    SearchRecipeComponent,
    SearchRecipeItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
  ]
})
export class PublicModule { }
