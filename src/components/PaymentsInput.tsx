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
    ::placeholder {
      font-family: 'Roboto';
      font-weight: 600;
    }
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
  title?: string;
  inputInformationList: InputInformation[];
  inputDivideLetter?: string | '';
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface InputInformation {
  type: string;
  isRequired: boolean;
  pattern: [number, number];
  name: string;
  placeholder?: string;
}

export type { PaymentsInputProps };

function PaymentsInput({ title, inputInformationList, inputDivideLetter, onChange }: PaymentsInputProps) {
  const inputAmount = inputInformationList.length;

  return (
    <div>
      {title && <LabelTitle>{title}</LabelTitle>}
      <InputContainer>
        {Array.from({ length: inputAmount - 1 }, (_, i) => (
          <>
            <InputItem
              name={inputInformationList[i].name}
              key={i}
              type={inputInformationList[i].type}
              pattern={`.{${inputInformationList[i].pattern[0]},${inputInformationList[i].pattern[1]}}`}
              maxLength={inputInformationList[i].pattern[1]}
              onChange={onChange}
              data-index={i}
              required={inputInformationList[i].isRequired}
              placeholder={inputInformationList[i].placeholder}
            />
            {inputDivideLetter && <InputDivider>{inputDivideLetter}</InputDivider>}
          </>
        ))}
        <InputItem
          name={inputInformationList[inputAmount - 1].name}
          type={inputInformationList[inputAmount - 1].type}
          pattern={`.{${inputInformationList[inputAmount - 1].pattern[0]},${
            inputInformationList[inputAmount - 1].pattern[1]
          }}`}
          maxLength={inputInformationList[inputAmount - 1].pattern[1]}
          onChange={onChange}
          data-index={inputAmount - 1}
          required={inputInformationList[inputAmount - 1].isRequired}
          placeholder={inputInformationList[inputAmount - 1].placeholder}
        />
      </InputContainer>
    </div>
  );
}

export default PaymentsInput;
