import { useState } from 'react';
import { CardListPage } from './pages/CardListPage';
import { AddCardPage } from './pages/AddCardPages';
import { PAGE } from './constants';

const initialCardInfo = {
  number: { first: '', second: '', third: '', fourth: '' },
  company: { name: '', color: '' },
  expirationDate: { month: '', year: '' },
  ownerName: '',
  isOwnerNameFilled: false,
  securityCode: '',
  password: { first: '', second: '' },
  nickname: '',
};

export default function App() {
  const [route, setRoute] = useState(PAGE.CARD_LIST);
  const [cardInfo, setCardInfo] = useState(initialCardInfo);

  return (
    <div className="App">
      {route === PAGE.CARD_LIST ? (
        <CardListPage setRoute={setRoute} />
      ) : (
        <AddCardPage
          route={route}
          setRoute={setRoute}
          initialCardInfo={initialCardInfo}
          cardInfo={cardInfo}
          setCardInfo={setCardInfo}
        />
      )}
    </div>
  );
}
