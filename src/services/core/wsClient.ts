import { webSocket } from 'rxjs/webSocket';

import constants from '../../constants';

export function webSocketClient<T>(path: string) {
  return webSocket<T>(`${constants.wsHost}/${path}`);
}

export type WSClient = typeof webSocketClient;
