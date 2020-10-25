import { Market } from 'interfaces/application';

export function hasMoreThenOneCaregory(market?: Market): boolean {
  return !!market && market.categories.length > 1;
}
