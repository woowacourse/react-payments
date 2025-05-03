import styled from '@emotion/styled';
import Input from '../../common/Input/Input';
import { useId } from 'react';

interface CardPasswordFieldProps {
  cardPassword: string;
  isError: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CardPasswordField({
  isError,
  cardPassword,
  onChange,
}: CardPasswordFieldProps) {
  const id = useId();

  return (
    <div>
      <Label htmlFor={`cardPassword-${id}`}>비밀번호 앞 2자리</Label>
      <InputWrapper>
        <Input
          isError={isError}
          type="password"
          name="cardPassword"
          id={`cardPassword-${id}`}
          value={cardPassword}
          onChange={onChange}
          maxLength={2}
          regexString={/^\d*$/}
          autoFocus={true}
        />
      </InputWrapper>
    </div>
  );
}

export default CardPasswordField;

const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 8px;
`;
const Label = styled.label`
  font-size: 12px;
`;
