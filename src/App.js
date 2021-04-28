import { useState } from 'react';
import { CardListPage } from './pages/CardListPage';
import { AddCardPage } from './pages/AddCardPages';
import { PAGE } from './constants';

export const initialCardInfo = {
  number: { first: '', second: '', third: '', fourth: '' },
  company: { name: '', color: '' },
  expirationDate: { month: '', year: '' },
  ownerName: 'NAME',
  isOwnerNameFilled: false,
  securityCode: '',
  password: { first: '', second: '' },
  nickname: '',
};

export default function App() {
  const [route, setRoute] = useState(PAGE.CARD_LIST);
  const [cardInfo, setCardInfo] = useState(initialCardInfo);
  const [nickname, setNickname] = useState('');

  return (
    <div className="App">
      {route === PAGE.CARD_LIST ? (
        <CardListPage setRoute={setRoute} nickname={nickname} />
      ) : (
        <AddCardPage
          route={route}
          setRoute={setRoute}
          initialCardInfo={initialCardInfo}
          cardInfo={cardInfo}
          setCardInfo={setCardInfo}
          nickname={nickname}
          setNickname={setNickname}
        />
      )}
    </div>
  );
}
