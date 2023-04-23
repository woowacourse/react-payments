import { useRef, useState } from 'react';
import { convertSecuredCreditCard } from 'domains/creditCard';
import Input from '../../../components/Input';
import * as S from '../style';

type Props = {
  creditCardNumber: string;
  setCreditCardNumber: React.Dispatch<React.SetStateAction<string>>;
};

function CreditCardNumberInput({ creditCardNumber, setCreditCardNumber }: Props) {
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
    setCreditCardNumber(newCreditCardNumber);
  };

  const isError = creditCardNumber.length > 0 && creditCardNumber.length < 16;

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
      <S.HiddentInput
        ref={inputRef}
        type="string"
        value={creditCardNumber}
        onChange={handleChangeCreditCardNumber}
      />
    </S.RelativeBox>
  );
}

export default CreditCardNumberInput;
