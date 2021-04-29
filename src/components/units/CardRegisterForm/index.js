import React from 'react';
import PropTypes from 'prop-types';
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
    cardNumbers,
    expirationDate,
    ownerName,
    secureCode,
    cardPassword,
    setCardNumbers,
    setExpirationDate,
    setOwnerName,
    setSecureCode,
    setCardPassword,
    onSubmitForm,
  } = props;

  return (
    <Style.Root id="register-form" onSubmit={onSubmitForm}>
      <CardNumbersInput {...CARD_NUMBERS} cardNumbers={cardNumbers} setCardNumbers={setCardNumbers} />
      <ExpirationDateInput {...EXPIRATION_DATE} expirationDate={expirationDate} setExpirationDate={setExpirationDate} />
      <OwnerNameInput {...OWNER_NAME} ownerName={ownerName} setOwnerName={setOwnerName} />
      <SecureCodeInput {...SECURE_CODE} secureCode={secureCode} setSecureCode={setSecureCode} />
      <CardPasswordInput {...PASSWORD} cardPassword={cardPassword} setCardPassword={setCardPassword} />
    </Style.Root>
  );
};

CardRegisterForm.propTypes = {
  cardNumbers: PropTypes.object.isRequired,
  expirationDate: PropTypes.object.isRequired,
  ownerName: PropTypes.string.isRequired,
  secureCode: PropTypes.string.isRequired,
  cardPassword: PropTypes.object.isRequired,
  setCardNumbers: PropTypes.func.isRequired,
  setExpirationDate: PropTypes.func.isRequired,
  setOwnerName: PropTypes.func.isRequired,
  setSecureCode: PropTypes.func.isRequired,
  setCardPassword: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
};

export default CardRegisterForm;
