import React, { FC, memo } from 'react';

import { Market } from 'interfaces/application';
import { DropdownButton } from 'components/DropdownButton';

import { ButtonGroup, MarketButton, FavoritesButton } from './styled';
import { hasMoreThenOneCaregory } from './helpers';

export interface ControlPanelProps {
  displayFavorites: boolean;
  selectedMarket: string;
  selectedCategory: string;
  markets: Market[];
}

export interface ControlPanelHandlers {
  onProductSelect: (market: string, category: string) => void;
  onFavoriteProductsSelect: () => void;
}

export type ComponentProps = ControlPanelProps & ControlPanelHandlers;

export const FilterButtons: FC<ComponentProps> = memo(
  ({
    displayFavorites,
    selectedCategory,
    selectedMarket,
    markets,
    onProductSelect,
    onFavoriteProductsSelect,
  }) => {
    const marketsWithoutCategories = markets.filter((market) => !hasMoreThenOneCaregory(market));

    const marketsWithCategories = markets.filter((market) => hasMoreThenOneCaregory(market));

    function handleAllProductsButtonClick() {
      onProductSelect('', '');
    }

    function handleProductButtonClick(productName: string) {
      return () => onProductSelect(productName, '');
    }

    function handleDropdownSelect(productName: string) {
      return (categoryName: string) => onProductSelect(productName, categoryName);
    }

    return (
      <ButtonGroup>
        <FavoritesButton active={displayFavorites} onClick={onFavoriteProductsSelect} />

        <MarketButton
          active={!selectedMarket && !selectedCategory && !displayFavorites}
          onClick={handleAllProductsButtonClick}
        >
          All
        </MarketButton>

        {marketsWithoutCategories.map((marketItem) => (
          <MarketButton
            key={marketItem.market}
            active={marketItem.market === selectedMarket}
            onClick={handleProductButtonClick(marketItem.market)}
          >
            {marketItem.market}
          </MarketButton>
        ))}

        {marketsWithCategories.map((marketItem) => (
          <DropdownButton
            key={marketItem.market}
            firstElement={marketItem.market}
            active={marketItem.market === selectedMarket}
            menuItems={marketItem.categories}
            onMenuItemSelect={handleDropdownSelect(marketItem.market)}
          >
            {marketItem.market === selectedMarket
              ? selectedCategory || selectedMarket
              : marketItem.market}
          </DropdownButton>
        ))}
      </ButtonGroup>
    );
  }
);
