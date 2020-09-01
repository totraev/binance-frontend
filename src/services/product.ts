import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiClient } from './core/apiClient';
import { WSClient } from './core/wsClient';

import { ProductResponse, ProductStreamResponse, Product, ProductUpdate } from 'interfaces/product';
import { calculateChange, getNumberOfDecimals } from 'utils';

export class ProductService {
  constructor(private apiClient: ApiClient, private wsClient: WSClient) {}

  getProducts(): Observable<Product[]> {
    return this.apiClient.get<ProductResponse>('public/asset-service/product/get-products').pipe(
      map((res) =>
        res.data.map((product) => ({
          symbol: product.s,
          parentMarket: product.pm,
          baseAsset: product.b,
          quoteAsset: product.q,
          lastPrice: product.c,
          change: calculateChange(product.o, product.c),
          volume: product.v,
          decimals: getNumberOfDecimals(product.ts),
        }))
      )
    );
  }

  getProductUpdates(): Observable<ProductUpdate[]> {
    return this.wsClient<ProductStreamResponse>('stream?streams=!miniTicker@arr').pipe(
      map((res) =>
        res.data.map((product) => ({
          id: product.s,
          changes: {
            lastPrice: parseFloat(product.c),
            change: calculateChange(parseFloat(product.o), parseFloat(product.c)),
            volume: parseFloat(product.v),
          },
        }))
      )
    );
  }
}
