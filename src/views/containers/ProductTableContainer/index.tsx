import React from 'react';
import { observer } from 'mobx-react-lite';

import { useInstance } from 'views/hooks/useInstance';

import { ProductViewModel } from 'viewmodels/Product.viewmodel';
import { ProductTable } from 'views/components/ProductTable';

export const ProductTableContainer = observer(() => {
  const products = useInstance(ProductViewModel);

  return (
    <ProductTable
      sortField={products.sortingField}
      sortOrder={products.sortingOrder}
      type={products.type}
      products={products.sortedProducts}
      onFavoriteProductChange={(symbol, value) => products.setFavoriteProduct(symbol, value)}
      onSortFieldChange={(payload) => products.setSortOrder(payload.field, payload.order)}
    />
  );
});
