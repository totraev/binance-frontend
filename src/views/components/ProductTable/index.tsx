import React, { FC, useMemo } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';

import { SortingOrder, SortingField, DisplayVolume, SortPayload } from 'interfaces/application';
import { Product } from 'models/entities/Product';

import { TableHeader } from 'views/components/TableHeader';
import { ProductRow } from 'views/components/ProductRow';

import { TableWrap, TableBody, EmptyMessage } from './styled';

export interface ProductTableProps {
  sortField: SortingField;
  sortOrder: SortingOrder;
  type: DisplayVolume;
  products: Product[];
}

export interface ProductTableHandlers {
  onSortFieldChange: (field: SortPayload) => void;
  onFavoriteProductChange: (symbol: string, value: boolean) => void;
}

export type ComponetProps = ProductTableProps & ProductTableHandlers;

const RenderRow: FC<ListChildComponentProps> = ({ index, data, style }) => {
  const product = data.products[index];

  return (
    <ProductRow
      style={style}
      type={data.type}
      product={product}
      onFavoriteIconClick={data.onFavoriteProductChange}
    />
  );
};

export const ProductTable: FC<ComponetProps> = ({
  type,
  sortField,
  sortOrder,
  products,
  onSortFieldChange,
  onFavoriteProductChange,
}) => {
  const itemData = useMemo(
    () => ({
      type,
      products,
      onFavoriteProductChange,
    }),
    [products, onFavoriteProductChange, type]
  );

  return (
    <TableWrap>
      <TableHeader
        type={type}
        sortField={sortField}
        sortOrder={sortOrder}
        onSortChange={onSortFieldChange}
      />

      <TableBody>
        {products.length > 0 && (
          <AutoSizer>
            {({ height, width }) => (
              <List
                width={width}
                height={height}
                itemCount={products.length}
                itemData={itemData}
                itemSize={24}
                itemKey={(index, data) => data.products[index].symbol}
                className="test"
              >
                {RenderRow}
              </List>
            )}
          </AutoSizer>
        )}

        {products.length === 0 && <EmptyMessage>No data</EmptyMessage>}
      </TableBody>
    </TableWrap>
  );
};

ProductTable.defaultProps = {
  products: [],
};
