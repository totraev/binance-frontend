import styled from 'styled-components';
import breakpoints from 'styled-components-breakpoint';

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #fafafa;
`;

export const AppContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 40px;

  ${breakpoints('tablet')`
    width: 400px;
    height: 600px;
  `}
`;
