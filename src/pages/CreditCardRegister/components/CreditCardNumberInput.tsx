import { useRef } from 'react';
import Input from '../../../components/Input';
import * as S from '../style';

type Props = {
  markedCreditCardNumber: string;
  creditCardNumber: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
};

function CreditCardNumberInput({ markedCreditCardNumber, creditCardNumber, onChange }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
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
        onChange={onChange}
      />
    </S.RelativeBox>
  );
}

export default CreditCardNumberInput;
