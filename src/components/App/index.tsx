import React, { FC } from 'react';

import { AppWrapper, AppContainer } from './styled';

import { AppLogo } from 'components/AppLogo';
import { ProductWidgetContainer } from 'containers/ProductWidget';

export const App: FC = () => {
  return (
    <AppWrapper>
      <AppLogo />

      <AppContainer>
        <ProductWidgetContainer />
      </AppContainer>
    </AppWrapper>
  );
};
