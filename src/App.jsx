import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { CardInfoListContext } from './context';
import CardListPage from './pages/CardListPage';
import AddCardPage from './pages/AddCardPage';
import AddCardResultPage from './pages/AddCardResultPage';

const dummyCardInfoList = [
  {
    cardNumber: ['1234', '5678', '9012', '3456'],
    holderName: 'SUN',
    expireDate: ['12', '23'],
    isComplete: true,
  },
];

function App() {
  const [cardInfoList, setCardInfoList] = useState(dummyCardInfoList);

  const addNewCard = newCardInfo => {
    let index;
    setCardInfoList(prevCardInfoList => {
      const newCardInfoList = prevCardInfoList.slice();
      newCardInfoList.push(newCardInfo);
      index = newCardInfoList.length - 1;
      return newCardInfoList;
    });
    return index;
  };

  const updateNickNameByIndex = (index, nickName) => {
    const cardInfo = cardInfoList[index];
    cardInfo.nickName = nickName;
  };

  useEffect(() => {
    console.log(cardInfoList);
  });

  return (
    <div className="App">
      <CardInfoListContext.Provider value={{ cardInfoList, addNewCard, updateNickNameByIndex }}>
        <Routes>
          <Route path="/react-payments/" element={<CardListPage />} />
          <Route path="/react-payments/addCard" element={<AddCardPage />} />
          <Route path="/react-payments/addCardResult" element={<AddCardResultPage />} />
        </Routes>
      </CardInfoListContext.Provider>
    </div>
  );
}

export default App;
