import { useEffect, useRef, useState } from 'react';
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
  const [error, setError] = useState(false);

  const handleChangeCreditCardNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCreditCarNumber = event.target.value.replace(/\D/g, '');

    if (newCreditCarNumber.length > 16) return;

    const markedNumber = creditCard.convertSecuredCreditCard(newCreditCarNumber)
      .filter((numbers) => !!numbers.length)
      .map((numbers) => numbers.join(''))
      .join(' - ');

    setMarkedCreditCardNumber(markedNumber);
    setCreditCardNumber(newCreditCarNumber);
  };

  useEffect(() => {
    if (creditCardNumber.length > 0 && creditCardNumber.length < 16) {
      setError(true);
    } else {
      setError(false);
    }
  }, [creditCardNumber]);

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
      {error && <S.ErrorMessage>카드번호는 16자리의 숫자로만 이루어져야 합니다.</S.ErrorMessage>}
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
