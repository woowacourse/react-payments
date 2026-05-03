import { Global, ThemeProvider } from '@emotion/react';
import RegisterCard from './pages/RegisterCard';
import { theme } from './styles/theme';
import { globalStyles } from './styles/globalStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <RegisterCard />
    </ThemeProvider>
  );
}

export default App;
