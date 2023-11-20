import { HelmetProvider } from 'react-helmet-async';
import { Router } from 'routes';
import { createGlobalStyle } from 'styled-components';

import reset from 'styled-reset';
import { AppProvider } from 'contexts/AppContext';

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    max-width: -webkit-fill-available;
  }
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #ececec;
  }
`;

export function Loader() {
  return (
    <HelmetProvider>
      <Router />
      <GlobalStyle />
    </HelmetProvider>
  );
}
