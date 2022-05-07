import { useState } from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';

import { CardInfoListContext } from './context';
import Storage from './Storage';

import CardListPage from './pages/CardListPage';
import AddCardPage from './pages/AddCardPage';
import UpdateCardNickNamePage from './pages/UpdateCardNickNamePage';
import WrongAccessPage from './pages/WrongAccessPage';

const AppContainer = styled.div`
  width: 375px;
  height: 700px;
  margin: 50px auto;
  padding: 20px 28px;
  position: relative;
  background-color: #fff;
  border-radius: 4px;
`;

function App() {
  const [cardList, setCardInfoList] = useState(Storage.cardList);

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
    const updatedCardInfo = { ...cardList[index] };
    updatedCardInfo.nickName = nickName;

    setCardInfoList(prevCardInfoList => {
      const newCardInfoList = prevCardInfoList.slice();
      newCardInfoList.splice(index, 1, updatedCardInfo);

      Storage.saveCardList(newCardInfoList);
      return newCardInfoList;
    });
  };

  return (
    <AppContainer>
      <CardInfoListContext.Provider value={{ cardList, addNewCard, updateNickNameByIndex }}>
        <Routes>
          <Route path="/" element={<CardListPage />} />
          <Route path="/addCard" element={<AddCardPage />} />
          <Route path="/updateCardNickName/:id" element={<UpdateCardNickNamePage />} />
          <Route path="/error" element={<WrongAccessPage />} />
          <Route path="*" element={<WrongAccessPage />} />
        </Routes>
      </CardInfoListContext.Provider>
    </AppContainer>
  );
}

export default App;
