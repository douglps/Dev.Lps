'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-image: ${({ theme }) => theme.bgimages.bgPages};
    background-size: contain;
    background-position: center center;
    background-attachment: fixed;
    background-repeat: no-repeat;
  }
`;

export default GlobalStyle;
