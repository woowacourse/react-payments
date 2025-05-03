import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardFormPages from './pages/CardFormPages';
import CardRegistrationComplete from './pages/CardRegistrationComplete';
import styles from './css/main.module.css';
import './css/index.css';
import { ROUTES } from './constants/routes';

function App() {
  return (
    <>
      <BrowserRouter basename="/react-payments">
        <div className={styles.main}>
          <Routes>
            <Route path={ROUTES.COMPLETE} element={<CardFormPages />} />
            <Route path={ROUTES.HOME} element={<CardRegistrationComplete />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
