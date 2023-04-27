import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import RegisterCard from 'pages/RegisterCard';
import { GlobalStyle } from 'GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'components/style/theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
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
