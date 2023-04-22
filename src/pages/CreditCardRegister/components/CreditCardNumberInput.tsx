import { useRef, useState } from 'react';
import creditCard from '../../../domains/creditCard';
import Input from '../../../components/Input';
import * as S from '../style';
import InputLayout from './InputLayout';

type Props = {
  creditCardNumber: string;
  errorMessage: string | null;
  setCreditCardNumber: React.Dispatch<React.SetStateAction<string>>;
};

function CreditCardNumberInput({ creditCardNumber, errorMessage, setCreditCardNumber }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [markedCreditCardNumber, setMarkedCreditCardNumber] = useState('');

  const handleChangeCreditCardNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCreditCarNumber = event.target.value;

    if (newCreditCarNumber.length > 16) return;

    const markedNumber = creditCard
      .convertSecuredCreditCard(newCreditCarNumber)
      .filter((numbers) => !!numbers.length)
      .map((numbers) => numbers.join(''))
      .join(' - ');

    setMarkedCreditCardNumber(markedNumber);
    setCreditCardNumber(newCreditCarNumber);
  };

  return (
    <InputLayout errorMessage={errorMessage}>
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
        maxLength={16}
      />
      <S.HiddenInput ref={inputRef} type="string" value={creditCardNumber} onChange={handleChangeCreditCardNumber} />
      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </InputLayout>
  );
}

export default CreditCardNumberInput;
