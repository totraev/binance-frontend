import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { ProductTable, ProductTableProps, ProductTableHandlers } from 'components/ProductTable';

import {
  favoriteProductsMapSelector,
  sortFieldSelector,
  sortOrderSelector,
  displayTypeSelector,
} from 'selectors/application';
import { sortedProductsSelector } from 'selectors/products';
import { setSortField, addFavorite, removeFavorite } from 'store/slices/application';
import { AppState } from 'store/createStore';

const mapStateToProps = createStructuredSelector<AppState, ProductTableProps>({
  products: sortedProductsSelector,
  favorites: favoriteProductsMapSelector,
  sortField: sortFieldSelector,
  sortOrder: sortOrderSelector,
  type: displayTypeSelector,
});

const dispatchers: ProductTableHandlers = {
  onSortFieldChange: setSortField,
  onFavoriteProductChange: (symbol, value) =>
    value ? addFavorite(symbol) : removeFavorite(symbol),
};

export const ProductTableContainer = connect(mapStateToProps, dispatchers)(ProductTable);
