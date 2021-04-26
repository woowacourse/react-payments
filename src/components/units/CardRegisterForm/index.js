import React from 'react';
import RegisterInputWrapper from '../../shared/RegisterInputWrapper';
import CardNumbersInput from '../../units/CardNumbersInput';
import ExpirationDateInput from '../../units/ExpirationDateInput';
import OwnerNameInput from '../../units/OwnerNameInput';
import SecureCodeInput from '../../units/SecureCodeInput';
import CardPasswordInput from '../../units/CardPasswordInput';
import INPUT_TYPE from '../../../constants/inputType';
import * as Style from './style';

const CardRegisterForm = (props) => {
  const { CARD_NUMBERS, EXPIRATION_DATE, OWNER_NAME, SECURE_CODE, PASSWORD } = INPUT_TYPE;

  const { setCardNumbers, setExpirationDate } = props;

  return (
    <Style.Root>
      <RegisterInputWrapper {...CARD_NUMBERS}>
        <CardNumbersInput setCardNumbers={setCardNumbers} />
      </RegisterInputWrapper>
      <RegisterInputWrapper {...EXPIRATION_DATE}>
        <ExpirationDateInput setExpirationDate={setExpirationDate} />
      </RegisterInputWrapper>
      <RegisterInputWrapper {...OWNER_NAME}>
        <OwnerNameInput />
      </RegisterInputWrapper>
      <RegisterInputWrapper {...SECURE_CODE}>
        <SecureCodeInput />
      </RegisterInputWrapper>
      <RegisterInputWrapper inputCount={2} {...PASSWORD}>
        <CardPasswordInput />
      </RegisterInputWrapper>
    </Style.Root>
  );
};

export default CardRegisterForm;
