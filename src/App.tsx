import styled from 'styled-components';
import CardNumberInput from './components/CardNumberInput';
import CardExpirationInput from './components/CardExpirationInput';
import CardOwnerInput from './components/CardOwnerInput';
import './styles/reset.css';

const CardForm = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

function App() {
  return (
    <CardForm>
      <CardNumberInput />
      <CardExpirationInput />
      <CardOwnerInput />
    </CardForm>
  );
}

export default App;
