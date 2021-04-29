import { useState, useEffect } from 'react';
import { firestore } from './firebase';
import CardCreationPage from './pages/cardCreationPage';
import CardListPage from './pages/cardListPage';
import CardCreationCompletePage from './pages/cardCreationCompletePage';
import { PAGE } from './constants/page';

const cardListRef = firestore.collection('cardList');

const App = () => {
  const [currentPage, setCurrentPage] = useState(PAGE.CARD_LIST);
  const [newCardInfo, setNewCardInfo] = useState({
    cardNumber: {},
    cardExpiredDate: {},
    cardOwner: '',
    selectedCardInfo: {},
    cardNickName: '',
  });
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await cardListRef.get();
      let cards = [];

      if (snapshot.empty) return;

      snapshot.forEach(doc => cards.push({ id: doc.id, content: doc.data() }));
      setCardList(cards);
    };

    fetchData();
  }, []);

  return (
    <>
      {currentPage === PAGE.CARD_LIST && <CardListPage setCurrentPage={setCurrentPage} cardList={cardList} />}
      {currentPage === PAGE.CARD_CREATION && (
        <CardCreationPage setCurrentPage={setCurrentPage} setNewCardInfo={setNewCardInfo} />
      )}
      {currentPage === PAGE.CARD_CREATION_COMPLETE && (
        <CardCreationCompletePage
          setCurrentPage={setCurrentPage}
          newCardInfo={newCardInfo}
          setNewCardInfo={setNewCardInfo}
        />
      )}
    </>
  );
};

export default App;
