import React, { FC, CSSProperties, memo } from 'react';

import { DisplayVolume } from 'interfaces/application';
import { Product } from 'interfaces/product';

import { ProductWrap, Pair, FavoriteIcon, BaseAsset, LastPrice, Volume, Change } from './styled';

export interface ProductRowProps {
  isFavorite?: boolean;
  product: Product;
  type: DisplayVolume;
  style: CSSProperties;
}

export interface ProductRowHadlers {
  onFavoriteIconClick: (symbol: string, value: boolean) => void;
}

export type ComponentProps = ProductRowProps & ProductRowHadlers;

export const ProductRow: FC<ComponentProps> = memo(
  ({ isFavorite, product, type, style, onFavoriteIconClick }) => (
    <ProductWrap data-testid="productItem" style={style}>
      <Pair>
        <FavoriteIcon
          active={isFavorite}
          onClick={() => onFavoriteIconClick(product.symbol, !isFavorite)}
        />
        <BaseAsset data-testid="baseAsset">{product.baseAsset}</BaseAsset>/{product.quoteAsset}
      </Pair>

      <LastPrice>{product.lastPrice ? product.lastPrice.toFixed(product.decimals) : 0}</LastPrice>

      {type === DisplayVolume.Volume && <Volume>{product.volume}</Volume>}

      {type === DisplayVolume.Change &&
        (!Number.isNaN(product.change) ? (
          <Change value={product.change}>{product.change.toFixed(2)}</Change>
        ) : (
          <Volume />
        ))}
    </ProductWrap>
  )
);

ProductRow.defaultProps = {
  isFavorite: false,
};
