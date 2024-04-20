import { useState } from 'react';
import './App.css';
import './reset.css';
import InputGroup from './components/InputGroup';
import CardImage from './components/CardImage';
import { css } from '@emotion/react';

const appContainerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'start',
  padding: '31px',
  gap: '45px',
  width: '376px',
});

const appStyle = css({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const appInputStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  width: '100%',
});

function App() {
  const [cardNumber, setCardNumber] = useState(['']);
  const [cardPeriod, setCardPeriod] = useState(['']);
  const [cardOwner, setCardOwner] = useState(['']);

  return (
    <div css={appStyle}>
      <div css={appContainerStyle}>
        <CardImage cardNumber={cardNumber} cardPeriod={cardPeriod} cardOwner={cardOwner} />
        <form css={appInputStyle}>
          <InputGroup setState={setCardNumber} informationSection="number" />
          <InputGroup setState={setCardPeriod} informationSection="period" />
          <InputGroup setState={setCardOwner} informationSection="owner" />
        </form>
      </div>
    </div>
  );
}

export default App;
