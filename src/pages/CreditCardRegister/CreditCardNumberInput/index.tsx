import Input from '@Components/Input';
import InputLabel from '@Components/InputLabel';
import InputLayout from '@Components/InputLayout';

import creditCard from '@Domains/creditCard';

import { CreditCardNumberInputProps } from './type';

function CreditCardNumberInput({ creditCardNumber, errorMessage, updateNumbers }: CreditCardNumberInputProps) {
  const handleChangeNumbers = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateNumbers(event.target.value);
  };

  return (
    <InputLayout errorMessage={errorMessage}>
      <InputLabel label="카드 번호" />
      <Input
        type="string"
        value={creditCard.addDashInCreditCardNumbers(creditCardNumber)}
        width="100%"
        textAlign="center"
        onChange={handleChangeNumbers}
        placeholder="카드 번호 16자를 입력하세요."
      />
    </InputLayout>
  );
}

export default CreditCardNumberInput;
