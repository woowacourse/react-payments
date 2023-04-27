import { Route, Routes } from 'react-router-dom';

import CardInfoContext from '../../../contexts/CardInfoContext';
import { useCardInfoList } from '../../../hooks/useCardInfoList';
import { useCardInfo } from '../../../hooks/useCardInfo';

import * as styled from './CardPage.styled';
import MyCardPage from '../MyCardPage/MyCardPage';
import CardRegisterPage from '../CardRegisterPage/CardRegisterPage';
import CardAliasPages from '../CardAliasPages/CardAliasPages';

const CardPages = () => {
  const { cardInfoList, setCardInfoList } = useCardInfoList();
  const {
    cardNumbers,
    setCardNumbers,
    expirationDate,
    setExpirationDate,
    ownerName,
    setOwnerName,
    securityCode,
    setSecurityCode,
    password,
    setPassword,
    cardCompany,
    setCardCompany,
    cardAlias,
    setCardAlias,
  } = useCardInfo();

  return (
    <styled.CardPages>
      <CardInfoContext.Provider
        value={{
          cardInfoList,
          setCardInfoList,
          cardNumbers,
          setCardNumbers,
          expirationDate,
          setExpirationDate,
          ownerName,
          setOwnerName,
          securityCode,
          setSecurityCode,
          password,
          setPassword,
          cardCompany,
          setCardCompany,
          cardAlias,
          setCardAlias,
        }}
      >
        <Routes>
          <Route path="/" element={<MyCardPage />} />
          <Route path="/register" element={<CardRegisterPage />} />
          <Route path="/alias" element={<CardAliasPages />} />
        </Routes>
      </CardInfoContext.Provider>
    </styled.CardPages>
  );
};

export default CardPages;
