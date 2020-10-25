import { StatusUpdates } from 'interfaces/application';

export function buttonLabel(status: StatusUpdates) {
  switch (status) {
    case StatusUpdates.Connected:
      return 'Disconnect';
    case StatusUpdates.Connecting:
      return 'Wait...';
    case StatusUpdates.Disconnected:
      return 'Disconnected';
  }
}
