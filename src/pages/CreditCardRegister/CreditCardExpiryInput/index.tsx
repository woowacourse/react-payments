import Input from '@Components/Input';

import InputLabel from '../InputLabel';
import InputLayout from '../InputLayout';

type Props = {
  creditCardExpiry: string;
  errorMessage: string | null;
  setCreditCardExpiry: React.Dispatch<React.SetStateAction<string>>;
};

function CreditCardExpiryInput({ creditCardExpiry, errorMessage, setCreditCardExpiry }: Props) {
  const handleChangeCreditCardExpiry = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newCardExpiry = event.target.value.replaceAll('/', '');

    if (newCardExpiry.length > 4) return;

    if (newCardExpiry.length >= 3 && newCardExpiry.length <= 4) {
      const newCardExpiryArray = newCardExpiry.split('');
      newCardExpiryArray.splice(2, 0, '/').join('');
      newCardExpiry = newCardExpiryArray.join('');
    }

    setCreditCardExpiry(newCardExpiry);
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
        onChange={handleChangeCreditCardExpiry}
        maxLength={5}
      />
    </InputLayout>
  );
}

export default CreditCardExpiryInput;
