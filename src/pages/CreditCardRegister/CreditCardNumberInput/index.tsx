import Input from '@Components/Input';

import creditCard from '@Domains/creditCard';

import InputLabel from '../InputLabel';
import InputLayout from '../InputLayout';

type Props = {
  creditCardNumber: string;
  errorMessage: string | null;
  setCreditCardNumber: React.Dispatch<React.SetStateAction<string>>;
};

function CreditCardNumberInput({ creditCardNumber, errorMessage, setCreditCardNumber }: Props) {
  const handleChangeCreditCardNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCreditCarNumber = creditCard.removeDashInCreditCardNumber(event.target.value);
    const newAddNumber = newCreditCarNumber[newCreditCarNumber.length - 1];

    if (newCreditCarNumber.length > 16) return;

    if (newCreditCarNumber.length < creditCardNumber.length) setCreditCardNumber('');
    else setCreditCardNumber((prev) => prev + newAddNumber);
  };

  return (
    <InputLayout errorMessage={errorMessage}>
      <InputLabel label="카드 번호" />
      <Input
        type="string"
        value={creditCard.addDashInCreditCardNumber(creditCardNumber)}
        width="100%"
        textAlign="center"
        onChange={handleChangeCreditCardNumber}
      />
    </InputLayout>
  );
}

export default CreditCardNumberInput;
