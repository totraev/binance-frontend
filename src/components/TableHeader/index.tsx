import React, { FC, memo } from 'react';

import { SortOrder, SortField, DisplayVolume } from 'interfaces/application';
import { TableLabel } from 'components/TableLabel';

import { TableHeaderWrap, TableHeaderCell } from './styled';

export interface TableHeaderProps {
  sortField: SortField;
  sortOrder: SortOrder;
  type: DisplayVolume;
  onSortChange: (value: { field: SortField; order: SortOrder }) => void;
}

export const TableHeader: FC<TableHeaderProps> = memo(
  ({ sortField, sortOrder, type, onSortChange }) => {
    function handleSortChange(field: SortField) {
      const order =
        sortField === field && sortOrder === SortOrder.DESC ? SortOrder.ASC : SortOrder.DESC;

      return () => onSortChange({ field, order });
    }

    return (
      <TableHeaderWrap>
        <TableHeaderCell flex={4}>
          <TableLabel
            textAlign="left"
            sortOrder={sortField === SortField.Symbol ? sortOrder : undefined}
            onClick={handleSortChange(SortField.Symbol)}
          >
            Pair
          </TableLabel>
        </TableHeaderCell>

        <TableHeaderCell flex={3}>
          <TableLabel
            textAlign="left"
            sortOrder={sortField === SortField.LastPrice ? sortOrder : undefined}
            onClick={handleSortChange(SortField.LastPrice)}
          >
            Last Price
          </TableLabel>
        </TableHeaderCell>

        {type === DisplayVolume.Volume && (
          <TableHeaderCell flex={3}>
            <TableLabel
              textAlign="right"
              sortOrder={sortField === SortField.Volume ? sortOrder : undefined}
              onClick={handleSortChange(SortField.Volume)}
            >
              Volume
            </TableLabel>
          </TableHeaderCell>
        )}

        {type === DisplayVolume.Change && (
          <TableHeaderCell flex={3}>
            <TableLabel
              textAlign="right"
              sortOrder={sortField === SortField.Change ? sortOrder : undefined}
              onClick={handleSortChange(SortField.Change)}
            >
              Change
            </TableLabel>
          </TableHeaderCell>
        )}
      </TableHeaderWrap>
    );
  }
);
