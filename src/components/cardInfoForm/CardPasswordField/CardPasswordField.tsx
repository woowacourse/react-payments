import styled from '@emotion/styled';
import Input from '../../common/Input/Input';

interface CardPasswordFieldProps {
  hasError: boolean;
  cardPassword: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CardPasswordField({
  hasError,
  cardPassword,
  onChange,
}: CardPasswordFieldProps) {
  return (
    <div>
      <Label htmlFor="CardPassword">비밀번호 앞 2자리</Label>
      <InputWrapper>
        <Input
          hasError={hasError}
          type="password"
          name="CardPassword"
          id="CardPassword"
          value={cardPassword}
          onChange={onChange}
          placeholder="12"
          min={0}
          max={99}
          autoFocus={cardPassword.length === 0 && !hasError}
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
