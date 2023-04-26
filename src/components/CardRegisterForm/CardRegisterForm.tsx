import { useFormState } from '../../hooks/useFormState';

import * as styled from './CardRegisterForm.styled';
import CardNumberInputBox from '../CardNumberInputBox/CardNumberInputBox';
import ExpirationDateInputBox from '../ExpirationDateInputBox/ExpirationDateInputBox';
import OwnerNameInputBox from '../OwnerNameInputBox/OwnerNameInputBox';
import PasswordInputBox from '../PasswordInputBox/PasswordInputBox';
import SecurityCodeInputBox from '../SecurityCodeInputBox/SecurityCodeInputBox';
import {
  CardNumbers,
  ExpirationDate,
  OwnerName,
  Password,
  SecurityCode,
  SetCardNumbers,
  SetExpirationDate,
  SetOwnerName,
  SetPassword,
  SetSecurityCode,
} from '../../types/state';
import CardInfoSubmitButtonContainer from '../CardInfoSubmitButtonContainer/CardInfoSubmitButtonContainer';

interface CardRegisterFormProps {
  cardNumbers: CardNumbers;
  setCardNumbers: SetCardNumbers;
  expirationDate: ExpirationDate;
  setExpirationDate: SetExpirationDate;
  ownerName: OwnerName;
  setOwnerName: SetOwnerName;
  securityCode: SecurityCode;
  setSecurityCode: SetSecurityCode;
  password: Password;
  setPassword: SetPassword;
}

const CardRegisterForm = (props: CardRegisterFormProps) => {
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
  } = props;

  return (
    <styled.CardRegisterForm>
      <CardNumberInputBox cardNumbers={cardNumbers} setCardNumbers={setCardNumbers} />
      <ExpirationDateInputBox
        expirationDate={expirationDate}
        setExpirationDate={setExpirationDate}
        cardNumbers={cardNumbers}
      />
      <OwnerNameInputBox
        ownerName={ownerName}
        setOwnerName={setOwnerName}
        expirationDate={expirationDate}
      />
      <SecurityCodeInputBox
        securityCode={securityCode}
        setSecurityCode={setSecurityCode}
        ownerName={ownerName}
      />
      <PasswordInputBox password={password} setPassword={setPassword} securityCode={securityCode} />
      <CardInfoSubmitButtonContainer
        cardNumbers={cardNumbers}
        expirationDate={expirationDate}
        ownerName={ownerName}
        securityCode={securityCode}
        password={password}
      />
    </styled.CardRegisterForm>
  );
};

export default CardRegisterForm;
