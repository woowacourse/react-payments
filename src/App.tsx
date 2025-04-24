import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardFormPages from './pages/CardFromPages';
import CardRegistrationComplete from './pages/CardRegistrationComplete';
import styles from './css/main.module.css';
import useCardNumbers from './hooks/useCardNumbers';
import './css/index.css';

function App() {
  const cardNumbersProps = useCardNumbers();

  return (
    <>
      <BrowserRouter basename="/react-payments">
        <div className={styles.main}>
          <Routes>
            <Route path="/" element={<CardFormPages {...cardNumbersProps} />} />
            <Route
              path="/complete"
              element={
                <CardRegistrationComplete
                  firstNumber={cardNumbersProps.cardNumbers.firstNumber}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
