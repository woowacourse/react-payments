/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from 'react';
import * as T from 'types';
import Input from '../../../components/Input';
import * as S from '../style';

type Props = {
  name: string;
  creditCard: T.CreditCard;
  setCreditCard: React.Dispatch<React.SetStateAction<T.CreditCard>>;
};

function CreditCardExpiryInput({ name, creditCard, setCreditCard }: Props) {
  const handleChangeCreditCardExpiry = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCardExpiry = event.target.value;
    const cleanedExpiry = newCardExpiry
      .replaceAll('/', '')
      .replace(/\D/g, '');
    if (cleanedExpiry.length > 4) return;
    setCreditCard({ ...creditCard, [name]: cleanedExpiry });
    // }
  };

  const markedExpiry = ((expiry: string) => {
    const newCardExpiryArray = expiry.split('');
    if (newCardExpiryArray.length > 2) {
      newCardExpiryArray.splice(2, 0, '/');
    }
    return newCardExpiryArray.join('');
  })(creditCard.expiry);

  const isError = ((expiry: string) => {
    const [month, year] = [parseInt(expiry.slice(0, 2), 10), parseInt(expiry.slice(2), 10)];
    if (month < 1 || month > 12 || year <= 22) {
      return true;
    }
    if (expiry.length > 0 && expiry.length < 4) {
      return true;
    }
    return false;
  })(creditCard.expiry);

  return (
    <S.Box>
      <S.CreditCardRegisterLabel>만료일</S.CreditCardRegisterLabel>
      <Input placeholder="MM/YY" type="string" value={markedExpiry} width="40%" textAlign="center" onChange={handleChangeCreditCardExpiry} />
      {isError && <S.ErrorMessage>만료일은 유효한 MM/YY 형식이어야 합니다.</S.ErrorMessage>}
    </S.Box>
  );
}

export default CreditCardExpiryInput;
