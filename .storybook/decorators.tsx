import { Global, ThemeProvider } from '@emotion/react';
import React from 'react';
import GlobalStyle from '../src/styles/globalStyle';
import theme from '../src/styles/theme';

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <Story {...context} />
    </ThemeProvider>
  );
};

export default withThemeProvider;
