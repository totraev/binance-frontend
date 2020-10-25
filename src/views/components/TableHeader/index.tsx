import React, { FC, memo } from 'react';

import { SortingOrder, SortingField, DisplayVolume } from 'interfaces/application';
import { TableLabel } from 'views/components/TableLabel';

import { TableHeaderWrap, TableHeaderCell } from './styled';

export interface TableHeaderProps {
  sortField: SortingField;
  sortOrder: SortingOrder;
  type: DisplayVolume;
  onSortChange: (value: { field: SortingField; order: SortingOrder }) => void;
}

export const TableHeader: FC<TableHeaderProps> = memo(
  ({ sortField, sortOrder, type, onSortChange }) => {
    function handleSortChange(field: SortingField) {
      const order =
        sortField === field && sortOrder === SortingOrder.DESC
          ? SortingOrder.ASC
          : SortingOrder.DESC;

      return () => onSortChange({ field, order });
    }

    return (
      <TableHeaderWrap>
        <TableHeaderCell flex={4}>
          <TableLabel
            textAlign="left"
            sortOrder={sortField === SortingField.Symbol ? sortOrder : undefined}
            onClick={handleSortChange(SortingField.Symbol)}
          >
            Pair
          </TableLabel>
        </TableHeaderCell>

        <TableHeaderCell flex={3}>
          <TableLabel
            textAlign="left"
            sortOrder={sortField === SortingField.LastPrice ? sortOrder : undefined}
            onClick={handleSortChange(SortingField.LastPrice)}
          >
            Last Price
          </TableLabel>
        </TableHeaderCell>

        {type === DisplayVolume.Volume && (
          <TableHeaderCell flex={3}>
            <TableLabel
              textAlign="right"
              sortOrder={sortField === SortingField.Volume ? sortOrder : undefined}
              onClick={handleSortChange(SortingField.Volume)}
            >
              Volume
            </TableLabel>
          </TableHeaderCell>
        )}

        {type === DisplayVolume.Change && (
          <TableHeaderCell flex={3}>
            <TableLabel
              textAlign="right"
              sortOrder={sortField === SortingField.Change ? sortOrder : undefined}
              onClick={handleSortChange(SortingField.Change)}
            >
              Change
            </TableLabel>
          </TableHeaderCell>
        )}
      </TableHeaderWrap>
    );
  }
);
