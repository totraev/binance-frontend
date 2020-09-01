import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ControlPanel, ControlPanelProps, ControlPanelHandlers } from 'components/ControlPanel';

import {
  displayFavoritesSelector,
  selectedMarketSelector,
  categorySelector,
  searchValueSelector,
  displayTypeSelector,
} from 'selectors/application';
import { marketsSelector } from 'selectors/application';
import { AppState } from 'store/createStore';
import {
  setCategory,
  setMarket,
  setDisplayFavorites,
  setSearchValue,
  setVolumeType,
} from 'store/slices/application';

const mapStateToProps = createStructuredSelector<AppState, ControlPanelProps>({
  displayFavorites: displayFavoritesSelector,
  selectedMarket: selectedMarketSelector,
  selectedCategory: categorySelector,
  searchValue: searchValueSelector,
  volumeType: displayTypeSelector,
  markets: marketsSelector,
});

const dispatchers: ControlPanelHandlers = {
  onProductChange: (market, category) => [
    setDisplayFavorites(false),
    setMarket(market),
    setCategory(category),
  ],
  onFavoriteProductsSelect: () => [setDisplayFavorites(true), setMarket(''), setCategory('')],
  onSearchValueChange: setSearchValue,
  onToggleChange: setVolumeType,
};

export const ControlPanelContainer = connect(mapStateToProps, dispatchers)(ControlPanel);
