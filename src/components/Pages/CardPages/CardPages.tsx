import { Route, Routes } from 'react-router-dom';

import CardInfoListContext from '../../../contexts/CardInfoListContext';
import { useCardInfoList } from '../../../hooks/useCardInfoList';

import * as styled from './CardPage.styled';
import MyCardPage from '../MyCardPage/MyCardPage';
import CardRegisterPage from '../CardRegisterPage/CardRegisterPage';

const CardPages = () => {
  const { cardInfoList, setCardInfoList } = useCardInfoList();

  return (
    <styled.CardPages>
      <CardInfoListContext.Provider value={{ cardInfoList, setCardInfoList }}>
        <Routes>
          <Route path="/" element={<MyCardPage />} />
          <Route path="/register" element={<CardRegisterPage />} />
        </Routes>
      </CardInfoListContext.Provider>
    </styled.CardPages>
  );
};

export default CardPages;
