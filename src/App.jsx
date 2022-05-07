import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { CardInfoListContext } from './context';
import Storage from './Storage';

import CardListPage from './pages/CardListPage';
import AddCardPage from './pages/AddCardPage';
import UpdateCardNickNamePage from './pages/UpdateCardNickNamePage';
import WrongAccessPage from './pages/WrongAccessPage';

function App() {
  const [cardInfoList, setCardInfoList] = useState(Storage.cardInfoList);

  const addNewCard = newCardInfo => {
    let index;

    setCardInfoList(prevCardInfoList => {
      const newCardInfoList = prevCardInfoList.slice();
      newCardInfoList.push(newCardInfo);
      index = newCardInfoList.length - 1;

      Storage.saveCardList(newCardInfoList);
      return newCardInfoList;
    });
    return index;
  };

  const updateNickNameByIndex = (index, nickName) => {
    const updatedCardInfo = { ...cardInfoList[index] };
    updatedCardInfo.nickName = nickName;

    setCardInfoList(prevCardInfoList => {
      const newCardInfoList = prevCardInfoList.slice();
      newCardInfoList.splice(index, 1, updatedCardInfo);

      Storage.saveCardList(newCardInfoList);
      return newCardInfoList;
    });
  };

  return (
    <div className="App">
      <CardInfoListContext.Provider value={{ cardInfoList, addNewCard, updateNickNameByIndex }}>
        <Routes>
          <Route path="/" element={<CardListPage />} />
          <Route path="/addCard" element={<AddCardPage />} />
          <Route path="/updateCardNickName/:id" element={<UpdateCardNickNamePage />} />
          <Route path="/error" element={<WrongAccessPage />} />
          <Route path="*" element={<WrongAccessPage />} />
        </Routes>
      </CardInfoListContext.Provider>
    </div>
  );
}

export default App;
