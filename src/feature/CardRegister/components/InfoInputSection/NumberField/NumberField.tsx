import {useRef} from 'react';
import Input from '../../../../../common/components/Input/Input';
import styled from 'styled-components';

type Props = {
  cardNumbers: string[];
  format: number[];
  firstErrorIdx: number;
  errorMsg: string;
  onChange: (index: number, value: string) => void;
  onBlur: (index: number, value: string) => void;
};

const generatePlaceholder = (length: number) =>
  Array.from({length}, (_, i) => (i + 1) % 10).join('');

const NumberField = ({cardNumbers, format, firstErrorIdx, errorMsg, onChange, onBlur}: Props) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    onChange(index, value);
    if (value.length === format[index] && /^\d+$/.test(value) && index < format.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <StyledField>
      <InputWrapper $columns={format.map((n) => `${n}fr`).join(' ')}>
        {format.map((maxLen, index) => (
          <CardNumberInput
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            value={cardNumbers[index] ?? ''}
            placeholder={generatePlaceholder(maxLen)}
            inputMode='numeric'
            maxLength={maxLen}
            strokeMode={index === firstErrorIdx ? 'error' : 'default'}
            onChange={(e) => handleChange(index, e.target.value)}
            onBlur={(e) => onBlur(index, e.target.value)}
          />
        ))}
      </InputWrapper>

      <ErrorMessage>{errorMsg}</ErrorMessage>
    </StyledField>
  );
};

const StyledField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 100%;
`;

const InputWrapper = styled.div<{$columns: string}>`
  display: grid;
  grid-template-columns: ${({$columns}) => $columns};
  gap: 8px;
`;

const CardNumberInput = styled(Input)`
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

export default NumberField;
