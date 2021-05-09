import { useState } from 'react';
import { Header } from './components/Page/Header';
import { Page } from './components/Page';
import { CardList } from './components/Page/Body/CardList';
import { CardRegister } from './components/Page/Body/CardRegister';
import { CardRegistered } from './components/Page/Body/CardRegistered';
import { CARD_FRAME, REGISTERED_CARDS } from './utils/constants/card';
import { PAGE_TITLE } from './utils/constants/messages';

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
        titleText={PAGE_TITLE.CARD_REGISTER}
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
      <Header titleText={PAGE_TITLE.CARD_LIST} hasButton={false} />,
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
