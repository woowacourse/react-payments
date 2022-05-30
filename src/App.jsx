import { Routes, Route, Navigate } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import CardListPage from 'pages/CardListPage';
import CardAddPage from 'pages/CardAddPage/';
import CardAddCompletionPage from 'pages/CardAddCompletionPage';
import { GlobalStyle, theme } from 'styles';
import { CardListProvider } from 'context/cardList';
import useModal from 'hooks/useModal';
import { ID } from 'constant/selector';
import PATH from 'constant/path';

const ModalContainer = styled.div`
  visibility: ${props => props.visibility};
  position: absolute;
  top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.4);
  overflow: hidden;
`;

function App() {
  const { isOpenModal, openModal, closeModal } = useModal();

  const handleClickModalContainer = ({ target }) => {
    if (target.id !== ID.MODAL_CONTAINER) {
      return;
    }

    closeModal();
  };

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <ThemeProvider theme={theme}>
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
            id={ID.MODAL_CONTAINER}
            visibility={isOpenModal ? 'visible' : 'hidden'}
            onClick={handleClickModalContainer}
          />
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
