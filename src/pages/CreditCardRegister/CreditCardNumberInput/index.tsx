import { useContext } from 'react';

import Input from '@Components/Input';
import InputLabel from '@Components/InputLabel';
import InputLayout from '@Components/InputLayout';

import creditCard from '@Domains/creditCard';

import {
  CreditCardRegisterContext,
  CreditCardRegisterUpdateContext,
} from '@Contexts/CreditCardRegister/CreditCardRegisterContext';

function CreditCardNumberInput() {
  const {
    creditCard: { numbers },
    errorMessage: { numbers: errorMessage },
  } = useContext(CreditCardRegisterContext);
  const {
    update: { numbers: update },
  } = useContext(CreditCardRegisterUpdateContext);

  const handleChangeNumbers = (event: React.ChangeEvent<HTMLInputElement>) => {
    update(event.target.value);
  };

  return (
    <InputLayout errorMessage={errorMessage}>
      <InputLabel label="카드 번호" />
      <Input
        type="string"
        value={creditCard.addDashInCreditCardNumbers(numbers)}
        width="100%"
        textAlign="center"
        onChange={handleChangeNumbers}
        placeholder="카드 번호 16자를 입력하세요."
      />
    </InputLayout>
  );
}

export default CreditCardNumberInput;
