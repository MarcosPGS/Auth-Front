import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import {JwtHelperService } from '@auth0/angular-jwt'
import { Usuario } from '../models/sign';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private URL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }


  sign(payload: Usuario): Observable<any>{
    return this.http.post(`${this.URL}/sign`, payload)
    .pipe(
      map((res) => {
        this.setUserLocalStorage(res);
        return res;
      }),
      catchError((e) => {
        if(e.error.message)return throwError(() => e.error.message);
        return throwError(() => 'No momento não estamos conseguindo validar este dados, tente novamente mais tarde!');
      })
    );
  }


  setUserLocalStorage(res: any) {
    localStorage.setItem('access_token', JSON.stringify(res.token));
  }
  logout(): void {
    localStorage.removeItem('access_token');
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    if (!token) return false;
    const jwtHelper = new JwtHelperService();
    return !jwtHelper.isTokenExpired(token);
  }
}
