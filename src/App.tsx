import { useEffect, useState } from 'react';

import './styles/App.css';
import './styles/global.css';
import './styles/reset.css';
import {
  CardCompanySelect,
  CardCVCInput,
  CardExpirationPeriodInput,
  CardNumbersInput,
  CardPassword,
  CardPreview,
  CardUserNameInput,
} from './components';
import { CardSide } from './components/CardPreview';
import useCardInfoReducer from './modules/useCardInfoReducer';

function App() {
  const {
    cardInfo,
    editCardMark,
    editCardNumbers,
    editCardPeriod,
    editCardUserName,
    editCardCompany,
    editCardCVC,
    editCardPassword,
  } = useCardInfoReducer();

  const [cardSide, setCardSide] = useState<CardSide>('front');

  return (
    <div id="app">
      <div className="inner">
        <CardPreview side={cardSide} cardInfo={cardInfo} />
        <form className="form-container">
          <fieldset>
            <CardPassword editCardPassword={editCardPassword} />
            <CardCVCInput setCardSide={setCardSide} editCardCVC={editCardCVC} />
            <CardUserNameInput editCardUserName={editCardUserName} />
            <CardExpirationPeriodInput editCardPeriod={editCardPeriod} />
            <CardCompanySelect editCardCompany={editCardCompany} />
            <CardNumbersInput
              editCardMark={editCardMark}
              editCardNumbers={editCardNumbers}
            />
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default App;
