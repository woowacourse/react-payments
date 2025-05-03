import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardFormPages from './pages/CardFormPages';
import CardRegistrationComplete from './pages/CardRegistrationComplete';
import styles from './css/main.module.css';
import './css/index.css';

function App() {
  return (
    <>
      <BrowserRouter basename="/react-payments">
        <div className={styles.main}>
          <Routes>
            <Route path="/" element={<CardFormPages />} />
            <Route path="/complete" element={<CardRegistrationComplete />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
