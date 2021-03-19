import { Component, OnInit, Input } from '@angular/core';
import { ComplexSearch } from 'src/app/models/ComplexSearch';
import { Router  } from '@angular/router';


@Component({
  selector: 'app-complex-search-item',
  templateUrl: './complex-search-item.component.html',
  styleUrls: ['./complex-search-item.component.scss']
})
export class ComplexSearchItemComponent implements OnInit {
  @Input() complexSearch: ComplexSearch;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  getInstructions(recipeId: number, imageUrl: string) {
    this.router.navigate(['/recipes/instructions'], {queryParams: {id: recipeId, image: imageUrl} });
  }
}
