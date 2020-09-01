import styled, { css } from 'styled-components';

interface RadioButtonProps {
  active?: boolean;
}

export const ToggleWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const RadioButton = styled.button<RadioButtonProps>`
  width: 12px;
  height: 12px;
  border: 1px solid ${({ active }) => (active ? '#F0B90B' : '#76808F')};
  border-radius: 50%;
  cursor: pointer;

  ${({ active }) =>
    active &&
    css`
      &:after {
        content: '';
        display: block;
        width: 6px;
        height: 6px;
        background-color: #f0b90b;
        margin: 2px;
        border-radius: 50%;
      }
    `}
`;

export const RadioLabel = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #76808f;
  white-space: nowrap;
  cursor: pointer;
  margin-left: 15px;
`;

RadioButton.defaultProps = {
  active: false,
};
