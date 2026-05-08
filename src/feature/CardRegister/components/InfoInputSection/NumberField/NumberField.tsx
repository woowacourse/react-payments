import {useRef} from 'react';
import Input from '../../../../../common/components/Input/Input';
import Label from '../../../../../common/components/Label/Label';
import type {CardNumbersType} from '../../../../../common/types/CardInfoType';
import styled from 'styled-components';

type Props = {
  cardNumbers: CardNumbersType;
  format: number[];
  firstErrorIdx: number;
  errorMsg: string;
  onChange: (index: number, value: string) => void;
  onBlur: (index: number, value: string) => void;
};

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
      <Label value='카드 번호' />
      <InputWrapper $columns={format.map((n) => `${n}fr`).join(' ')}>
        {format.map((maxLen, index) => (
          <CardNumberInput
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            value={cardNumbers[index] ?? ''}
            placeholder='1234'
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

  margin-top: 12px;

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
