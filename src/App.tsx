import { useState } from 'react';
import './App.css';
import './reset.css';
import InputGroup from './components/InputGroup';
import CardImage from './components/CardImage';
import { css } from '@emotion/react';

function App() {
  const [cardNumber, setCardNumber] = useState<string[]>(['']);
  const [cardPeriod, setCardPeriod] = useState<string[]>(['']);
  const [cardOwner, setCardOwner] = useState<string[]>(['']);

  const appContainerStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 31px;
    gap: 45px;
    width: 376px;
  `;

  const appStyle = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const appInputStyle = css`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
  `;

  return (
    <div css={appStyle}>
      <div css={appContainerStyle}>
        <CardImage cardNumber={cardNumber} cardPeriod={cardPeriod} cardOwner={cardOwner} />
        <div css={appInputStyle}>
          <InputGroup setState={setCardNumber} section="number" />
          <InputGroup setState={setCardPeriod} section="period" />
          <InputGroup setState={setCardOwner} section="owner" />
        </div>
      </div>
    </div>
  );
}

export default App;
