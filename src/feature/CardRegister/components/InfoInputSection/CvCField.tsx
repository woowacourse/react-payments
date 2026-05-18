import Label from '../../../../common/components/Label';
import Input from '../../../../common/components/Input';
import styled from 'styled-components';
import type { CvcFieldType } from '../../hooks/useCvcField';

const CvcField = ({
  autoFocus = false,
  field,
  serverFieldError = '',
  onClearServerFieldError,
}: {
  autoFocus?: boolean;
  field: CvcFieldType;
  serverFieldError?: string;
  onClearServerFieldError: () => void;
}) => {
  return (
    <StyledField>
      <Label value="CVC" />
      <InputWrapper>
        <CvcInput
          value={field.cvcNumber}
          autoFocus={autoFocus}
          maxLength={4}
          inputMode="numeric"
          placeholder="123"
          strokeMode={field.hasError ? 'error' : 'default'}
          onChange={(e) => {
            field.handleChange(e.target.value);
            onClearServerFieldError();
          }}
          onBlur={() => field.handleBlur()}
        />
      </InputWrapper>

      {serverFieldError && <ServerErrorLine />}
      <ErrorMessage>{field.errorMessage || serverFieldError}</ErrorMessage>
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

const CvcInput = styled(Input)`
  box-sizing: border-box;
  width: 100%;
  height: 32px;
`;

const ServerErrorLine = styled.div`
  width: 100%;
  height: 1px;
  margin: 0;

  border: 0;
  background-color: #ff3d3d;
`;

const ErrorMessage = styled.span`
  min-height: 20px;
  font-size: 9.5px;
  font-weight: 400;
  color: #ff3d3d;
`;

export default CvcField;
