import Input from '@Components/Input';
import InputLabel from '@Components/InputLabel';
import InputLayout from '@Components/InputLayout';

import { CREDIT_CARD_LENGTH } from '@Constants/creditCard';

import { CreditCardExpiryInputProps } from './type';

function CreditCardExpiryInput({ creditCardExpiry, errorMessage, updateExpiry }: CreditCardExpiryInputProps) {
  const handleChangeExpiry = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateExpiry(event.target.value.replaceAll('/', ''));
  };

  return (
    <InputLayout errorMessage={errorMessage}>
      <InputLabel label="만료일" />
      <Input
        placeholder="MM/YY"
        type="string"
        value={creditCardExpiry}
        width="40%"
        textAlign="center"
        onChange={handleChangeExpiry}
        maxLength={CREDIT_CARD_LENGTH.expiry}
      />
    </InputLayout>
  );
}

export default CreditCardExpiryInput;
