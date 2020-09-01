import styled from 'styled-components';

import { StarIcon } from 'components/Icon';

interface ChangeProps {
  value: number;
}

interface FavoriteIconProps {
  active?: boolean;
}

export const ProductWrap = styled.div`
  display: flex;
  color: #76808f;
  font-size: 14px;
  line-height: 24px;
  box-sizing: border-box;
  padding-right: 1px;
`;

export const FavoriteIcon = styled(StarIcon)<FavoriteIconProps>`
  cursor: pointer;
  margin-right: 5px;
  color: ${({ active }) => (active ? '#F0B90B' : '#76808F')};
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;

export const BaseAsset = styled.span`
  color: #1e2026;
`;

export const Pair = styled.div`
  display: flex;
  flex: 4;
  text-align: left;
  align-items: center;
`;

export const LastPrice = styled.div`
  flex: 3;
  text-align: left;
`;

export const Volume = styled.div`
  flex: 3;
  text-align: right;
`;

export const Change = styled.div<ChangeProps>`
  flex: 3;
  color: ${({ value }) => (value >= 0 ? '#75a700' : '#ea0070')};
  text-align: right;

  &::before {
    content: '${({ value }) => (value > 0 ? '+' : '')}';
  }

  &::after {
    content: '%';
  }
`;
