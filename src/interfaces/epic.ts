import { Epic as EpicCore } from 'redux-observable';
import { AnyAction } from 'redux';

import { AppState } from 'store/createStore';
import api from 'services';

export type Epic = EpicCore<AnyAction, AnyAction, AppState, typeof api>;
