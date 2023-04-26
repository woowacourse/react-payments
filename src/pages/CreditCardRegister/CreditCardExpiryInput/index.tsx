import Input from '@Components/Input';

import InputLabel from '../../../components/InputLabel';
import InputLayout from '../InputLayout';

type Props = {
  creditCardExpiry: string;
  errorMessage: string | null;
  updateExpiry: (newExpiry: string) => void;
};

function CreditCardExpiryInput({ creditCardExpiry, errorMessage, updateExpiry }: Props) {
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
        maxLength={5}
      />
    </InputLayout>
  );
}

export default CreditCardExpiryInput;
