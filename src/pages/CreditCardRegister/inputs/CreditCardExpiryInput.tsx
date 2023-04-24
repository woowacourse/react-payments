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

    if (newCardExpiry.length <= 2) setCreditCard({ ...creditCard, [name]: newCardExpiry });
    else if (newCardExpiry.length <= 4) {
      const newCardExpiryArray = newCardExpiry.split('');
      newCardExpiryArray.splice(2, 0, '/');
      setCreditCard({ ...creditCard, [name]: newCardExpiryArray.join('') });
    }
  };

  // @deprecated 이전 예정
  useEffect(() => {
    if (creditCard.expiry.length === 5) {
      const [month, year] = creditCard.expiry.split('/').map((str) => parseInt(str, 10));
      if (month < 1 || month > 12 || year <= 22) {
        setCreditCard({ ...creditCard, [name]: '' });
      }
    }
  }, [creditCard.expiry]);

  const isError = creditCard.expiry.length > 0 && creditCard.expiry.length < 5;

  return (
    <S.Box>
      <S.CreditCardRegisterLabel>만료일</S.CreditCardRegisterLabel>
      <Input placeholder="MM /YY" type="string" value={creditCard.expiry} width="40%" textAlign="center" onChange={handleChangeCreditCardExpiry} />
      {isError && <S.ErrorMessage>만료일은 MM/YY 형식이어야 합니다.</S.ErrorMessage>}
    </S.Box>
  );
}

export default CreditCardExpiryInput;
