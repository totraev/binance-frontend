import React, { FC, useMemo } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';

import { SortOrder, SortField, DisplayVolume, SortPayload } from 'interfaces/application';
import { Product } from 'interfaces/product';

import { TableHeader } from 'components/TableHeader';
import { ProductRow } from 'components/ProductRow';

import { TableWrap, TableBody, EmptyMessage } from './styled';

export interface ProductTableProps {
  sortField: SortField;
  sortOrder: SortOrder;
  type: DisplayVolume;
  products: Product[];
  favorites: { [symbol: string]: boolean };
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
      isFavorite={data.favorites[product.symbol]}
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
  favorites,
  products,
  onSortFieldChange,
  onFavoriteProductChange,
}) => {
  const itemData = useMemo(
    () => ({
      type,
      products,
      favorites,
      onFavoriteProductChange,
    }),
    [favorites, products, onFavoriteProductChange, type]
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
