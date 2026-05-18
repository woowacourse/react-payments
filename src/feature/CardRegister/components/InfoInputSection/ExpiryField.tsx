import Label from '../../../../common/components/Label';
import Input from '../../../../common/components/Input';
import styled from 'styled-components';
import type { ExpiryFieldType } from '../../hooks/useExpiryField';

const ExpiryField = ({
  autoFocus = false,
  field,
  serverFieldError = '',
  onClearServerFieldError,
}: {
  autoFocus?: boolean;
  field: ExpiryFieldType;
  serverFieldError?: string;
  onClearServerFieldError: () => void;
}) => {
  return (
    <StyledField>
      <Label value="유효기간" />
      <InputWrapper>
        <ExpiryInput
          ref={field.setInputRef(0)}
          value={field.expiryMonth}
          autoFocus={autoFocus}
          maxLength={2}
          inputMode="numeric"
          placeholder="MM"
          strokeMode={0 === field.firstErrorIndex ? 'error' : 'default'}
          onChange={(e) => {
            field.handleMonthChange(e.target.value);
            onClearServerFieldError();
          }}
          onBlur={(e) => field.handleExpiryBlur(0, e.target.value, 'month')}
        />
        <ExpiryInput
          ref={field.setInputRef(1)}
          value={field.expiryYear}
          maxLength={2}
          placeholder="YY"
          inputMode="numeric"
          strokeMode={1 === field.firstErrorIndex ? 'error' : 'default'}
          onChange={(e) => {
            field.handleYearChange(e.target.value);
            onClearServerFieldError();
          }}
          onBlur={(e) => field.handleExpiryBlur(1, e.target.value, 'year')}
          onKeyDown={(event) => field.handleKeyDown(1, event)}
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
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
`;

const ExpiryInput = styled(Input)`
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

export default ExpiryField;
