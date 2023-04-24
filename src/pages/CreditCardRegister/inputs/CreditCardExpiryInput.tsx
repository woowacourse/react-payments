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
    const newCardExpiry = event.target.value
      .replaceAll('/', '')
      .replace(/\D/g, '');
    if (newCardExpiry.length > 4) return;
    setCreditCard({ ...creditCard, [name]: newCardExpiry });
  };

  const foo = (expiry: string) => {
    const newCardExpiryArray = expiry.split('');
    console.log(newCardExpiryArray);
    if (newCardExpiryArray.length > 2) {
      newCardExpiryArray.splice(2, 0, '/');
    }
    return newCardExpiryArray.join('');
  };

  // const isError = creditCard.expiry.length > 0 && creditCard.expiry.length < 5;

  return (
    <S.Box>
      <S.CreditCardRegisterLabel>만료일</S.CreditCardRegisterLabel>
      <Input placeholder="MM/YY" type="string" value={foo(creditCard.expiry)} width="40%" textAlign="center" onChange={handleChangeCreditCardExpiry} />
      {/* {isError && <S.ErrorMessage>만료일은 MM/YY 형식이어야 합니다.</S.ErrorMessage>} */}
    </S.Box>
  );
}

export default CreditCardExpiryInput;
