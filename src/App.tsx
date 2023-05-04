import { Routes, Route } from 'react-router-dom';
import { ModalProvider } from '@ashleysyheo/react-modal';
import CardAddPage from './pages/CardAddPage';
import CardListPage from './pages/CardListPage';
import CardRegisteredPage from './pages/CardRegisteredPage';
import NotFoundPage from './pages/NotFoundPage';
import { CardListProvider } from './contexts/CardListContext';
import { PATH } from './constants';

const App = () => {
  return (
    <ModalProvider>
      <CardListProvider>
        <div className="app">
          <Routes>
            <Route path={PATH.ROOT} element={<CardListPage />} />
            <Route path={PATH.ADD} element={<CardAddPage />} />
            <Route path={PATH.REGISTER} element={<CardRegisteredPage />} />
            <Route path={PATH.NOT_FOUND} element={<NotFoundPage />} />
          </Routes>
        </div>
      </CardListProvider>
    </ModalProvider>
  );
};

export default App;
