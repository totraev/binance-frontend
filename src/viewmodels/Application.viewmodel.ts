import { action, observable } from 'mobx';
import { Injectable } from 'mobx-di';

import { StatusUpdates } from 'interfaces/application';

@Injectable()
export class ApplicationViewModel {
  @observable isLoading = true;
  @observable status = StatusUpdates.Disconnected;
  @observable error = '';

  @action startLoading() {
    this.isLoading = true;
  }

  @action stopLoading() {
    this.isLoading = false;
  }

  @action setUpdatesStatus(status: StatusUpdates) {
    this.status = status;
  }

  @action setError(msg: string) {
    this.error = msg;
  }
}
