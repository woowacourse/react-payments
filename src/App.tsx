import './App.css';
import styled from 'styled-components';
import AddNewCardForm from './components/main-page/addNewCardForm/AddNewCardForm';
import AnnounceForm from './components/card-registration-completed-page/AnnounceForm';
import { CardInfoProvider } from './components/main-page/CardInfoContext';

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <CardInfoProvider>
      <StyledApp>
        <AddNewCardForm />
        <AnnounceForm />
      </StyledApp>
    </CardInfoProvider>
  );
}

export default App;
