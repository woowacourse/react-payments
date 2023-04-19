import styled from 'styled-components';
import type { ChangeEvent } from 'react';

const LabelTitle = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  color: #525252;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 318px;
  height: 48.75px;
  margin-top: 8.67px;
  background: #ecebf1;
  border-radius: 7px;
  input[type='password'] {
    font-family: Verdana;
  }
`;

const InputItem = styled.input<{ maxLength: number }>`
  width: ${({ maxLength }) => maxLength * 12}px;
  font-size: 18px;
  text-align: center;
  background: none;
  border: none;
  outline: none;
  letter-spacing: 0.1em;
`;

const InputDivider = styled.div`
  font-size: 18px;
`;

interface PaymentsInputProps {
  title: string;
  inputAmount: number;
  maxLength: number;
  inputDivideLetter?: string | '';
  dataId?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export type { PaymentsInputProps };

function PaymentsInput({ title, inputAmount, maxLength, inputDivideLetter, dataId, onChange }: PaymentsInputProps) {
  return (
    <div>
      <LabelTitle>{title}</LabelTitle>
      <InputContainer>
        {Array.from({ length: inputAmount - 1 }, (_, i) => (
          <>
            <InputItem
              name={title}
              key={i}
              type="text"
              maxLength={maxLength}
              onChange={onChange}
              data-id={dataId}
              data-index={i}
            />
            {inputDivideLetter && <InputDivider>{inputDivideLetter}</InputDivider>}
          </>
        ))}
        <InputItem
          name={title}
          type="text"
          maxLength={maxLength}
          onChange={onChange}
          data-id={dataId}
          data-index={inputAmount - 1}
        />
      </InputContainer>
    </div>
  );
}

export default PaymentsInput;
