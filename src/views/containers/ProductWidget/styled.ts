import styled from 'styled-components';
import classNames from 'classnames';

import { StatusUpdates } from 'interfaces/application';
import { Button } from 'views/components/Button';

interface ConnectionStatusProps {
  status: StatusUpdates;
}

export const WidgetBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const WidgetHeader = styled.h3`
  display: flex;
  margin: 0;
  padding: 15px;
  border-bottom: 1px solid #eaecef;
  align-items: center;
`;

export const LoaderWrap = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const DisconnectButton = styled(Button)`
  margin-left: 10px;
  min-width: 100px;
`;

export const ConnectionStatus = styled.span<ConnectionStatusProps>`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-left: auto;
  background-color: ${({ status }) =>
    classNames({
      '#75a700': status === StatusUpdates.Connected,
      '#ea0070': status === StatusUpdates.Disconnected,
      '#F0B90B': status === StatusUpdates.Connecting,
    })};
`;

export const ErrorMessage = styled.div`
  color: #fff;
  background-color: #ea0070;
  padding: 10px 20px;
`;
