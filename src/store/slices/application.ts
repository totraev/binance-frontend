import { createAction, createReducer } from '@reduxjs/toolkit';

import {
  ApplicationState,
  DisplayVolume,
  SortField,
  SortOrder,
  SortPayload,
  UpdatesStatus,
} from 'interfaces/application';
import { withPayload } from 'utils';

const initialState: ApplicationState = {
  isLoading: true,
  updatesStatus: UpdatesStatus.Disconnected,
  displayFavorites: false,
  selectedMarket: '',
  selectedCategory: '',
  search: '',
  type: DisplayVolume.Change,
  sortField: SortField.Symbol,
  sortOrder: SortOrder.ASC,
  favorites: {},
  error: '',
};

export const startLoading = createAction('app/startLoading', withPayload<void>());
export const stopLoading = createAction('app/stopLoading', withPayload<void>());
export const setMarket = createAction('app/setSelectedMarket', withPayload<string>());
export const setCategory = createAction('app/setCategory', withPayload<string>());
export const setSearchValue = createAction('app/setSearchValue', withPayload<string>());
export const setVolumeType = createAction('app/setVolumeType', withPayload<DisplayVolume>());
export const setSortField = createAction('app/setSortField', withPayload<SortPayload>());
export const addFavorite = createAction('app/addFavorite', withPayload<string>());
export const removeFavorite = createAction('app/removeFavorite', withPayload<string>());
export const setError = createAction('app/setError', withPayload<string>());
export const setDisplayFavorites = createAction('app/setDisplayFavorites', withPayload<boolean>());
export const setUpdatesStatus = createAction('app/setUpdatesStatus', withPayload<UpdatesStatus>());

const appReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(startLoading, (state) => {
      state.isLoading = true;
    })
    .addCase(stopLoading, (state) => {
      state.isLoading = false;
    })
    .addCase(setMarket, (state, { payload }) => {
      state.selectedMarket = payload;
    })
    .addCase(setCategory, (state, { payload }) => {
      state.selectedCategory = payload;
    })
    .addCase(setSearchValue, (state, { payload }) => {
      state.search = payload.trim().toUpperCase();
    })
    .addCase(setVolumeType, (state, { payload }) => {
      state.type = payload;
    })
    .addCase(addFavorite, (state, { payload }) => {
      state.favorites[payload] = true;
    })
    .addCase(removeFavorite, (state, { payload }) => {
      state.favorites[payload] = false;
    })
    .addCase(setError, (state, { payload }) => {
      state.error = payload;
    })
    .addCase(setSortField, (state, { payload }) => {
      state.sortField = payload.field;
      state.sortOrder = payload.order;
    })
    .addCase(setDisplayFavorites, (state, { payload }) => {
      state.displayFavorites = payload;
    })
    .addCase(setUpdatesStatus, (state, { payload }) => {
      state.updatesStatus = payload;
    })
);

export default appReducer;
