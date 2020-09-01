export enum DisplayVolume {
  Change = 'change',
  Volume = 'volume',
}

export enum SortOrder {
  DESC = 'desc',
  ASC = 'asc',
}

export enum SortField {
  Symbol = 'symbol',
  LastPrice = 'lastPrice',
  Volume = 'volume',
  Change = 'change',
}

export enum UpdatesStatus {
  Connected,
  Connecting,
  Disconnected,
}

export interface ApplicationState {
  isLoading: boolean;
  updatesStatus: UpdatesStatus;
  displayFavorites: boolean;
  selectedMarket: string;
  selectedCategory: string;
  search: string;
  type: DisplayVolume;
  sortField: SortField;
  sortOrder: SortOrder;
  favorites: { [symbol: string]: boolean };
  error: string;
}

export interface Market {
  market: string;
  categories: string[];
}

export interface SortPayload {
  field: SortField;
  order: SortOrder;
}
