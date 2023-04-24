import * as styled from './CardRegisterPage.styled';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import CardNumberInputBox from '../../components/CardNumberInputBox/CardNumberInputBox';
import ExpirationDateInputBox from '../../components/ExpirationDateInputBox/ExpirationDateInputBox';
import OwnerNameInputBox from '../../components/OwnerNameInputBox/OwnerNameInputBox';
import SecurityCodeInputBox from '../../components/SecurityCodeInputBox/SecurityCodeInputBox';
import PasswordInputBox from '../../components/PasswordInputBox/PasswordInputBox';
import CardPreview from '../../components/CardPreview/CardPreview';
import { CardInfo } from '../../types/state';

const CardRegisterPage = ({ setCardList }: { setCardList: CallableFunction }) => {
  const [cardInfo, setCardInfo] = useState<CardInfo>({
    cardNumbers: {
      first: '',
      second: '',
      third: '',
      fourth: '',
    },
    expirationDate: {
      month: '',
      year: '',
    },
    ownerName: '',
    securityCode: '',
    password: {
      first: '',
      second: '',
    },
  });

  const navigation = useNavigate();

  const handleOnClickSubmitButton = () => {
    setCardList((prev: CardInfo[]) => [...prev, cardInfo]);
    navigation('/');
  };

  const isFilledCardInfos = () => {
    return (
      cardInfo.cardNumbers.first.length === 4 &&
      cardInfo.cardNumbers.second.length === 4 &&
      cardInfo.cardNumbers.third.length === 4 &&
      cardInfo.cardNumbers.fourth.length === 4 &&
      cardInfo.expirationDate.month.length === 2 &&
      cardInfo.expirationDate.year.length === 2 &&
      cardInfo.securityCode.length === 3 &&
      cardInfo.password.first.length === 1 &&
      cardInfo.password.second.length === 1
    );
  };

  return (
    <>
      <CardPreview cardInfo={cardInfo} bgColor="#333333" />
      <styled.CardRegisterForm>
        <CardNumberInputBox cardNumbers={cardInfo.cardNumbers} setCardInfo={setCardInfo} />
        <ExpirationDateInputBox expirationDate={cardInfo.expirationDate} setCardInfo={setCardInfo} />
        <OwnerNameInputBox ownerName={cardInfo.ownerName} setCardInfo={setCardInfo} />
        <SecurityCodeInputBox securityCode={cardInfo.securityCode} setCardInfo={setCardInfo} />
        <PasswordInputBox password={cardInfo.password} setCardInfo={setCardInfo} />
        {isFilledCardInfos() && (
          <styled.CardInfoSubmitButton onClick={handleOnClickSubmitButton}>다음</styled.CardInfoSubmitButton>
        )}
      </styled.CardRegisterForm>
    </>
  );
};

export default CardRegisterPage;
