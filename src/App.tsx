import './App.css';
import styled from 'styled-components';
import AddNewCardForm from './components/addNewCardForm/AddNewCardForm';

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <StyledApp>
      <AddNewCardForm />
    </StyledApp>
  );
}

export default App;
