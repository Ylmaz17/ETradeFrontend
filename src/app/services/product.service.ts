import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:44339/api/';
  //https://localhost:44339/api/Products/getallbycategoryid?categoryId=1
  // https://localhost:44339/api/getallbycategoryid?categoryId=2
// https://localhost:44339/api/Products/getallbycategoryid?categoryId=5
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + 'Products/getall';
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
  getProductsByCategory(
    categoryId: number
  ): Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + 'Products/getallbycategoryid?categoryId=' + categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
}
