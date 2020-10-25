import styled from 'styled-components';

import { AngleIcon as Icon } from 'views/components/Icon';

interface DropdownItemProps {
  active?: boolean;
}

export const DropdownContainer = styled.div`
  display: inline-block;
  position: relative;
  margin: 5px 5px 0 5px;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  background-color: #ffffff;
  z-index: 9999;
  border: 1px solid #eaecef;
`;

export const DropdownItem = styled.div<DropdownItemProps>`
  display: flex;
  font-size: 13px;
  padding: 4px 5px;
  color: ${({ active }) => (active ? '#F0B90B' : '#76808F')};
  cursor: pointer;
  font-weight: 600;

  &:hover {
    color: ${({ active }) => (active ? '#F0B90B' : '#1E2026')};
    background-color: #e6e6e6;
  }
`;

export const AngleIcon = styled(Icon)`
  width: 10px;
  height: 10px;
  fill: currentColor;
`;

DropdownItem.defaultProps = {
  active: false,
};
