import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Album } from "./album";
import { Observable } from "rxjs/Observable";
import { Product } from "./product";

import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  private _albumUrl='../asset/album.json';
  private _productsUrl='../asset/products.json';

  

  constructor(private _http: Http) { }

 

  getAlbum(id: number):Observable<Album>{
    return this._http.get(this._albumUrl).map((response)=> <Album> response.json());
  }

  getProducts(): Observable<Product[]>{
    return this._http.get(this._productsUrl).map(response => <Product[]>response.json());
  }

}

