import { useRef, useState } from 'react';
import { convertSecuredCreditCard } from 'domains/creditCard';
import * as T from 'types';
import Input from '../../../components/Input';
import * as S from '../style';

type Props = {
  name: string;
  creditCard: T.CreditCard;
  setCreditCard: React.Dispatch<React.SetStateAction<T.CreditCard>>;
};

function CreditCardNumberInput({ name, creditCard, setCreditCard }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [markedCreditCardNumber, setMarkedCreditCardNumber] = useState('');

  const handleChangeCreditCardNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCreditCardNumber = event.target.value.replace(/\D/g, '');

    if (newCreditCardNumber.length > 16) return;

    const markedNumber = convertSecuredCreditCard(newCreditCardNumber)
      .filter((numbers) => !!numbers.length)
      .map((numbers) => numbers.join(''))
      .join(' - ');

    setMarkedCreditCardNumber(markedNumber);
    setCreditCard({ ...creditCard, [name]: newCreditCardNumber });
  };

  const isError = creditCard.number.length > 0 && creditCard.number.length < 16;

  return (
    <S.RelativeBox>
      <S.CreditCardRegisterLabel>카드 번호</S.CreditCardRegisterLabel>
      <Input
        type="string"
        value={markedCreditCardNumber}
        width="100%"
        textAlign="center"
        onClick={() => {
          if (inputRef.current) {
            inputRef.current.focus();
          }
        }}
        onChange={() => { }}
      />
      {isError && <S.ErrorMessage>카드번호는 16자리의 숫자로만 이루어져야 합니다.</S.ErrorMessage>}
      <S.HiddenInput
        ref={inputRef}
        type="string"
        value={creditCard.number}
        onChange={handleChangeCreditCardNumber}
      />
    </S.RelativeBox>
  );
}

export default CreditCardNumberInput;
