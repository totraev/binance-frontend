import { SortField, SortOrder } from 'interfaces/application';
import { Product } from 'interfaces/product';

export function compareProductSymbols(a: Product, b: Product) {
  const result = a.baseAsset.localeCompare(b.baseAsset);

  return result !== 0 ? result : a.quoteAsset.localeCompare(b.quoteAsset);
}

export function createProductComparator(sortField: SortField, sortOrder: SortOrder) {
  return (a: Product, b: Product) => {
    switch (sortField) {
      case SortField.Symbol:
        return sortOrder === SortOrder.ASC
          ? compareProductSymbols(a, b)
          : compareProductSymbols(b, a);
      case SortField.LastPrice:
      case SortField.Volume:
      case SortField.Change:
        return sortOrder === SortOrder.ASC
          ? a[sortField] - b[sortField]
          : b[sortField] - a[sortField];
      default:
        return 0;
    }
  };
}

export function calculateChange(openPrice: number, lastPrice: number) {
  return ((openPrice - lastPrice) * 100) / openPrice;
}

export function withPayload<T>() {
  return (t: T) => ({ payload: t });
}

export function getNumberOfDecimals(epsilon: number): number {
  const precision = epsilon.toExponential(0);
  const [, decimals] = precision.split('e-');

  return decimals ? parseInt(decimals, 10) : 0;
}
