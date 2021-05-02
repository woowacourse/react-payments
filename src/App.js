import { useEffect, useState } from 'react';
import CardCreationPage from './pages/cardCreationPage';
import CardListPage from './pages/cardListPage';
import CardCreationCompletePage from './pages/cardCreationCompletePage';
import CardDataContext from './context/CardDataContext';
import { PAGE } from './constants/page';
import { httpClient } from './api/httpClient';
import { PATH, RETURN_TYPE } from './constants/api';
import { INPUT_NAME } from './constants/input';
import { COLOR } from './constants/color';

const { FIRST, SECOND, THIRD, FOURTH, MONTH, YEAR } = INPUT_NAME;

const cardData = {
  cardNumber: { [FIRST]: '', [SECOND]: '', [THIRD]: '', [FOURTH]: '' },
  cardExpiredDate: { [MONTH]: '', [YEAR]: '' },
  cardOwner: '',
  securityCode: '',
  cardPassword: { [FIRST]: '', [SECOND]: '' },
  selectedCardInfo: { id: null, name: '', color: COLOR.GRAY_100 },
  cardNickname: '',
};

const App = () => {
  const [currentPage, setCurrentPage] = useState(PAGE.CARD_LIST);
  const [cardList, setCardList] = useState([]);
  const [cardInfo, setCardInfo] = useState(cardData);
  const [editCardId, setEditCardId] = useState(null);

  const resetCardInfo = () => {
    setCardInfo(cardData);
  };

  useEffect(() => {
    const setInitialCardList = async () => {
      const cardList = await httpClient.get({ path: PATH.CARD_LIST, returnType: RETURN_TYPE.JSON });

      setCardList(cardList);
    };

    setInitialCardList();
  }, []);

  return (
    <>
      <CardDataContext.Provider value={{ cardInfo, editCardId, setCardInfo, setCurrentPage }}>
        {currentPage === PAGE.CARD_LIST && (
          <CardListPage
            cardList={cardList}
            setCardList={setCardList}
            setEditCardId={setEditCardId}
            resetCardInfo={resetCardInfo}
          />
        )}
        {currentPage === PAGE.CARD_CREATION && <CardCreationPage />}
        {currentPage === PAGE.CARD_CREATION_COMPLETE && (
          <CardCreationCompletePage setCardList={setCardList} setEditCardId={setEditCardId} />
        )}
      </CardDataContext.Provider>
    </>
  );
};

export default App;
