import { createSelector } from '@reduxjs/toolkit';

import { AppState } from 'store/createStore';
import { productSelectors } from 'store/slices/products';
import { createProductComparator } from 'utils';

import {
  selectedMarketSelector,
  categorySelector,
  searchValueSelector,
  displayFavoritesSelector,
  favoriteProductsMapSelector,
  sortFieldSelector,
  sortOrderSelector,
} from 'selectors/application';

export const productsSelector = (state: AppState) => productSelectors.selectAll(state.products);

export const parentMarketProducts = createSelector(
  productsSelector,
  selectedMarketSelector,
  (products, parentMarket) =>
    parentMarket ? products.filter((product) => product.parentMarket === parentMarket) : products
);

export const categoryProductsSelector = createSelector(
  parentMarketProducts,
  categorySelector,
  (products, category) =>
    category ? products.filter((product) => product.quoteAsset === category) : products
);

export const filteredProductsSelector = createSelector(
  categoryProductsSelector,
  searchValueSelector,
  (products, searchValue) =>
    searchValue ? products.filter((product) => product.baseAsset.includes(searchValue)) : products
);

export const favoriteProductsSelector = createSelector(
  filteredProductsSelector,
  displayFavoritesSelector,
  favoriteProductsMapSelector,
  (products, displayFavorites, favorites) =>
    displayFavorites ? products.filter((product) => favorites[product.symbol]) : products
);

export const sortedProductsSelector = createSelector(
  favoriteProductsSelector,
  sortFieldSelector,
  sortOrderSelector,
  favoriteProductsSelector,
  (products, sortField, sortOrder) =>
    products.slice().sort(createProductComparator(sortField, sortOrder))
);
