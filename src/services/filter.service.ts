import { Injectable } from 'mobx-di';

import { Product } from 'models/entities/Product';

interface Properties {
  search?: string;
  favorites?: boolean;
  parentMarket?: string;
  category?: string;
}

@Injectable()
export class FilterService {
  filter(arr: Product[], properties: Properties): Product[] {
    const propArr = Object.entries(properties);

    return arr.filter((product) =>
      propArr.every(([key, value]) => {
        switch (key) {
          case 'search':
            return product.baseAsset.includes(value);
          case 'favorites':
            return value ? product.favorite : true;
          case 'parentMarket':
            return value ? product.parentMarket === value : true;
          case 'category':
            return value ? product.quoteAsset === value : true;
          default:
            return true;
        }
      })
    );
  }
}
