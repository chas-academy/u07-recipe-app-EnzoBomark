import { Component, OnInit } from '@angular/core';
import { ComplexSearchService } from 'src/app/servives/complex-search.service';
import { ComplexSearch } from '../../models/ComplexSearch';

@Component({
  selector: 'app-complex-search',
  templateUrl: './complex-search.component.html',
  styleUrls: ['./complex-search.component.scss']
})
export class ComplexSearchComponent implements OnInit {

  complexSearch: ComplexSearch[];

  constructor(private complexSearchService: ComplexSearchService) { }

  ngOnInit(): void {
    this.complexSearchService.getComplexSearch().subscribe(recipes => {
      let recipeArray = [];
      Object.values(recipes).forEach(recipe => Object.values(recipe).map(cell => recipeArray.push(cell)));
      console.log(recipeArray);
      this.complexSearch = recipeArray;
    });
  }

}
