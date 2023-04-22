import { useEffect, useRef, useState } from 'react';

import creditCard from '@Domains/creditCard';

import InputLayout from './InputLayout';
import * as S from '../style';

type Props = {
  creditCardNumber: string;
  errorMessage: string | null;
  setCreditCardNumber: React.Dispatch<React.SetStateAction<string>>;
};

function CreditCardNumberInput({ creditCardNumber, errorMessage, setCreditCardNumber }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [markedCreditCardNumber, setMarkedCreditCardNumber] = useState('');
  const [isHoverFakeInput, setIsHoverFakeInput] = useState(true);

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

  const handleFakeInputClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleHiddenInputBlur = () => setIsHoverFakeInput(false);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <InputLayout errorMessage={errorMessage}>
      <S.CreditCardRegisterLabel>카드 번호</S.CreditCardRegisterLabel>
      <S.FakeInput onClick={handleFakeInputClick} isHover={isHoverFakeInput}>
        {markedCreditCardNumber}
      </S.FakeInput>
      <S.HiddenInput
        ref={inputRef}
        type="string"
        value={creditCardNumber}
        onChange={handleChangeCreditCardNumber}
        onBlur={handleHiddenInputBlur}
        maxLength={16}
      />
      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </InputLayout>
  );
}

export default CreditCardNumberInput;
