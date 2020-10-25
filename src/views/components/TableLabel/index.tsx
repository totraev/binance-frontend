import React, { FC } from 'react';

import { SortingOrder } from 'interfaces/application';
import { Label, LabelText, LabelSortIcon } from './styled';

export interface TableLabelProps {
  sortOrder?: SortingOrder;
  className?: string;
  onClick?: () => void;
  textAlign?: 'left' | 'center' | 'right';
}

export const TableLabel: FC<TableLabelProps> = ({ children, sortOrder, ...lableProps }) => (
  <Label {...lableProps}>
    <LabelText>{children}</LabelText>
    <LabelSortIcon sortOrder={sortOrder} />
  </Label>
);
