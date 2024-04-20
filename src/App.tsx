/** @jsxImportSource @emotion/react */

import './App.css';

import CardForm from './components/CardForm';
import CardPreview from './components/CardPreview';
import { css } from '@emotion/react';
import useCardInfo from './hooks/useCardInfo';

const styledCardInfoContainer = css`
  width: 315px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  margin: auto;
  margin-top: 30px;
  padding: 100px;
  background-color: white;
`;

function App() {
  const { cardInfo, setCardNumbers, setCardExpiredDate, setCardHolder } =
    useCardInfo();

  return (
    <section css={styledCardInfoContainer}>
      <CardPreview cardInfo={cardInfo} />
      <CardForm
        setCardNumbers={setCardNumbers}
        setCardExpiredDate={setCardExpiredDate}
        setCardHolder={setCardHolder}
      />
    </section>
  );
}

export default App;
