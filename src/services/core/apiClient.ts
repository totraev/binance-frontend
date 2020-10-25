import { ajax } from 'rxjs/ajax';
import { Injectable } from 'mobx-di';

import constants from '../../constants';

@Injectable()
export class ApiClient {
  private apiUrl = `${constants.host}/exchange-api/v1`;

  get<T>(path: string) {
    return ajax.getJSON<T>(`${this.apiUrl}/${path}`);
  }
}
