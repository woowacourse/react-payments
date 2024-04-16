import styled from 'styled-components';
import CardNumberInput from './components/CardNumberInput';
import CardExpirationInput from './components/CardExpirationInput';
import CardOwnerInput from './components/CardOwnerInput';
import CardPreviewBox from './components/CardPreviewBox';
import './styles/reset.css';

const AppContainer = styled.div`
  padding: 77px 30px;
`;

const CardForm = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  margin-top: 45px;
`;

function App() {
  return (
    <AppContainer>
      <CardPreviewBox />
      <CardForm>
        <CardNumberInput />
        <CardExpirationInput />
        <CardOwnerInput />
      </CardForm>
    </AppContainer>
  );
}

export default App;
