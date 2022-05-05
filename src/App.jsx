import CardAddPage from './pages/CardAddPage/';
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
        <CardAddPage isOpenModal={isOpenModal} openModal={openModal} closeModal={closeModal} />
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
