import { HashRouter, Routes, Route } from 'react-router-dom';
import { CardInfoProvider } from './contexts/CardInfoProvider';
import styles from './App.module.css';
import CardNameDecision from './pages/CardNameDecision/CardNameDecision';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import CardRegistration from './pages/CardRegistration/CardRegistration';
import { BaeksulgiProvider, Baeksulgi } from 'baeksulgi';

const App = () => {
  return (
    <div className={styles.container}>
      <CardInfoProvider>
        <BaeksulgiProvider>
          <HashRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/card-registration" element={<CardRegistration />} />
              <Route path="/card-name-decision" element={<CardNameDecision />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </HashRouter>
          <Baeksulgi />
        </BaeksulgiProvider>
      </CardInfoProvider>
    </div>
  );
};

export default App;
