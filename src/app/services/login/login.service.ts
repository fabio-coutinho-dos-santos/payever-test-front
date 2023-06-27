import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, map } from 'rxjs';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private readonly http: HttpClient) { }

  public makeLogin(email: string, password: string, passwordConfirmation: string, name: string) : Observable<User>{
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    }
    
    const jsonObject = {
      email,
      password,
      passwordConfirmation,
      name
    } 

    return this.http.post(
      'http://localhost:1337/api/users',
      JSON.stringify(jsonObject),
      httpOptions
    )
    .pipe(map((resp:any)=>resp))
  }
}
