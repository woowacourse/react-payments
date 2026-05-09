import React, {useRef} from 'react';
import Input from '../../../../../common/components/Input/Input';
import styled from 'styled-components';
import {StyledField, ErrMessage} from '../inputFieldStyles';

type Props = {
  expiryDate: string[];
  firstErrIdx: number;
  errMsg: string;
  handleChange: (index: number, value: string) => void;
  handleBlur: (index: number, value: string) => void;
};

const ExpiryField = ({expiryDate, firstErrIdx, errMsg, handleChange, handleBlur}: Props) => {
  const monthRef = useRef<HTMLInputElement | null>(null);
  const yearRef = useRef<HTMLInputElement | null>(null);

  const onMonthChange = (value: string) => {
    handleChange(0, value);
    if (value.length === 2 && /^\d+$/.test(value)) {
      yearRef.current?.focus();
    }
  };

  const onYearKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && expiryDate[1] === '') {
      monthRef.current?.focus();
    }
  };

  return (
    <StyledField>
      <InputWrapper>
        <ExpiryInput
          ref={monthRef}
          value={expiryDate[0]}
          maxLength={2}
          inputMode='numeric'
          placeholder='MM'
          strokeMode={firstErrIdx === 0 ? 'error' : 'default'}
          onChange={(e) => onMonthChange(e.target.value)}
          onBlur={(e) => handleBlur(0, e.target.value)}
        />
        <ExpiryInput
          ref={yearRef}
          value={expiryDate[1]}
          maxLength={2}
          placeholder='YY'
          inputMode='numeric'
          strokeMode={firstErrIdx === 1 ? 'error' : 'default'}
          onChange={(e) => handleChange(1, e.target.value)}
          onBlur={(e) => handleBlur(1, e.target.value)}
          onKeyDown={onYearKeyDown}
        />
      </InputWrapper>

      <ErrMessage>{errMsg}</ErrMessage>
    </StyledField>
  );
};

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

export default ExpiryField;
