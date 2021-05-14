// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

// Components
import { UserComponent } from './user/user.component';
import { ListComponent } from './user/list/list.component';
import { ListItemComponent } from './user/list-item/list-item.component';
@NgModule({
  declarations: [
    UserComponent,
    ListComponent,
    ListItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class SecureModule { }
