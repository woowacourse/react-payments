import { Global, ThemeProvider } from '@emotion/react';
import RegisterCard from './pages/RegisterCard';
import { theme } from './styles/theme';
import { globalStyles } from './styles/globalStyles';
import CardRegistrationComplete from './pages/CardRegistrationComplete';
import { Route, Routes } from 'react-router-dom';
import UserCardList from './pages/UserCardList';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Routes>
        <Route path="/" element={<UserCardList />} />
        <Route path="/register" element={<RegisterCard />} />
        <Route path="/complete" element={<CardRegistrationComplete />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
