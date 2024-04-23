import { useEffect, useState } from 'react';

import './styles/App.css';
import './styles/global.css';
import './styles/reset.css';
import {
  CardCompanySelect,
  CardCVCInput,
  CardExpirationPeriodInput,
  CardForm,
  CardNumbersInput,
  CardPassword,
  CardPreview,
  CardUserNameInput,
} from './components';
import { CardSide } from './components/CardPreview';
import useCardInfoReducer from './modules/useCardInfoReducer';

function App() {
  const cardInfoReducer = useCardInfoReducer();
  const { cardInfo } = cardInfoReducer;
  const [cardSide, setCardSide] = useState<CardSide>('front');
  const cardFormProps = { ...cardInfoReducer, setCardSide };

  return (
    <div id="app">
      <div className="inner">
        <CardPreview side={cardSide} cardInfo={cardInfo} />
        <CardForm {...cardFormProps} />
      </div>
    </div>
  );
}

export default App;
