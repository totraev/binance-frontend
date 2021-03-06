import styled from 'styled-components';
import classNames from 'classnames';

import { SortOrder } from 'interfaces/application';
import { SortIcon } from 'components/Icon';

interface LabelProps {
  textAlign?: 'left' | 'center' | 'right';
}

interface LabelSortIconProps {
  sortOrder?: SortOrder;
}

export const Label = styled.div<LabelProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ textAlign }) =>
    classNames({
      center: textAlign === 'center',
      'flex-end': textAlign === 'right',
      'flex-start': textAlign === 'left',
    })};
  color: #76808f;
  cursor: pointer;
`;

export const LabelText = styled.div`
  font-size: 14px;
`;

export const LabelSortIcon = styled(SortIcon).attrs<LabelSortIconProps>(({ sortOrder }) => ({
  arrowUpColor: sortOrder === SortOrder.DESC ? '#F0B90B' : '#76808F',
  arrowDownColor: sortOrder === SortOrder.ASC ? '#F0B90B' : '#76808F',
  sortOrder: undefined,
}))<LabelSortIconProps>``;

Label.defaultProps = {
  textAlign: 'left',
};
