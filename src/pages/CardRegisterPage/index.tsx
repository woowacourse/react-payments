import * as styled from './CardRegisterPage.styled';

import { useNavigate } from 'react-router-dom';
import { CardInfo } from '../../App';
import { useState } from 'react';

import {
  CardPreview,
  CardNumbersInput,
  CardExpirationDateInput,
  CardOwnerNameInput,
  CardSecurityCodeInput,
  CardPasswordInput,
} from '../../components';

const CardRegisterPage = ({ setCardList }: { setCardList: CallableFunction }) => {
  const [cardInfo, setCardInfo] = useState<CardInfo>({
    id: '',
    numbers: {
      0: '',
      1: '',
      2: '',
      3: '',
    },
    expirationDate: {
      month: '',
      year: '',
    },
    password: {
      0: '',
      1: '',
    },
    ownerName: '',
    securityCode: '',
  });

  const navigation = useNavigate();

  const handleOnClickSubmitButton = () => {
    setCardList((prev: CardInfo[]) => [...prev, cardInfo]);
    navigation('/');
  };

  return (
    <>
      <CardPreview cardInfo={cardInfo} bgColor="#333333" />
      <styled.CardRegisterForm>
        <CardNumbersInput numbers={cardInfo.numbers} setCardInfo={setCardInfo} />
        <CardExpirationDateInput
          expirationDate={cardInfo.expirationDate}
          setCardInfo={setCardInfo}
        />
        <CardOwnerNameInput ownerName={cardInfo.ownerName} setCardInfo={setCardInfo} />
        <CardSecurityCodeInput securityCode={cardInfo.securityCode} setCardInfo={setCardInfo} />
        <CardPasswordInput password={cardInfo.password} setCardInfo={setCardInfo} />
        <styled.CardInfoSubmitButton onClick={handleOnClickSubmitButton}>
          다음
        </styled.CardInfoSubmitButton>
      </styled.CardRegisterForm>
    </>
  );
};

export default CardRegisterPage;
