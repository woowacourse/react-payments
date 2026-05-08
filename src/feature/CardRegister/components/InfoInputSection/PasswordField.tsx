import Label from '../../../../common/components/Label';
import Input from '../../../../common/components/Input';
import styled from 'styled-components';
import useFieldValidation from '../../../../common/hooks/useFieldValidation';
import { isWithinMaxLength, isNumeric } from '../../utils/validator';
import {
  PASSWORD_LENGTH,
  validatePassword,
} from '../../utils/cardFormValidator';

const PasswordField = ({
  autoFocus = false,
  password,
  handlePasswordNumberChange,
}: {
  autoFocus?: boolean;
  password: string;
  handlePasswordNumberChange: (value: string) => void;
}) => {
  const { firstErrorIndex, errorMessage, touch } = useFieldValidation({
    values: [password],
    validate: validatePassword,
  });

  const handlePasswordChange = (eValue: string) => {
    const value = eValue.trim();

    if (!isNumeric(value)) return;
    if (!isWithinMaxLength(value, PASSWORD_LENGTH)) return;

    handlePasswordNumberChange(value);
  };

  const handlePasswordBlur = (index: number) => {
    touch(index);
  };

  return (
    <StyledField>
      <Label value="비밀번호 앞 2자리" />
      <InputWrapper>
        <PasswordInput
          type="password"
          value={password}
          autoFocus={autoFocus}
          maxLength={3}
          inputMode="numeric"
          placeholder="**"
          strokeMode={0 === firstErrorIndex ? 'error' : 'default'}
          onChange={(e) => handlePasswordChange(e.target.value)}
          onBlur={() => handlePasswordBlur(0)}
        />
      </InputWrapper>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </StyledField>
  );
};

const StyledField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-top: 12px;

  width: 100%;
`;

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 14px;
`;

const PasswordInput = styled(Input)`
  box-sizing: border-box;
  width: 100%;
  height: 32px;
`;

const ErrorMessage = styled.span`
  min-height: 20px;
  font-size: 9.5px;
  font-weight: 400;
  color: #ff3d3d;
`;

export default PasswordField;
