import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  auth;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {}

  ngDoCheck(){
    this.auth = this.authService.auth();
  }

  logout(){
    this.authService.logout()
  }

}
