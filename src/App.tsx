import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import RegisterCard from 'pages/RegisterCard';
import { GlobalStyles } from 'GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'components/style/theme';
import { RegisterCardNickName } from 'pages/RegisterCardNickName';
import { UserCardProvider } from 'contexts/UserCardProvider';

function App() {
  return (
    <div className="App">
      <UserCardProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<RegisterCard />} />
              <Route path="/register-nickname" element={<RegisterCardNickName />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </UserCardProvider>
    </div>
  );
}

export default App;
