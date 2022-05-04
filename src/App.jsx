import styled, { createGlobalStyle } from 'styled-components';
import CardAddPage from './pages/CardAddPage/';
import useModal from './hooks/useModal';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
  }

  body {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    background-color: #e5e5e5;
  }
  
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  #root {
    position: relative;
    background-color: #fff;
    width: 375px;
    min-width: 375px;
    height: 700px;
    position: relative;
    border-radius: 15px;
  }
`;

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
`;

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
