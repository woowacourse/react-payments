import styled from '@emotion/styled';
import Input from '../../common/Input/Input';

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
  return (
    <div>
      <Label htmlFor="cardPassword">비밀번호 앞 2자리</Label>
      <InputWrapper>
        <Input
          isError={isError}
          type="password"
          name="cardPassword"
          id="cardPassword"
          value={cardPassword}
          onChange={onChange}
          maxLength={2}
          regexString={/^\d*$/}
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
