import { Global, ThemeProvider } from '@emotion/react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import RegisterCard from './pages/RegisterCard';
import RegisterComplete from './pages/RegisterComplete';
import { theme } from './styles/theme';
import { globalStyles } from './styles/globalStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterCard />} />
          <Route path="/complete" element={<RegisterComplete />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
