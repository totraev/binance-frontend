import { action, observable, computed } from 'mobx';
import { Injectable } from 'mobx-di';
import { Subscription } from 'rxjs';

import { ProductService } from 'services/product';
import { FilterService } from 'services/filter.service';

import { ProductModel } from 'models/Product.model';

import { createProductComparator } from '../utils';

import { SortingField, SortingOrder, DisplayVolume } from 'interfaces/application';
import { Market } from 'interfaces/product';

@Injectable()
export class ProductViewModel {
  private subscription: Subscription | null = null;

  @observable favoritesVisible = false;
  @observable parentMarket = '';
  @observable category = '';
  @observable search = '';
  @observable type = DisplayVolume.Change;
  @observable sortingField = SortingField.Symbol;
  @observable sortingOrder = SortingOrder.ASC;

  constructor(
    private productModel: ProductModel,
    private productService: ProductService,
    private filterService: FilterService
  ) {}

  @computed private get filteredProducts() {
    return this.filterService.filter(this.productModel.products, {
      search: this.search,
      favorites: this.favoritesVisible,
      parentMarket: this.parentMarket,
      category: this.category,
    });
  }

  @computed get sortedProducts() {
    return this.filteredProducts
      .slice()
      .sort(createProductComparator(this.sortingField, this.sortingOrder));
  }

  @computed get markets(): Market[] {
    const { products } = this.productModel;
    const markets = new Map<string, Set<string>>();

    products.forEach((product) => {
      if (markets.has(product.parentMarket)) {
        const categories = markets.get(product.parentMarket);
        categories!.add(product.quoteAsset);
      } else {
        markets.set(product.parentMarket, new Set([product.quoteAsset]));
      }
    });

    return Array.from(markets.entries()).map(([marketName, categoriesSet]) => ({
      market: marketName,
      categories: Array.from(categoriesSet.values()),
    }));
  }

  @action setSortOrder(field: SortingField, order: SortingOrder) {
    this.sortingField = field;
    this.sortingOrder = order;
  }

  @action toggleFavoritesVisibility() {
    if (this.favoritesVisible) {
      this.favoritesVisible = false;
    } else {
      this.favoritesVisible = true;
    }
  }

  @action updateSearchValue(value: string) {
    this.search = value.toUpperCase();
  }

  @action setType(value: DisplayVolume) {
    this.type = value;
  }

  @action setCurrentMarket(market: string, category: string = '') {
    if (this.favoritesVisible) {
      this.favoritesVisible = false;
    }

    this.parentMarket = market;
    this.category = category;
  }

  @action displayAllMarkets() {
    this.parentMarket = '';
    this.category = '';
  }

  async fetchProducts() {
    const data = await this.productService.getProducts().toPromise();
    this.productModel.setProducts(data);
  }

  connectProductUpdates() {
    return new Promise((resolve) => {
      let resolved = false;

      this.subscription = this.productService.getProductUpdates().subscribe((data) => {
        if (!resolved) {
          resolved = true;
          resolve();
        }

        this.productModel.updateProducts(data);
      });
    });
  }

  disconnectProductUpdates() {
    this.subscription?.unsubscribe();
  }

  setFavoriteProduct(symbol: string, value: boolean) {
    const product = this.productModel.getProduct(symbol);

    if (product) {
      product.setFavorite(value);
    }
  }
}
