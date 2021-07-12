import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tablas } from '../interfaces/Tablas';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class TablasInfoService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getTablass(): Observable<Tablas[]>{
    return this.http.get<Tablas[]>(`${this.BASE_URL}/configuration/getTables`);
  }
}
