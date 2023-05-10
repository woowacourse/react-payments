import { Route, Routes } from 'react-router-dom';

import CardContext from '../../../contexts/CardContext';

import { useCardList } from '../../../hooks/useCardList';
import { useCard } from '../../../hooks/useCard';

import * as styled from './CardPages.styled';
import MyPage from '../MyPage/MyPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import NicknamePage from '../NicknamePage/NicknamePage';
import PageLayout from '../PageLayout/PageLayout';
import { PATHNAME } from '../../../constants/pathname';
import { LoadingPage } from '../LoadingPage/LoadingPage';

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
            <Route path={PATHNAME.HOME} element={<MyPage />} />
            <Route path={PATHNAME.REGISTER} element={<RegisterPage />} />
            <Route path={PATHNAME.LOADING} element={<LoadingPage />} />
            <Route path={PATHNAME.NICKNAME} element={<NicknamePage />} />
          </Routes>
        </PageLayout>
      </CardContext.Provider>
    </styled.CardPages>
  );
};

export default CardPages;
