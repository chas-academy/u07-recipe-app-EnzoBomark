import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/shared/interfaces/user'

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  
  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    return this.http.post('https://u08-recipe.herokuapp.com/api/register', user);
  }

  login(user: any): Observable<any> {
    return this.http.post<any>('https://u08-recipe.herokuapp.com/api/login', user);
  }

  getUser(): Observable<User> {
    return this.http.get<User>('https://u08-recipe.herokuapp.com/api/user');
  }

  logout() {
    this.http.get('https://u08-recipe.herokuapp.com/api/logout');
    localStorage.removeItem('token');
  }

  auth() {
    return (localStorage.getItem('token') !== null) ? true : false;
  }
}
