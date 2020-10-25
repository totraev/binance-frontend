import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from 'mobx-di';

import { ApiClient } from './core/apiClient';
import { WSClient } from './core/wsClient';

import {
  ProductResponse,
  ProductStreamResponse,
  ProductData,
  ProductStreamData,
} from 'interfaces/product';

@Injectable()
export class ProductService {
  constructor(private apiClient: ApiClient, private wsClient: WSClient) {}

  getProducts(): Observable<ProductData[]> {
    return this.apiClient
      .get<ProductResponse>('public/asset-service/product/get-products')
      .pipe(map((res) => res.data));
  }

  getProductUpdates(): Observable<ProductStreamData[]> {
    return this.wsClient
      .subscribeProductUpdates<ProductStreamResponse>('stream?streams=!miniTicker@arr')
      .pipe(map(({ data }) => data));
  }
}
