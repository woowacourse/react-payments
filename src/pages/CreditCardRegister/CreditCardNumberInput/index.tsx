import Input from '@Components/Input';

import creditCard from '@Domains/creditCard';

import InputLabel from '../../../components/InputLabel';
import InputLayout from '../InputLayout';

type Props = {
  creditCardNumber: string;
  errorMessage: string | null;
  updateNumbers: (numbers: string) => void;
};

function CreditCardNumberInput({ creditCardNumber, errorMessage, updateNumbers }: Props) {
  const handleChangeNumbers = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateNumbers(event.target.value);
  };

  return (
    <InputLayout errorMessage={errorMessage}>
      <InputLabel label="카드 번호" />
      <Input
        type="string"
        value={creditCard.addDashInCreditCardNumber(creditCardNumber)}
        width="100%"
        textAlign="center"
        onChange={handleChangeNumbers}
        placeholder="카드 번호 16자를 입력하세요."
      />
    </InputLayout>
  );
}

export default CreditCardNumberInput;
