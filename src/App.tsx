import './reset.css';
import AddCard from './pages/AddCard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { Confirm } from './pages/Confirm';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/react-payments">
        <Routes>
          <Route path="/" element={<AddCard />} />
          <Route path="/confirm" element={<Confirm />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
