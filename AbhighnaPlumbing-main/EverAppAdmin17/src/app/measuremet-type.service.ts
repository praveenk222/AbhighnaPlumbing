import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeasuremetTypeService {
  constructor(private http: HttpClient) {}

  // POST request to create a new lookup
  createLookup(newLookup: any): Observable<any> {
    return this.http.post('http://localhost:8080/api/lookup', newLookup);
  }

  // GET request to retrieve lookups
  getLookups(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/api/lookup');
  }
  getmesurmentLookups(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/api/mesurmentlookup');
  }
}
