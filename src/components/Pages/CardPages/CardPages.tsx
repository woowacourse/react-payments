import { Route, Routes } from 'react-router-dom';

import CardContext from '../../../contexts/CardContext';

import { useCardList } from '../../../hooks/useCardList';
import { useCard } from '../../../hooks/useCard';

import * as styled from './CardPages.styled';
import MyPage from '../MyPage/MyPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import NicknamePage from '../NicknamePage/NicknamePage';
import PageLayout from '../PageLayout/PageLayout';

const CardPages = () => {
  const { cardList, setCardList } = useCardList();
  const {
    serialNumbers,
    setSerialNumbers,
    expirationDate,
    setExpirationDate,
    ownerName,
    setOwnerName,
    securityCode,
    setSecurityCode,
    password,
    setPassword,
    company,
    setCompany,
    nickname,
    setNickname,
  } = useCard();

  return (
    <styled.CardPages>
      <CardContext.Provider
        value={{
          cardList,
          setCardList,
          serialNumbers,
          setSerialNumbers,
          expirationDate,
          setExpirationDate,
          ownerName,
          setOwnerName,
          securityCode,
          setSecurityCode,
          password,
          setPassword,
          company,
          setCompany,
          nickname,
          setNickname,
        }}
      >
        <PageLayout>
          <Routes>
            <Route path="/" element={<MyPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/nickname" element={<NicknamePage />} />
          </Routes>
        </PageLayout>
      </CardContext.Provider>
    </styled.CardPages>
  );
};

export default CardPages;
