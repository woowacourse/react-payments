import { HashRouter, Routes, Route } from 'react-router-dom';
import NotFound from '../pages/NotFound/NotFound';
import Home from '../pages/Home/Home';
import CardRegistration from '../pages/CardRegistration/CardRegistration';
import styles from './App.module.css';
import CardRegistrationConfirmation from '../pages/CardRegistrationConfirmation/CardRegistrationConfirmation';
import { CardProvider } from '../context/CardContext';
import useCardInfo from '../hook/useCardInfo';

const App = () => {
  const { cardInfo, registerNewCard } = useCardInfo();

  return (
    <div className={styles.container}>
      <CardProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home cardInfo={cardInfo} />} />
            <Route path="/card-registration" element={<CardRegistration />} />
            <Route
              path="/card-registration-confirmation"
              element={<CardRegistrationConfirmation registerNewCard={registerNewCard} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </CardProvider>
    </div>
  );
};

export default App;
