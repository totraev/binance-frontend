import React, { FC, memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { isLoadingSelector, updatesStatusSelector, errorSelector } from 'selectors/application';
import { fetchProducts, disconnectProductUpdates } from 'store/slices/products';

import { UpdatesStatus } from 'interfaces/application';
import { Loader } from 'components/Loader';
import { ControlPanelContainer } from 'containers/ControlPanel';
import { ProductTableContainer } from 'containers/ProductTable';

import { buttonLabel } from './helpers';
import {
  DisconnectButton,
  WidgetBody,
  WidgetHeader,
  LoaderWrap,
  ConnectionStatus,
  ErrorMessage,
} from './styled';

export const ProductWidgetContainer: FC = memo(() => {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelector);
  const status = useSelector(updatesStatusSelector);
  const error = useSelector(errorSelector);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  function handleDisconnectButtonClick() {
    dispatch(disconnectProductUpdates());
  }

  return (
    <WidgetBody>
      <WidgetHeader>
        Market
        <ConnectionStatus status={status} />
        <DisconnectButton
          disabled={status !== UpdatesStatus.Connected}
          onClick={handleDisconnectButtonClick}
        >
          {buttonLabel(status)}
        </DisconnectButton>
      </WidgetHeader>

      {!isLoading && !error && <ControlPanelContainer />}
      {!isLoading && !error && <ProductTableContainer />}

      {isLoading && !error && (
        <LoaderWrap>
          <Loader />
        </LoaderWrap>
      )}

      {!!error && <ErrorMessage>{error}</ErrorMessage>}
    </WidgetBody>
  );
});
