import {
  ExpirationDateInput,
  NameInput,
  SecurityCodeInput,
  PasswordInput,
  CardNumberInputs,
  ValueAndOnChange,
} from 'components/Input';
import styled from 'styled-components';
import { Label } from 'components/common';
import { useState } from 'react';

function AddCardForm() {
  const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);

  const valueAndOnChanges: ValueAndOnChange[] = cardNumbers.map((cardNumber, index) => ({
    value: cardNumber,
    onChange: (e) => {
      const { value } = e.target;
      const isNumber = !isNaN(Number(value));
      if (!isNumber) return;

      setCardNumbers((prev) => {
        const prevCardNumbers = [...prev];
        prevCardNumbers.splice(index, 1, value);

        return prevCardNumbers;
      });
    },
  }));

  return (
    <FormContainer>
      <Label text="카드 번호" />
      <CardNumberInputs valueAndOnChanges={valueAndOnChanges} />
      <Label text="만료일" />
      <ExpirationDateInput />
      <Label text="카드 소유자 이름(선택)" />
      <NameInput />
      <Label text="보안 코드(CVC/CVV)" />
      <SecurityCodeInput />
      <Label text="카드 비밀번호" />
      <PasswordInput />
      <button type="submit">다음</button>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

export default AddCardForm;
