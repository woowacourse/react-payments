import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import RegisterCard from 'pages/RegisterCard';
import { GlobalStyles } from 'GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'components/style/theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterCard />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
