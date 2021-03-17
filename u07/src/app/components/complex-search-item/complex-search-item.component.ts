import { Component, OnInit, Input } from '@angular/core';
import { ComplexSearch } from 'src/app/models/ComplexSearch';


@Component({
  selector: 'app-complex-search-item',
  templateUrl: './complex-search-item.component.html',
  styleUrls: ['./complex-search-item.component.scss']
})
export class ComplexSearchItemComponent implements OnInit {
  @Input() complexSearch: ComplexSearch;

  constructor() { }

  ngOnInit(): void {
  }

}
