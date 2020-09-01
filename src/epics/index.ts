import { combineEpics } from 'redux-observable';

import { fetchProductsEpic, productUpdatesEpic } from './products';

export default combineEpics(fetchProductsEpic, productUpdatesEpic);
