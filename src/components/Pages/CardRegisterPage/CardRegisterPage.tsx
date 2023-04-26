import { COLOR } from '../../../constants/cardInfo';
import { useCardInfo } from '../../../hooks/useCardInfo';

import * as styled from './CardRegisterPage.styled';
import CardPreview from '../../CardPreview/CardPreview';
import CardRegisterForm from '../../CardRegisterForm/CardRegisterForm';

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
  } = useCardInfo();

  return (
    <styled.CardRegisterPage>
      <CardPreview
        cardInfo={{ cardNumbers, expirationDate, ownerName, securityCode, password }}
        bgColor={COLOR.GREY200}
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
      />
    </styled.CardRegisterPage>
  );
};

export default CardRegisterPage;
