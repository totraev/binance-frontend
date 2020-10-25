import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0%, 40%, 100% {
    transform: scaleY(0.4);
  }

  20% {
    transform: scaleY(1.0);
  }
`;

export const LoaderWrap = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  margin: 0px;
`;

const LoaderStick = styled.div`
  box-sizing: border-box;
  background-color: #f0b90b;
  height: 100%;
  width: 3px;
  animation: ${animation} 1.2s infinite ease-in-out;
`;

export const LoaderStick1 = styled(LoaderStick)`
  animation-delay: -0.3s;
`;

export const LoaderStick2 = styled(LoaderStick)`
  animation-delay: -0.2s;
`;

export const LoaderStick3 = styled(LoaderStick)`
  animation-delay: -0.1s;
`;

export const LoaderStick4 = styled(LoaderStick)`
  animation-delay: 0s;
`;
