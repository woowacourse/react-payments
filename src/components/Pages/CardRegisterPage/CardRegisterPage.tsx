import { createPortal } from 'react-dom';

import { useCardInfo } from '../../../hooks/useCardInfo';

import * as styled from './CardRegisterPage.styled';
import CardPreview from '../../CardPreview/CardPreview';
import CardRegisterForm from '../../CardRegisterForm/CardRegisterForm';
import BottomSheet from '../../BottomSheet/BottomSheet';
import CardCompanyContents from '../../CardCompanyContents/CardCompanyContents';

const CardRegisterPage = () => {
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
    isOpenBottomSheet,
  } = useCardInfo();

  return (
    <styled.CardRegisterPage>
      <CardPreview
        cardInfo={{ cardNumbers, expirationDate, ownerName, securityCode, password, cardCompany }}
      />
      <CardRegisterForm
        cardNumbers={cardNumbers}
        setCardNumbers={setCardNumbers}
        expirationDate={expirationDate}
        setExpirationDate={setExpirationDate}
        ownerName={ownerName}
        setOwnerName={setOwnerName}
        securityCode={securityCode}
        setSecurityCode={setSecurityCode}
        password={password}
        setPassword={setPassword}
        cardCompany={cardCompany}
      />
      {isOpenBottomSheet &&
        createPortal(
          <BottomSheet
            CardCompanyContents={<CardCompanyContents setCardCompany={setCardCompany} />}
          />,
          document.body
        )}
    </styled.CardRegisterPage>
  );
};

export default CardRegisterPage;
