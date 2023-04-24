import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CardInfo, CardNumbers, ExpirationDate, OwnerName, Password, SetCardInfoList } from '../../types/state';
import { COLOR } from '../../constants/cardInfo';

import * as styled from './CardRegisterPage.styled';
import CardPreview from '../../components/CardPreview/CardPreview';
import CardNumberInputBox from '../../components/CardNumberInputBox/CardNumberInputBox';
import ExpirationDateInputBox from '../../components/ExpirationDateInputBox/ExpirationDateInputBox';
import OwnerNameInputBox from '../../components/OwnerNameInputBox/OwnerNameInputBox';
import SecurityCodeInputBox from '../../components/SecurityCodeInputBox/SecurityCodeInputBox';
import PasswordInputBox from '../../components/PasswordInputBox/PasswordInputBox';

interface CardRegisterPageProps {
  setCardInfoList: SetCardInfoList;
}

const CardRegisterPage = ({ setCardInfoList }: CardRegisterPageProps) => {
  const [cardNumbers, setCardNumbers] = useState<CardNumbers>({
    first: '',
    second: '',
    third: '',
    fourth: '',
  });
  const [expirationDate, setExpirationDate] = useState<ExpirationDate>({
    month: null,
    year: null,
  });
  const [ownerName, setOwnerName] = useState<OwnerName>(null);
  const [securityCode, setSecurityCode] = useState('');
  const [password, setPassword] = useState<Password>({
    first: '',
    second: '',
  });

  const navigation = useNavigate();

  const handleOnClickSubmitButton = () => {
    setCardInfoList((prev: CardInfo[]) => [
      ...prev,
      { cardNumbers, expirationDate, ownerName, securityCode, password },
    ]);
    navigation('/');
  };

  const isFilledCardInfos = () => {
    return (
      cardNumbers.first.length === 4 &&
      cardNumbers.second.length === 4 &&
      cardNumbers.third.length === 4 &&
      cardNumbers.fourth.length === 4 &&
      expirationDate.month &&
      expirationDate.month.length === 1 &&
      expirationDate.year &&
      expirationDate.year.length === 2 &&
      securityCode.length === 3 &&
      password.first.length === 1 &&
      password.second.length === 1
    );
  };

  return (
    <styled.CardRegisterPage>
      <CardPreview
        cardInfo={{ cardNumbers, expirationDate, ownerName, securityCode, password }}
        bgColor={COLOR.GREY200}
      />
      <styled.CardRegisterForm>
        <CardNumberInputBox cardNumbers={cardNumbers} setCardNumbers={setCardNumbers} />
        <ExpirationDateInputBox
          expirationDate={expirationDate}
          setExpirationDate={setExpirationDate}
          cardNumbers={cardNumbers}
        />
        <OwnerNameInputBox ownerName={ownerName} setOwnerName={setOwnerName} expirationDate={expirationDate} />
        <SecurityCodeInputBox securityCode={securityCode} setSecurityCode={setSecurityCode} ownerName={ownerName} />
        <PasswordInputBox password={password} setPassword={setPassword} securityCode={securityCode} />
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
