import { useEffect, useState } from 'react';
import Input from '../../../components/Input';
import * as S from '../style';

type Props = {
  creditCardExpiry: string,
  setCreditCardExpiry: React.Dispatch<React.SetStateAction<string>>,
};

function CreditCardExpiryInput({ creditCardExpiry, setCreditCardExpiry }: Props) {
  const [error, setError] = useState(false);

  const handleChangeCreditCardExpiry = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCardExpiry = event.target.value
      .replaceAll('/', '')
      .replace(/\D/g, '');

    if (newCardExpiry.length <= 2) setCreditCardExpiry(newCardExpiry);
    else if (newCardExpiry.length <= 4) {
      const newCardExpiryArray = newCardExpiry.split('');
      newCardExpiryArray.splice(2, 0, '/');
      setCreditCardExpiry(newCardExpiryArray.join(''));
    }
  };

  useEffect(() => {
    if (creditCardExpiry.length > 0 && creditCardExpiry.length < 5) {
      setError(true);
    } else {
      setError(false);
    }
  }, [creditCardExpiry]);

  return (
    <S.Box>
      <S.CreditCardRegisterLabel>만료일</S.CreditCardRegisterLabel>
      <Input placeholder="MM /YY" type="string" value={creditCardExpiry} width="40%" textAlign="center" onChange={handleChangeCreditCardExpiry} />
      {error && <S.ErrorMessage>만료일은 MM/YY 형식이어야 합니다.</S.ErrorMessage>}
    </S.Box>
  );
}

export default CreditCardExpiryInput;
