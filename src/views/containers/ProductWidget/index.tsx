import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { ControlPanelContainer } from 'views/containers/ControlPanelContainer';
import { ProductTableContainer } from 'views/containers/ProductTableContainer';
import { Loader } from 'views/components/Loader';

import { useInstance } from 'views/hooks/useInstance';
import { ApplicationViewModel } from 'viewmodels/Application.viewmodel';
import { ProductViewModel } from 'viewmodels/Product.viewmodel';

import { StatusUpdates } from 'interfaces/application';
import { buttonLabel } from './helpers';
import {
  DisconnectButton,
  WidgetBody,
  WidgetHeader,
  LoaderWrap,
  ConnectionStatus,
  ErrorMessage,
} from './styled';

export const ProductWidgetContainer = observer(() => {
  const app = useInstance(ApplicationViewModel);
  const product = useInstance(ProductViewModel);

  useEffect(() => {
    app.startLoading();
    app.setUpdatesStatus(StatusUpdates.Disconnected);

    product
      .fetchProducts()
      .then(() => {
        app.stopLoading();
        app.setUpdatesStatus(StatusUpdates.Connecting);

        return product.connectProductUpdates();
      })
      .then(() => {
        app.setUpdatesStatus(StatusUpdates.Connected);
      });

    return () => product.disconnectProductUpdates();
  }, [product, app]);

  return (
    <WidgetBody>
      <WidgetHeader>
        Market
        <ConnectionStatus status={app.status} />
        <DisconnectButton
          disabled={app.status !== StatusUpdates.Connected}
          //onClick={handleDisconnectButtonClick}
        >
          {buttonLabel(app.status)}
        </DisconnectButton>
      </WidgetHeader>

      {!app.isLoading && !app.error && <ControlPanelContainer />}
      {!app.isLoading && !app.error && <ProductTableContainer />}

      {app.isLoading && !app.error && (
        <LoaderWrap>
          <Loader />
        </LoaderWrap>
      )}

      {!!app.error && <ErrorMessage>{app.error}</ErrorMessage>}
    </WidgetBody>
  );
});
