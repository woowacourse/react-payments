import Label from '../../../../common/components/Label';
import Input from '../../../../common/components/Input';
import styled from 'styled-components';
import type { PasswordFieldType } from '../../hooks/usePasswordField';

const PasswordField = ({
  autoFocus = false,
  field,
}: {
  autoFocus?: boolean;
  field: PasswordFieldType;
}) => {
  return (
    <StyledField>
      <Label value="비밀번호 앞 2자리" />
      <InputWrapper>
        <PasswordInput
          type="password"
          value={field.password}
          autoFocus={autoFocus}
          maxLength={2}
          inputMode="numeric"
          placeholder="**"
          strokeMode={field.hasError ? 'error' : 'default'}
          onChange={(e) => field.handleChange(e.target.value)}
          onBlur={() => field.handleBlur()}
        />
      </InputWrapper>
      <ErrorMessage>{field.errorMessage}</ErrorMessage>
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
