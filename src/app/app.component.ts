import { Component, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  loggenIn = false;

  @Output() filterBtnActive: boolean;
  backBtnActive: boolean = false;
  savedBtnActive: boolean = false;

  constructor(
    private _location: Location,
  ) { }

  ngOnInit(){

  }

  ngDoCheck() {
    if(location.pathname != '/') this.backBtnActive = true;
    if(location.pathname == '/') this.backBtnActive = false;
    if(location.pathname != '/saved-recipes') this.savedBtnActive = true;
    if(location.pathname == '/saved-recipes') this.savedBtnActive = false;
  }

  backClicked() {
     if(location.pathname != '/') return this._location.back();
  }
}
