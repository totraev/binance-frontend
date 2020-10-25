import React from 'react';
import { observer } from 'mobx-react-lite';

import { useInstance } from 'views/hooks/useInstance';

import { ProductViewModel } from 'viewmodels/Product.viewmodel';
import { ControlPanel } from 'views/components/ControlPanel';

export const ControlPanelContainer = observer(() => {
  const product = useInstance(ProductViewModel);

  return (
    <ControlPanel
      displayFavorites={product.favoritesVisible}
      selectedMarket={product.parentMarket}
      selectedCategory={product.category}
      searchValue={product.search}
      markets={product.markets}
      volumeType={product.type}
      onProductChange={(market, category) => product.setCurrentMarket(market, category)}
      onToggleChange={(value) => product.setType(value)}
      onSearchValueChange={(value) => product.updateSearchValue(value)}
      onFavoriteProductsSelect={() => product.toggleFavoritesVisibility()}
    />
  );
});
