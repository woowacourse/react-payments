import Input from '../../../../common/components/Input';
import Label from '../../../../common/components/Label';
import styled from 'styled-components';
import type { NumbersFieldType } from '../../hooks/useNumbersField';

const NumberField = ({
  autoFocus = false,
  field,
  serverFieldError = '',
  onClearServerFieldError,
}: {
  autoFocus?: boolean;
  field: NumbersFieldType;
  serverFieldError?: string;
  onClearServerFieldError?: () => void;
}) => {
  return (
    <StyledField>
      <Label value="카드 번호" />
      <InputWrapper>
        {field.cardNumbers.map((chunk, index) => (
          <CardNumberInput
            key={index}
            ref={field.setInputRef(index)}
            value={chunk}
            autoFocus={autoFocus && index === 0}
            placeholder={'1234'.slice(0, field.segmentLengths[index])}
            inputMode="numeric"
            maxLength={field.segmentLengths[index]}
            strokeMode={index === field.firstErrorIndex ? 'error' : 'default'}
            onChange={(e) => {
              field.handleNumbersChange(index, e.target.value);
              onClearServerFieldError?.();
            }}
            onBlur={() => field.handleNumbersBlur(index)}
            onKeyDown={(event) => field.handleKeyDown(index, event)}
          />
        ))}
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
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
`;

const CardNumberInput = styled(Input)`
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

export default NumberField;
