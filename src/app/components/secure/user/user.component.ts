import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { RecipeHandlerService } from 'src/app/shared/services/recipe-handler.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {

  watchlistForm: FormGroup;
  lists: any;
  user: any;
  error: any = false;

  constructor(
    private formbuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private recipeHandlerService: RecipeHandlerService
    ) { }

  ngOnInit(): void {
    this.recipeHandlerService.getLists().subscribe(result => this.lists = result);
    this.authService.getUser().subscribe(result => this.user = result);
    this.watchlistForm = this.formbuilder.group({
      name: '',
    });
  }

  submit(){
    const formData = this.watchlistForm.getRawValue();
    const data = {
      name: formData.name
    }

    this.recipeHandlerService.setList(data).subscribe(
      result => {
        this.error = false;
        this.lists.push(data)
      }, 
      error => {
        this.error = error.errors.name;
      }
    );
  }

  getList(name, id){
    this.router.navigate(['/user/list'], {queryParams: {name: name, id: id}});
  }
}
