import { useEffect } from 'react';
import Input from '../../../components/Input';
import * as S from '../style';

type Props = {
  creditCardExpiry: string,
  setCreditCardExpiry: React.Dispatch<React.SetStateAction<string>>,
};

function CreditCardExpiryInput({ creditCardExpiry, setCreditCardExpiry }: Props) {
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

  // @deprecated 이전 예정
  useEffect(() => {
    if (creditCardExpiry.length === 5) {
      const [month, year] = creditCardExpiry.split('/').map((str) => parseInt(str, 10));
      if (month < 1 || month > 12 || year <= 22) {
        setCreditCardExpiry('');
      }
    }
  }, [creditCardExpiry]);

  const isError = creditCardExpiry.length > 0 && creditCardExpiry.length < 5;

  return (
    <S.Box>
      <S.CreditCardRegisterLabel>만료일</S.CreditCardRegisterLabel>
      <Input placeholder="MM /YY" type="string" value={creditCardExpiry} width="40%" textAlign="center" onChange={handleChangeCreditCardExpiry} />
      {isError && <S.ErrorMessage>만료일은 MM/YY 형식이어야 합니다.</S.ErrorMessage>}
    </S.Box>
  );
}

export default CreditCardExpiryInput;
