import { observable, action, computed } from 'mobx';

import { calculateChange, getNumberOfDecimals } from '../../utils';
import { ProductData, ProductStreamData } from 'interfaces/product';

export class Product {
  readonly symbol = this.data.s;
  readonly baseAsset = this.data.b;
  readonly quoteAsset = this.data.q;
  readonly parentMarket = this.data.pm;
  readonly category = this.data.pn;
  readonly numberOfDecimals = getNumberOfDecimals(this.data.ts);
  @observable openPrice = this.data.o;
  @observable highPrice = 0;
  @observable lowPrice = 0;
  @observable lastPrice = 0;
  @observable volume = 0;
  @observable favorite = false;

  constructor(private data: ProductData) {
    this.openPrice = data.o;
    this.highPrice = data.h;
    this.lowPrice = data.l;
    this.lastPrice = data.c;
    this.volume = data.v;
  }

  @computed get change() {
    return calculateChange(this.openPrice, this.lastPrice);
  }

  @action updateProduct(data: ProductStreamData) {
    this.openPrice = parseFloat(data.o);
    this.volume = parseFloat(data.v);
    this.lastPrice = parseFloat(data.c);
  }

  @action setFavorite(value: boolean) {
    this.favorite = value;
  }
}
