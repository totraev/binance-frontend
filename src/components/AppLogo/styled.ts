import styled from 'styled-components';
import breakpoints from 'styled-components-breakpoint';

export const SVG = styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  viewBox: '0 0 5120 1024',
})`
  width: 250px;
  height: 40px;
  fill: #f0b90b;
`;

export const LogoLink = styled.a`
  display: none;
  margin: 20px 0;

  ${breakpoints('tablet')`
    display: block;
  `}
`;
