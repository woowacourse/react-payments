import { useState } from 'react';
import { Header } from './components/Page/Header';
import { CardList } from './components/Page/Body/CardList';
import { CardRegister } from './components/Page/Body/CardRegister';
import { CardRegistered } from './components/Page/Body/CardRegistered';
import * as Styled from './style.js';

const cardFrame = {
  nickName: '',
  company: '',
  numbers: { first: '', second: '', third: '', fourth: '' },
  owner: '',
  validDay: { firstDigit: '', secondDigit: '' },
};

const registeredCards = [
  {
    nickName: '피터',
    company: '공원',
    numbers: { first: '1995', second: '0519', third: '0101', fourth: '0101' },
    owner: 'HYUN CHEOL',
    validDay: { month: '18', year: '18' },
  },
  {
    nickName: '심바',
    company: '준',
    numbers: { first: '1994', second: '1017', third: '1001', fourth: '0110' },
    owner: 'SUN BEAN',
    validDay: { month: '18', year: '18' },
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

  const HeaderComponent = {
    cardRegister: [
      <Header
        titleText={'카드 추가'}
        hasButton={true}
        onClick={() => setCurrentPage('cardList')}
      />,
    ],
    cardRegistered: null,
    cardList: [<Header titleText={'보유카드'} hasButton={false} />],
  };

  const BodyComponent = {
    cardRegister: [
      <CardRegister setCurrentPage={setCurrentPage} updateCardContent={updateCardContent} />,
    ],
    cardRegistered: [
      <CardRegistered
        card={card}
        setCurrentPage={setCurrentPage}
        updateCardContent={updateCardContent}
        registerCard={registerCard}
      />,
    ],
    cardList: [<CardList cards={cards} setCurrentPage={setCurrentPage} />],
  };

  return (
    <Styled.Page>
      <Styled.Header>{HeaderComponent[currentPage]}</Styled.Header>
      <Styled.Body>{BodyComponent[currentPage]}</Styled.Body>
    </Styled.Page>
  );
}

export default App;
