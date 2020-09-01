import styled from 'styled-components';

interface ButtonProps {
  active?: boolean;
}

export const Button = styled.button<ButtonProps>`
  color: ${({ active }) => (active ? '#1E2026' : '#76808F')};
  background-color: ${({ active }) => (active ? '#E6E6E6' : '')};
  font-weight: 600;
  padding: 4px 5px;
  border-radius: 3px;
  cursor: pointer;
  line-height: 19px;

  &:hover {
    background-color: #e6e6e6;
    color: #1e2026;
  }

  &:disabled {
    background-color: #e6e6e6;
    color: #1e2026;
    opacity: 0.5;
    cursor: default;
  }
`;

Button.defaultProps = {
  active: false,
};
