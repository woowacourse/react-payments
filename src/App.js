import { useState } from 'react';
import { Header } from './components/Page/Header';
import { Page } from './components/Page';
import { CardList } from './components/Page/Body/CardList';
import { CardRegister } from './components/Page/Body/CardRegister';
import { CardRegistered } from './components/Page/Body/CardRegistered';
import { CARD_FRAME, REGISTERED_CARDS } from './utils/constants/card';

function App() {
  const [currentPage, setCurrentPage] = useState('cardList');
  const [cards, setCards] = useState(REGISTERED_CARDS);
  const [card, setCard] = useState(CARD_FRAME);

  const updateCardContent = (cardInput) => {
    setCard((card) => ({ ...card, ...cardInput }));
  };

  const registerCard = (newCard) => {
    setCards((cards) => [...cards, newCard]);
  };

  const ChildComponents = {
    cardRegister: [
      <Header
        titleText={'카드 추가'}
        hasButton={true}
        onClick={() => setCurrentPage('cardList')}
      />,
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
    cardList: [
      <Header titleText={'보유카드'} hasButton={false} />,
      <CardList cards={cards} setCurrentPage={setCurrentPage} />,
    ],
  };

  return (
    <div className="App">
      <Page>{ChildComponents[currentPage]}</Page>
    </div>
  );
}

export default App;
