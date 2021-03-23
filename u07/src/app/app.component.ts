import { Component } from '@angular/core';
import { Router  } from '@angular/router';
import { ComplexSearchService } from 'src/app/services/complex-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'Cookalicious';

  constructor(private router:Router, private complexSearchService:ComplexSearchService) { }

  getQuery(query: object): void{
    //Send query to complex search component who will send it to complex-search-service
    this.complexSearchService.setComplexSearch(query);

    this.router.navigate(['/recipes']);
  }
}
