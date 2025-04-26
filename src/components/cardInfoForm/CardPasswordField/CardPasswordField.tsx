import styled from '@emotion/styled';
import Input from '../../common/Input/Input';

interface CardPasswordFieldProps {
  isError: boolean;
  cardPassword: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CardPasswordField({
  isError,
  cardPassword,
  onChange,
}: CardPasswordFieldProps) {
  return (
    <div>
      <Label htmlFor="CardPassword">비밀번호 앞 2자리</Label>
      <InputWrapper>
        <Input
          isError={isError}
          type="password"
          name="CardPassword"
          id="CardPassword"
          value={cardPassword}
          onChange={onChange}
          placeholder="12"
          min={0}
          max={99}
          autoFocus={cardPassword.length === 0 && !isError}
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
