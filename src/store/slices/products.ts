import { createEntityAdapter, createAction, createReducer } from '@reduxjs/toolkit';

import { Product, ProductUpdate } from 'interfaces/product';
import { withPayload } from 'utils';

const productsAdapter = createEntityAdapter<Product>({
  selectId: (product) => product.symbol,
});

export const fetchProducts = createAction('products/fetchProducts', withPayload<void>());
export const connectProductUpdates = createAction(
  'products/connectProductUpdates',
  withPayload<void>()
);
export const disconnectProductUpdates = createAction(
  'products/disconnectProductUpdates',
  withPayload<void>()
);
export const setProducts = createAction('products/setProducts', withPayload<Product[]>());
export const updateProducts = createAction(
  'products/updateProducts',
  withPayload<ProductUpdate[]>()
);

export const productSelectors = productsAdapter.getSelectors();

const productsReducer = createReducer(productsAdapter.getInitialState(), (builder) =>
  builder
    .addCase(setProducts, productsAdapter.setAll)
    .addCase(updateProducts, productsAdapter.updateMany)
);

export default productsReducer;
