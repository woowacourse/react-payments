import { useContext } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { CardInfoProvider } from './CardInfoProvider';
import type { CardInfo } from './types';
import { ModalProvider } from './ModalProvider';
import { CardInfoContext } from './CardInfoProvider';
import styles from './App.module.css';
import CardNameDecision from './pages/CardNameDecision';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import CardRegistration from './pages/CardRegistration';
import useCardLocalStorage from './hooks/useCardLocalStorage';
import ModalBottomSheet from './components/common/ModalBottomSheet/ModalBottomSheet';

const App = () => {
  const { cards, saveCardToLocalStorage } = useCardLocalStorage();

  return (
    <div className={styles.container}>
      <CardInfoProvider>
        <ModalProvider>
          <HashRouter>
            <Routes>
              <Route path="/" element={<Home cardInfo={cards} />}></Route>
              <Route path="/card-registration" element={<CardRegistration />}></Route>
              <Route
                path="/card-name-decision"
                element={<CardNameDecision saveCardToLocalStorage={saveCardToLocalStorage} />}
              ></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </HashRouter>
          <ModalBottomSheet />
        </ModalProvider>
      </CardInfoProvider>
    </div>
  );
};

export default App;
