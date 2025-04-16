import styled from '@emotion/styled';
import Input from '../../common/Input/Input';
import { useState } from 'react';

function CardCVCField() {
  const [cardCVC, setCardCVC] = useState(0);
  const [isError, setIsError] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const isValid = value.length < 3;
    setIsError(isValid);
    setCardCVC(Number.parseInt(value, 10));
  };

  return (
    <div>
      <Label htmlFor="CardCVC-0" id="CardCVC">
        CVC
      </Label>
      <InputWrapper>
        <Input
          isError={isError}
          type="number"
          name="CardCVC"
          value={cardCVC}
          aria-labelledby="CardCVC"
          onChange={onChange}
        />
      </InputWrapper>
    </div>
  );
}

export default CardCVCField;

const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 8px;
`;
const Label = styled.label`
  font-size: 12px;
`;
