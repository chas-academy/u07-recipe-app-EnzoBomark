import { Component, OnInit } from '@angular/core';
import { ApiHandlerService } from 'src/app/shared/services/api-handler.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  filterBtnActive: boolean = false;
  searchForm: FormGroup;

  type: Array<string> = [
    'All-Types',
    'Dessert',
    'Appetizer',
    'Salad',
    'Breakfast',
    'Soup',
    'Snack',
    'Drink',
  ];

  intolerances: Array<string> = [
    'None-Intolerances',
    'Dairy',
    'Egg',
    'Gluten',
    'Peanuts',
    'Seafood',
    'Shellfish',
  ];

  cuisine: Array<string> = [
    'All-Cuisines',
    'American',
    'British',
    'Chinese',
    'French',
    'German',
    'Greek',
    'Indian',
    'Italian',
    'Mexican',
    'Thai',
    'Vietnamese',
  ];

  diet: Array<string> = [
    'None-Diets',
    'Gluten free',
    'Vegetarian',
    'Vegan',
    'Pescetarian',
  ];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private apiHandlerService: ApiHandlerService
  ) {}

  ngOnInit(): void{
    this.searchForm = this.formBuilder.group({
      query: '',
      type: '',
      intolerances: '',
      cuisine: '',
      diet: '',
    });
  }

  showFilter() {
    this.filterBtnActive = !this.filterBtnActive;
  }

  submit() {
    const formData = this.searchForm.getRawValue();
    const data = {
      query: formData.query,
      type: formData.type,
      intolerances: formData.intolerances,
      cuisine: formData.cuisine,
      diet: formData.diet,
    }
    this.router.navigate(['/recipes'], {queryParams: data});
  }
}
