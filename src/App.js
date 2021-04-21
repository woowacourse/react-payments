import { ThemeProvider } from '@emotion/react';
import GlobalStyle from './GlobalStyle';

const theme = {
  color: {
    normal: '#383838',
    label: '#525252',
    card: {
      companyName: '#383838',
      number: '#525252',
    },
  },
  bgColor: '#E5E5E5',
};

const App = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <></>
    </ThemeProvider>
  </>
);

export default App;
