import { useRef, useState } from 'react';
import creditCard from '../../../domains/creditCard';
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
    const newCreditCarNumber = event.target.value;

    if (newCreditCarNumber.length > 16) return;

    const markedNumber = creditCard.convertSecuredCreditCard(newCreditCarNumber)
      .filter((numbers) => !!numbers.length)
      .map((numbers) => numbers.join(''))
      .join(' - ');

    setMarkedCreditCardNumber(markedNumber);
    setCreditCardNumber(newCreditCarNumber);
  };

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
