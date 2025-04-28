import GlobalStyles from './styles/GlobalStyles';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import CardPage from './pages/CardPage/CardPage';
import CardCompletePage from './pages/CardCompletePage/CardCompletePage';
import { DEVELOPMENT_BASE_URL, PRODUCTION_BASE_URL, ROUTER } from './constants/router';

function App() {
  const basename =
    import.meta.env.MODE === 'production' ? PRODUCTION_BASE_URL : DEVELOPMENT_BASE_URL;

  return (
    <BrowserRouter basename={basename}>
      <GlobalStyles />
      <Routes>
        <Route path={ROUTER.DEFAULT} element={<CardPage />} />
        <Route path={ROUTER.COMPLETE} element={<CardCompletePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
