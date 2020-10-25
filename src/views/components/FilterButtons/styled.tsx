import React from 'react';
import styled from 'styled-components';

import { Button } from 'views/components/Button';
import { StarIcon } from 'views/components/Icon';

export const ButtonGroup = styled.div`
  display: flex;
`;
export const MarketButton = styled(Button)`
  margin: 5px 5px 0 5px;
`;

export const FavoritesButton = styled(MarketButton).attrs({
  children: <StarIcon />,
})`
  padding: 3px 5px 1px;
  margin-left: 0;
`;
