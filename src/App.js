import { useEffect, useState } from 'react';
import CardCreationPage from './pages/cardCreationPage';
import CardListPage from './pages/cardListPage';
import CardCreationCompletePage from './pages/cardCreationCompletePage';
import { PAGE } from './constants/page';
import { firestore } from './firebase';

const App = () => {
  const [currentPage, setCurrentPage] = useState(PAGE.CARD_LIST);
  const [cardList, setCardList] = useState([]);
  const [cardInfo, setCardInfo] = useState({
    cardNumber: {},
    cardExpiredDate: {},
    cardOwner: '',
    selectedCardInfo: {},
    cardNickname: '',
    securityCode: '',
    cardPassword: {},
    id: '',
  });

  const isCardEditMode = !!cardInfo.id;

  useEffect(() => {
    const setInitialCardList = async () => {
      const cardData = await firestore.collection('cardList').get();

      setCardList(cardData.docs.map(v => ({ ...v.data(), id: v.id })));
    };

    setInitialCardList();
  }, []);

  return (
    <>
      {currentPage === PAGE.CARD_LIST && (
        <CardListPage
          setCurrentPage={setCurrentPage}
          cardList={cardList}
          setCardInfoForEdit={setCardInfo}
          setCardList={setCardList}
        />
      )}
      {currentPage === PAGE.CARD_CREATION && (
        <CardCreationPage
          setCurrentPage={setCurrentPage}
          setNewCardInfo={setCardInfo}
          cardInfoForEdit={isCardEditMode && cardInfo}
        />
      )}
      {currentPage === PAGE.CARD_CREATION_COMPLETE && (
        <CardCreationCompletePage
          setCurrentPage={setCurrentPage}
          newCardInfo={cardInfo}
          setNewCardInfo={setCardInfo}
          setCardList={setCardList}
          cardNicknameForEdit={isCardEditMode && cardInfo.cardNickname}
        />
      )}
    </>
  );
};

export default App;
