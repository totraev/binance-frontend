import { createSelector, createSelectorCreator, defaultMemoize } from 'reselect';

import { Product } from 'interfaces/product';
import { AppState } from 'store/createStore';

export const isLoadingSelector = (state: AppState) => state.app.isLoading;
export const updatesStatusSelector = (state: AppState) => state.app.updatesStatus;
export const sortFieldSelector = (state: AppState) => state.app.sortField;
export const sortOrderSelector = (state: AppState) => state.app.sortOrder;
export const displayTypeSelector = (state: AppState) => state.app.type;
export const categorySelector = (state: AppState) => state.app.selectedCategory;
export const searchValueSelector = (state: AppState) => state.app.search;
export const selectedMarketSelector = (state: AppState) => state.app.selectedMarket;
export const displayFavoritesSelector = (state: AppState) => state.app.displayFavorites;
export const favoriteProductsMapSelector = (state: AppState) => state.app.favorites;
export const errorSelector = (state: AppState) => state.app.error;

// Invalidate cache only when array of ids changed
const createProductsSelector = createSelectorCreator(defaultMemoize, (prev, current) =>
  Array.isArray(current) ? prev === current : true
);

const productsSelector = createProductsSelector(
  (state: AppState) => state.products.ids,
  (state: AppState) => state.products.entities,
  (ids, entities) => ids.map((id) => entities[id] as Product)
);

export const marketsSelector = createSelector(productsSelector, (products) => {
  const markets = new Map<string, Set<string>>();

  products.forEach((product) => {
    if (markets.has(product.parentMarket)) {
      markets.get(product.parentMarket)!.add(product.quoteAsset);
    } else {
      markets.set(product.parentMarket, new Set([product.quoteAsset]));
    }
  });

  return Array.from(markets.entries()).map(([marketName, categoriesSet]) => ({
    market: marketName,
    categories: Array.from(categoriesSet.values()),
  }));
});
