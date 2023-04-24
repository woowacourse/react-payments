import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CardInfo, SetCardInfoList } from '../../types/state';

import * as styled from './CardRegisterPage.styled';
import CardPreview from '../../components/CardPreview/CardPreview';
import CardNumberInputBox from '../../components/CardNumberInputBox/CardNumberInputBox';
import ExpirationDateInputBox from '../../components/ExpirationDateInputBox/ExpirationDateInputBox';
import OwnerNameInputBox from '../../components/OwnerNameInputBox/OwnerNameInputBox';
import SecurityCodeInputBox from '../../components/SecurityCodeInputBox/SecurityCodeInputBox';
import PasswordInputBox from '../../components/PasswordInputBox/PasswordInputBox';
import { COLOR } from '../../constants/cardInfo';

const CardRegisterPage = ({ setCardInfoList }: { setCardInfoList: SetCardInfoList }) => {
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
    setCardInfoList((prev: CardInfo[]) => [...prev, cardInfo]);
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
    <styled.CardRegisterPage>
      <CardPreview cardInfo={cardInfo} bgColor={COLOR.GREY200} />
      <styled.CardRegisterForm>
        <CardNumberInputBox cardNumbers={cardInfo.cardNumbers} setCardInfo={setCardInfo} />
        <ExpirationDateInputBox expirationDate={cardInfo.expirationDate} setCardInfo={setCardInfo} />
        <OwnerNameInputBox ownerName={cardInfo.ownerName} setCardInfo={setCardInfo} />
        <SecurityCodeInputBox securityCode={cardInfo.securityCode} setCardInfo={setCardInfo} />
        <PasswordInputBox password={cardInfo.password} setCardInfo={setCardInfo} />
        <styled.CardInfoSubmitButtonContainer>
          {isFilledCardInfos() && (
            <styled.CardInfoSubmitButton onClick={handleOnClickSubmitButton} autoFocus>
              다음
            </styled.CardInfoSubmitButton>
          )}
        </styled.CardInfoSubmitButtonContainer>
      </styled.CardRegisterForm>
    </styled.CardRegisterPage>
  );
};

export default CardRegisterPage;
