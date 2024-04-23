import './App.css';

import CardForm from './components/CardForm';
import CardPreview from './components/CardPreview';
import styled from '@emotion/styled';
import useCardInfo from './hooks/useCardInfo';

function App() {
  const { cardInfo, setCardNumbers, setCardExpiredDate, setCardHolder } =
    useCardInfo();

  return (
    <Payments>
      <CardPreview cardInfo={cardInfo} />
      <CardForm
        setCardNumbers={setCardNumbers}
        setCardExpiredDate={setCardExpiredDate}
        setCardHolder={setCardHolder}
      />
    </Payments>
  );
}

export default App;

const Payments = styled.section({
  width: '315px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '30px',

  margin: 'auto',
  marginTop: '30px',
  padding: '100px',
  backgroundColor: 'white',
});
