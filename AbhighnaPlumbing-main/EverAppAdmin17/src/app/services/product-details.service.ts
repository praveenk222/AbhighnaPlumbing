import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
baseUrl=environment.apiurl;
  constructor(private http:HttpClient) { }

  getProductDetails():Observable<any>{
   return this.http.get(this.baseUrl+`/api/products`)
  }
  getProductDetailsById(id:number):Observable<any>{
   return this.http.get(this.baseUrl+`/api/products/${id}`)
  }
  addProduct(data:any):Observable<any>{
    return this.http.post(this.baseUrl+`/api/products`,data)
  }
  getMeasurement():Observable<any>{
    return this.http.get(this.baseUrl+`/mesurmentlookup`)
   }
   updateProduct(id: string, product: any): Observable<any> {
    return this.http.post<any>(this.baseUrl+`/api/lookup/${id}`, product);
  }

  deleteProduct(product: any): Observable<void> {
    return this.http.post<any>(this.baseUrl+`/api/products`,product);
  }
}
