import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor(
    private http: HttpClient,
  ) { }
  private productsUrl = environment.productsUrl;
  private shopsUrl = environment.shopsUrl;
  private shoppingListUrl = environment.shoppingListUrl;
  data:any;

  addlistItem(data): Observable<any> {
    data.user_token = '12345';
    return this.http.post<any>(this.shoppingListUrl, data);
  }

  addShop(data): Observable<any> {
    return this.http.post<any>(this.shopsUrl, data);
  }
  
  /** GET heroes from the server */
  delShoplistItem(data): Observable<any[]> {
    return this.http.delete<any[]>(this.shoppingListUrl+'/'+data.shopping_list_id)
  }
  
  /** GET heroes from the server */
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.productsUrl)
  }

  /** GET heroes from the server */
  getShoppinglist(): Observable<any[]> {
    return this.http.get<any[]>(this.shoppingListUrl)
  }

  /** GET heroes from the server */
  getShops(): Observable<any[]> {
    return this.http.get<any[]>(this.shopsUrl)
  }

}
