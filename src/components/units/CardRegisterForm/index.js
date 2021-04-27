import React from 'react';
import CardNumbersInput from '../../units/CardNumbersInput';
import ExpirationDateInput from '../../units/ExpirationDateInput';
import OwnerNameInput from '../../units/OwnerNameInput';
import SecureCodeInput from '../../units/SecureCodeInput';
import CardPasswordInput from '../../units/CardPasswordInput';
import INPUT_TYPE from '../../../constants/inputType';
import * as Style from './style';

const CardRegisterForm = (props) => {
  const { CARD_NUMBERS, EXPIRATION_DATE, OWNER_NAME, SECURE_CODE, PASSWORD } = INPUT_TYPE;
  const {
    expirationDate,
    ownerName,
    setCardNumbers,
    setExpirationDate,
    setOwnerName,
    secureCode,
    setSecureCode,
    setCardPassword,
  } = props;

  return (
    <Style.Root>
      <CardNumbersInput {...CARD_NUMBERS} setCardNumbers={setCardNumbers} />
      <ExpirationDateInput {...EXPIRATION_DATE} expirationDate={expirationDate} setExpirationDate={setExpirationDate} />
      <OwnerNameInput {...OWNER_NAME} ownerName={ownerName} setOwnerName={setOwnerName} />
      <SecureCodeInput {...SECURE_CODE} secureCode={secureCode} setSecureCode={setSecureCode} />
      <CardPasswordInput {...PASSWORD} setCardPassword={setCardPassword} />
    </Style.Root>
  );
};

export default CardRegisterForm;
