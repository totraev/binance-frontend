import React, { FC } from 'react';

import { SortOrder } from 'interfaces/application';
import { Label, LabelText, LabelSortIcon } from './styled';

export interface TableLabelProps {
  sortOrder?: SortOrder;
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
