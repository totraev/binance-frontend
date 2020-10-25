import React, { FC } from 'react';

import { LoaderWrap, LoaderStick1, LoaderStick2, LoaderStick3, LoaderStick4 } from './styled';

export const Loader: FC = () => (
  <LoaderWrap>
    <LoaderStick1 />
    <LoaderStick2 />
    <LoaderStick3 />
    <LoaderStick4 />
  </LoaderWrap>
);
