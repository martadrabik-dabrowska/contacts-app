import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private baseUrl = 'http://localhost:8075/kontakty';

  constructor(private http: HttpClient) { }

  addCompany(company: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, company);
  }
}
