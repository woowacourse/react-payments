import { CardRegisterFormProps } from '../../types/state';

import * as styled from './CardRegisterForm.styled';
import CardNumberInputBox from '../CardNumberInputBox/CardNumberInputBox';
import ExpirationDateInputBox from '../ExpirationDateInputBox/ExpirationDateInputBox';
import OwnerNameInputBox from '../OwnerNameInputBox/OwnerNameInputBox';
import PasswordInputBox from '../PasswordInputBox/PasswordInputBox';
import SecurityCodeInputBox from '../SecurityCodeInputBox/SecurityCodeInputBox';
import CardInfoSubmitButtonContainer from '../CardInfoSubmitButtonContainer/CardInfoSubmitButtonContainer';

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
        cardInfo={{ cardNumbers, expirationDate, ownerName, securityCode, password }}
      />
    </styled.CardRegisterForm>
  );
};

export default CardRegisterForm;
