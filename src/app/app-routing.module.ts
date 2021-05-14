import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicComponent} from './components/public/public.component';
import { SecureComponent} from './components/secure/secure.component';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent} from './components/public/auth/login/login.component';
import { RegisterComponent} from './components/public/auth/register/register.component';
import { SearchRecipeComponent} from './components/public/search-handler/search-recipe/search-recipe.component';
import { InstructionsComponent} from './shared/components/instructions/instructions.component';
import { UserComponent} from './components/secure/user/user.component';
import { ListComponent} from './components/secure/user/list/list.component';

import { AuthGuard } from 'src/app/shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'recipes', component: SearchRecipeComponent},
      {path: 'recipes/instructions', component: InstructionsComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]
  },

  {
    path: '', component: SecureComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'user', component: UserComponent},
      {path: 'user/list', component: ListComponent},
    ]
  },

  {path: '**', component: HomeComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
