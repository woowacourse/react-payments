import { useContext } from 'react';

import Input from '@Components/Input';
import InputLabel from '@Components/InputLabel';
import InputLayout from '@Components/InputLayout';

import {
  CreditCardRegisterContext,
  CreditCardRegisterUpdateContext,
} from '@Contexts/CreditCardRegister/CreditCardRegisterContext';

import { CREDIT_CARD_LENGTH } from '@Constants/creditCard';

function CreditCardExpiryInput() {
  const {
    creditCard: { expiry },
    errorMessage: { expiry: errorMessage },
  } = useContext(CreditCardRegisterContext);
  const {
    update: { expiry: update },
  } = useContext(CreditCardRegisterUpdateContext);

  const handleChangeExpiry = (event: React.ChangeEvent<HTMLInputElement>) => {
    update(event.target.value.replaceAll('/', ''));
  };

  return (
    <InputLayout errorMessage={errorMessage}>
      <InputLabel label="만료일" />
      <Input
        placeholder="MM/YY"
        type="string"
        value={expiry}
        width="40%"
        textAlign="center"
        onChange={handleChangeExpiry}
        maxLength={CREDIT_CARD_LENGTH.expiry}
        isValid={!errorMessage}
      />
    </InputLayout>
  );
}

export default CreditCardExpiryInput;
