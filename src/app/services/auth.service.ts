import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private URL = 'http://localhost:3000';

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}

  singin(user: User) {
    return this.http.post(`${this.URL}/users/singin`, user);
  }
  isAuth(): boolean {
    const token: any = localStorage.getItem('token');

    if (
      this.jwtHelper.isTokenExpired(token) ||
      !localStorage.getItem('token')
    ) {
      return false;
    } else {
      return true;
    }
  }
}
