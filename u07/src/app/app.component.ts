import { Component } from '@angular/core';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'Cookalicious';

  constructor(private router:Router) { }

  getQuery(query: object): void{
    //Send query to complex search component who will send it to complex-search-service

    this.router.navigate(['/recipes'], {queryParams: query});
  }
}
