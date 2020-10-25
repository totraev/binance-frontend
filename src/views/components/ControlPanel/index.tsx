import React, { FC, FormEvent } from 'react';

import { DisplayVolume, Market } from 'interfaces/application';
import { FilterButtons } from 'views/components/FilterButtons';
import { SearchInput } from 'views/components/SearchInput';

import { PanelWrap, FiltersGroup, StyledToggle } from './styled';

export interface ControlPanelProps {
  displayFavorites: boolean;
  selectedMarket: string;
  selectedCategory: string;
  searchValue: string;
  markets: Market[];
  volumeType: DisplayVolume;
}

export interface ControlPanelHandlers {
  onProductChange: (market: string, category: string) => void;
  onToggleChange: (value: DisplayVolume) => void;
  onSearchValueChange: (value: string) => void;
  onFavoriteProductsSelect: () => void;
}

export type ComponentProps = ControlPanelProps & ControlPanelHandlers;

export const ControlPanel: FC<ComponentProps> = ({
  volumeType,
  searchValue,
  displayFavorites,
  markets,
  selectedMarket,
  selectedCategory,
  onProductChange,
  onFavoriteProductsSelect,
  onSearchValueChange,
  onToggleChange,
}) => {
  function handleSearchInputChange({ currentTarget }: FormEvent<HTMLInputElement>) {
    onSearchValueChange(currentTarget.value);
  }

  return (
    <PanelWrap>
      <FilterButtons
        displayFavorites={displayFavorites}
        markets={markets}
        selectedMarket={selectedMarket}
        selectedCategory={selectedCategory}
        onProductSelect={onProductChange}
        onFavoriteProductsSelect={onFavoriteProductsSelect}
      />

      <FiltersGroup>
        <SearchInput
          data-testid="searchInput"
          value={searchValue}
          onChange={handleSearchInputChange}
        />

        <StyledToggle value={volumeType} onSelect={onToggleChange} />
      </FiltersGroup>
    </PanelWrap>
  );
};
