import { useState } from 'react';
import { Header } from './components/Page/Header';
import { Page } from './components/Page';
import { CardList } from './components/Page/Body/CardList';
import { CardRegister } from './components/Page/Body/CardRegister';
import { CardRegistered } from './components/Page/Body/CardRegistered';

const cardFrame = {
  nickName: '',
  company: '',
  numbers: { first: '', second: '', third: '', fourth: '' },
  owner: '',
  validDay: { firstDigit: '', secondDigit: '' },
};

const registeredCards = [
  {
    nickName: '엄카',
    company: '포코',
    numbers: { first: '1111', second: '2222', third: '3333', fourth: '4444' },
    owner: 'SUN',
    validDay: { month: '04', year: '21' },
  },
  {
    nickName: '법카',
    company: '로이드',
    numbers: { first: '1111', second: '2222', third: '3333', fourth: '4444' },
    owner: 'SUN',
    validDay: { month: '04', year: '21' },
  },
];

function App() {
  const [currentPage, setCurrentPage] = useState('cardList');
  const [cards, setCards] = useState(registeredCards);
  const [card, setCard] = useState(cardFrame);

  const updateCardContent = (cardInput) => {
    setCard((card) => ({ ...card, ...cardInput }));
  };

  const registerCard = (newCard) => {
    setCards((cards) => [...cards, newCard]);
  };

  const ChildComponents = {
    cardRegister: [
      <CardRegister setCurrentPage={setCurrentPage} updateCardContent={updateCardContent} />,
      <Header
        titleText={'카드 추가'}
        hasButton={true}
        onClick={() => setCurrentPage('cardList')}
      />,
    ],
    cardRegistered: [
      <CardRegistered
        card={card}
        setCurrentPage={setCurrentPage}
        updateCardContent={updateCardContent}
        registerCard={registerCard}
      />,
    ],
    cardList: [
      <CardList cards={cards} setCurrentPage={setCurrentPage} />,
      <Header titleText={'보유카드'} hasButton={false} />,
    ],
  };

  return (
    <div className="App">
      <Page>{ChildComponents[currentPage]}</Page>
    </div>
  );
}

export default App;
