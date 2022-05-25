import { Routes, Route, Navigate } from 'react-router-dom';
import CardListPage from 'pages/CardListPage';
import CardAddPage from './pages/CardAddPage/';
import CardAddCompletionPage from 'pages/CardAddCompletionPage';
import { GlobalStyle, ModalContainer } from './style';
import { CardListProvider } from './context/cardList';
import useModal from './hooks/useModal';
import PATH from 'constant/path';

function App() {
  const { isOpenModal, openModal, closeModal } = useModal();

  const handleClickModalContainer = ({ target }) => {
    if (target.id !== 'modal-container') {
      return;
    }

    closeModal();
  };

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <CardListProvider>
          <Routes>
            <Route path={PATH.ROOT} element={<Navigate replace to={PATH.CARD_LIST} />} />
            <Route path={PATH.CARD_LIST} element={<CardListPage />} />
            <Route
              path={PATH.CARD_ADD}
              element={
                <CardAddPage
                  isOpenModal={isOpenModal}
                  openModal={openModal}
                  closeModal={closeModal}
                />
              }
            />
            <Route path={PATH.CARD_ADD_COMPLETION} element={<CardAddCompletionPage />} />
          </Routes>
        </CardListProvider>
        <ModalContainer
          id="modal-container"
          visibility={isOpenModal ? 'visible' : 'hidden'}
          onClick={handleClickModalContainer}
        />
      </div>
    </>
  );
}

export default App;
