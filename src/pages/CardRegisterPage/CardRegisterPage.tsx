import * as styled from './CardRegisterPage.styled';

import { useNavigate } from 'react-router-dom';
import { CardInfo } from '../../App';
import { useState } from 'react';

import CardNumberInputBox from '../../components/CardNumberInputBox/CardNumberInputBox';
import ExpirationDateInputBox from '../../components/ExpirationDateInputBox/ExpirationDateInputBox';
import OwnerNameInputBox from '../../components/OwnerNameInputBox/OwnerNameInputBox';
import SecurityCodeInputBox from '../../components/SecurityCodeInputBox/SecurityCodeInputBox';
import PasswordInputBox from '../../components/PasswordInputBox/PasswordInputBox';
import CardPreview from '../../components/CardPreview/CardPreview';

const CardRegisterPage = ({ setCardList }: { setCardList: CallableFunction }) => {
  const [cardInfo, setCardInfo] = useState<CardInfo>({
    numbers: {
      first: '',
      second: '',
      third: '',
      fourth: '',
    },
    expirationDate: {
      month: '',
      year: '',
    },
    password: {
      first: '',
      second: '',
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
      {/* <Header /> */}
      <CardPreview cardInfo={cardInfo} />
      <styled.CardRegisterForm>
        <CardNumberInputBox numbers={cardInfo.numbers} setCardInfo={setCardInfo} />
        <ExpirationDateInputBox
          expirationDate={cardInfo.expirationDate}
          setCardInfo={setCardInfo}
        />
        <OwnerNameInputBox ownerName={cardInfo.ownerName} setCardInfo={setCardInfo} />
        <SecurityCodeInputBox securityCode={cardInfo.securityCode} setCardInfo={setCardInfo} />
        <PasswordInputBox password={cardInfo.password} setCardInfo={setCardInfo} />
        <styled.CardInfoSubmitButton onClick={handleOnClickSubmitButton}>
          다음
        </styled.CardInfoSubmitButton>
      </styled.CardRegisterForm>
    </>
  );
};

export default CardRegisterPage;
