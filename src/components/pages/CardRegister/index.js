import React from 'react';
import RegisterInputWrapper from '../../shared/RegisterInputWrapper';
import CardNumbersInput from '../../units/CardNumbersInput';
import ExpirationDateInput from '../../units/ExpirationDateInput';
import OwnerNameInput from '../../units/OwnerNameInput';
import SecureCodeInput from '../../units/SecureCodeInput';
import CardPasswordInput from '../../units/CardPasswordInput';
import INPUT_TYPE from '../../../constants/inputType';

const CardRegister = (props) => {
  return (
    <>
      <RegisterInputWrapper {...INPUT_TYPE.CARD_NUMBERS}>
        <CardNumbersInput />
      </RegisterInputWrapper>
      <RegisterInputWrapper {...INPUT_TYPE.EXPIRATION_DATE}>
        <ExpirationDateInput />
      </RegisterInputWrapper>
      <RegisterInputWrapper {...INPUT_TYPE.OWNER_NAME}>
        <OwnerNameInput />
      </RegisterInputWrapper>
      <RegisterInputWrapper {...INPUT_TYPE.SECURE_CODE}>
        <SecureCodeInput />
      </RegisterInputWrapper>
      <RegisterInputWrapper {...INPUT_TYPE.PASSWORD} inputCount={2}>
        <CardPasswordInput />
      </RegisterInputWrapper>
    </>
  );
};

export default CardRegister;
