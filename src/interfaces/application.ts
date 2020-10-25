export enum DisplayVolume {
  Change = 'change',
  Volume = 'volume',
}

export enum SortingOrder {
  DESC = 'desc',
  ASC = 'asc',
}

export enum SortingField {
  Symbol = 'symbol',
  LastPrice = 'lastPrice',
  Volume = 'volume',
  Change = 'change',
}

export enum StatusUpdates {
  Connected,
  Connecting,
  Disconnected,
}

export interface ApplicationState {
  isLoading: boolean;
  updatesStatus: StatusUpdates;
  displayFavorites: boolean;
  selectedMarket: string;
  selectedCategory: string;
  search: string;
  type: DisplayVolume;
  sortField: SortingField;
  sortOrder: SortingOrder;
  favorites: { [symbol: string]: boolean };
  error: string;
}

export interface Market {
  market: string;
  categories: string[];
}

export interface SortPayload {
  field: SortingField;
  order: SortingOrder;
}
