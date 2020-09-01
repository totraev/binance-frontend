import { UpdatesStatus } from 'interfaces/application';

export function buttonLabel(status: UpdatesStatus) {
  switch (status) {
    case UpdatesStatus.Connected:
      return 'Disconnect';
    case UpdatesStatus.Connecting:
      return 'Wait...';
    case UpdatesStatus.Disconnected:
      return 'Disconnected';
  }
}
