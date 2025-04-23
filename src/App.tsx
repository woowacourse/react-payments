import './App.css';
import styled from 'styled-components';
import AddNewCardForm from './components/main-page/addNewCardForm/AddNewCardForm';
import AnnounceForm from './components/card-registration-completed-page/AnnounceForm';

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <StyledApp>
      <AddNewCardForm />
      <AnnounceForm />
    </StyledApp>
  );
}

export default App;
