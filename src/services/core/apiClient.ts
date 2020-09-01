import { ajax } from 'rxjs/ajax';
import constants from '../../constants';

export class ApiClient {
  private apiUrl = `${constants.host}/exchange-api/v1`;

  get<T>(path: string) {
    return ajax.getJSON<T>(`${this.apiUrl}/${path}`);
  }
}

export default new ApiClient();
