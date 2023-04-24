import { useRef, useState } from 'react';
import { convertSecuredCreditCard } from 'domains/creditCard';
import * as T from 'types';
import styled from 'styled-components';
import * as S from '../style';
import { validateNumber } from '../validations';

export const MaskedViewer = styled.p`
    background-color: #ECEBF1;
    border-radius: 7px;
    height: 48px;
    width: 100%;
    border: none;
    font-size: 18px;
    :focus {
        outline: none;
    }
    margin-right: 10px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
`;

type Props = {
  name: keyof T.CreditCard;
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

  const isError = validateNumber(creditCard.number);

  return (
    <S.RelativeBox>
      <S.CreditCardRegisterLabel>카드 번호</S.CreditCardRegisterLabel>
      <MaskedViewer
        onClick={() => {
          if (inputRef.current) {
            inputRef.current.focus();
          }
        }}
      >
        {markedCreditCardNumber}
      </MaskedViewer>
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
