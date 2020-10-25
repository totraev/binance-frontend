import { observable, computed, action } from 'mobx';
import { Injectable } from 'mobx-di';

import { Product } from 'models/entities/Product';
import { ProductData, ProductStreamData } from 'interfaces/product';

@Injectable()
export class ProductModel {
  @observable private data = new Map<string, Product>();

  @computed get products() {
    return Array.from(this.data.values());
  }

  @action setProducts(data: ProductData[]) {
    data.forEach((p) => {
      this.data.set(p.s, new Product(p));
    });
  }

  @action updateProducts(data: ProductStreamData[]) {
    data.forEach((p) => {
      if (this.data.has(p.s)) {
        this.data.get(p.s)!.updateProduct(p);
      }
    });
  }

  getProduct(symbol: string) {
    return this.data.get(symbol);
  }
}
