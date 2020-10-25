import { webSocket } from 'rxjs/webSocket';
import { Injectable } from 'mobx-di';

import constants from '../../constants';

@Injectable()
export class WSClient {
  subscribeProductUpdates<T>(path: string) {
    return webSocket<T>(`${constants.wsHost}/${path}`);
  }
}
