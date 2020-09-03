import { of, throwError, concat } from 'rxjs';
import {
  filter,
  mergeMap,
  switchMap,
  catchError,
  takeUntil,
  mergeMapTo,
  delay,
} from 'rxjs/operators';

import { UpdatesStatus } from 'interfaces/application';
import { Epic } from 'interfaces/epic';

import { setError, stopLoading, setUpdatesStatus, startLoading } from 'store/slices/application';
import {
  connectProductUpdates,
  disconnectProductUpdates,
  fetchProducts,
  setProducts,
  updateProducts,
} from 'store/slices/products';

import { RECONNECT_TIMEOUT, FORCE_CLOSED } from '../constants';

export const fetchProductsEpic: Epic = (action$, _, api) =>
  action$.pipe(
    filter(fetchProducts.match),
    switchMap(() =>
      concat(
        of(setError(''), startLoading()),
        api.products.getProducts().pipe(
          mergeMap((products) => of(setProducts(products), stopLoading(), connectProductUpdates())),
          catchError((err) => of(setError(err.message), stopLoading()))
        )
      )
    )
  );

export const productUpdatesEpic: Epic = (action$, state$, api) =>
  action$.pipe(
    filter(connectProductUpdates.match),
    switchMap(() =>
      concat(
        of(setUpdatesStatus(UpdatesStatus.Connecting)),
        api.products.getProductUpdates().pipe(
          mergeMap((updates) =>
            state$.value.app.updatesStatus === UpdatesStatus.Connecting
              ? of(updateProducts(updates), setUpdatesStatus(UpdatesStatus.Connected))
              : of(updateProducts(updates))
          ),
          takeUntil(
            action$.pipe(
              filter(disconnectProductUpdates.match),
              mergeMapTo(throwError(new Error(FORCE_CLOSED)))
            )
          ),
          catchError((err) =>
            concat(
              of(setUpdatesStatus(UpdatesStatus.Disconnected)),
              of(setError(err.message)),
              of(fetchProducts()).pipe(delay(RECONNECT_TIMEOUT))
            )
          )
        )
      )
    )
  );
