import React, { FC, CSSProperties } from 'react';
import { observer } from 'mobx-react-lite';

import { DisplayVolume } from 'interfaces/application';
import { Product } from 'models/entities/Product';

import { ProductWrap, Pair, FavoriteIcon, BaseAsset, LastPrice, Volume, Change } from './styled';

export interface ProductRowProps {
  product: Product;
  type: DisplayVolume;
  style: CSSProperties;
}

export interface ProductRowHadlers {
  onFavoriteIconClick: (symbol: string, value: boolean) => void;
}

export type ComponentProps = ProductRowProps & ProductRowHadlers;

export const ProductRow: FC<ComponentProps> = observer(
  ({ product, type, style, onFavoriteIconClick }) => (
    <ProductWrap data-testid="productItem" style={style}>
      <Pair>
        <FavoriteIcon
          active={product.favorite}
          onClick={() => onFavoriteIconClick(product.symbol, !product.favorite)}
        />
        <BaseAsset data-testid="baseAsset">{product.baseAsset}</BaseAsset>/{product.quoteAsset}
      </Pair>

      <LastPrice>
        {product.lastPrice ? product.lastPrice.toFixed(product.numberOfDecimals) : 0}
      </LastPrice>

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
