import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Home from './pages/Home';
import AddCard from './pages/AddCard';
import RegisterCard from './pages/RegisterCard';
import CardProvider from './context/CardProvider';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CardProvider>
        <Router basename={process.env.PUBLIC_URL}>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-card" element={<AddCard />} />
            <Route path="/register-card" element={<RegisterCard />} />
          </Routes>
        </Router>
      </CardProvider>
    </ThemeProvider>
  );
}

export default App;
