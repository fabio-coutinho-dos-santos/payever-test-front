import { HttpClient } from '@angular/common/http';
import {Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  constructor(private readonly httpClient: HttpClient) { }

  public getUniversities() : Observable<any>{

    return this.httpClient.get<any>(
      'http://universities.hipolabs.com/search?country=United+States&limit=9',
    )
  }
  
}
