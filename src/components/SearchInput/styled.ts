import styled from 'styled-components';

import { SearchIcon as Icon } from 'components/Icon';

export const InputWrap = styled.div`
  position: relative;
  flex: 1px;
  color: #76808f;
`;

export const Input = styled.input`
  width: 100%;
  height: 28px;
  padding-left: 25px;
  border-bottom: 1px solid #eaecef;
  font-size: 14px;

  &::placeholder {
    font-size: 14px;
    color: #cccccc;
  }

  &:focus {
    border-bottom-color: #f0b90b;
  }
`;

export const SearchIcon = styled(Icon)`
  position: absolute;
  top: 4px;
  width: 20px;
  height: 20px;
`;
