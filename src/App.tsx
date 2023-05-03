import { HashRouter, Routes, Route } from 'react-router-dom';
import { CardInfoProvider } from './contexts/CardInfoProvider';
import { ModalProvider } from './contexts/ModalProvider';
import styles from './App.module.css';
import CardNameDecision from './pages/CardNameDecision/CardNameDecision';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import CardRegistration from './pages/CardRegistration/CardRegistration';
import ModalBottomSheet from './components/common/ModalBottomSheet/ModalBottomSheet';

const App = () => {
  return (
    <div className={styles.container}>
      <CardInfoProvider>
        <ModalProvider>
          <HashRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/card-registration" element={<CardRegistration />} />
              <Route path="/card-name-decision" element={<CardNameDecision />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </HashRouter>
          <ModalBottomSheet />
        </ModalProvider>
      </CardInfoProvider>
    </div>
  );
};

export default App;
