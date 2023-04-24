import { HashRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import CardRegistration from './pages/CardRegistration';
import styles from './App.module.css';
import { useState } from 'react';
import type { CardInfo } from './types';

const App = () => {
  const [cardInfo, setCardInfo] = useState<CardInfo[]>([]);

  const registerNewCard = ({ cardNumber, cardExpirationDate, cardOwnerName }: CardInfo) => {
    setCardInfo(cardInfo => [...cardInfo, { cardNumber, cardExpirationDate, cardOwnerName }]);
  };

  return (
    <div className={styles.container}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home cardInfo={cardInfo} />}></Route>
          <Route path="/card-registration" element={<CardRegistration registerNewCard={registerNewCard} />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
