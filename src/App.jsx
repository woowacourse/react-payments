import { Routes, Route } from 'react-router-dom';
import CardAddPage from './pages/CardAddPage/';
import CardAddCompletionPage from 'pages/CardAddCompletionPage';
import { GlobalStyle, ModalContainer } from './style';
import useModal from './hooks/useModal';

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
        <Routes>
          <Route
            path="/"
            element={
              <CardAddPage
                isOpenModal={isOpenModal}
                openModal={openModal}
                closeModal={closeModal}
              />
            }
          />
          <Route path="cardAddCompletion" element={<CardAddCompletionPage />} />
        </Routes>
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
