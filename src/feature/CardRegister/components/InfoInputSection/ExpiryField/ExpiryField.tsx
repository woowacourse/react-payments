import {useRef} from 'react';
import Input from '../../../../../common/components/Input/Input';
import styled from 'styled-components';
import type {useExpiryDate} from '../../../hooks/useExpiryDate';

type Props = ReturnType<typeof useExpiryDate>;

const ExpiryField = ({expiryMonth, expiryYear, firstErrorIdx, errorMsg, handleMonthChange, handleYearChange, handleBlur}: Props) => {
  const yearRef = useRef<HTMLInputElement | null>(null);

  const onMonthChange = (value: string) => {
    handleMonthChange(value);
    if (value.length === 2 && /^\d+$/.test(value)) {
      yearRef.current?.focus();
    }
  };

  return (
    <StyledField>
      <InputWrapper>
        <ExpiryInput
          value={expiryMonth}
          maxLength={2}
          inputMode='numeric'
          placeholder='MM'
          strokeMode={0 === firstErrorIdx ? 'error' : 'default'}
          onChange={(e) => onMonthChange(e.target.value)}
          onBlur={(e) => handleBlur(0, e.target.value, 'month')}
        />
        <ExpiryInput
          ref={yearRef}
          value={expiryYear}
          maxLength={2}
          placeholder='YY'
          inputMode='numeric'
          strokeMode={1 === firstErrorIdx ? 'error' : 'default'}
          onChange={(e) => handleYearChange(e.target.value)}
          onBlur={(e) => handleBlur(1, e.target.value, 'year')}
        />
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

const ErrorMessage = styled.span`
  min-height: 20px;
  font-size: 9.5px;
  font-weight: 400;
  color: #ff3d3d;
`;

export default ExpiryField;
