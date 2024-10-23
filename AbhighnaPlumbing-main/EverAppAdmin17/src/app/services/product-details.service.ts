import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor(private http:HttpClient) { }

  getProductDetails():Observable<any>{
   return this.http.get('http://localhost:8080/api/products')
  }
  getProductDetailsById(id:number):Observable<any>{
   return this.http.get(`http://localhost:8080/api/products/${id}`)
  }
  addProduct(data:any):Observable<any>{
    return this.http.post('http://localhost:8080/api/products',data)
  }
  getMeasurement():Observable<any>{
    return this.http.get('http://localhost:8080/api/mesurmentlookup')
   }
   updateProduct(id: string, product: any): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/lookup/${id}`, product);
  }

  deleteProduct(product: any): Observable<void> {
    return this.http.post<any>(`http://localhost:8080/api/products`,product);
  }
}
