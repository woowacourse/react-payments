import { useState } from 'react';
import styled from 'styled-components';
import InputListBox from './InputListBox';

interface NamedInputListBoxProps {
  inputListInformation: React.ComponentPropsWithoutRef<typeof InputListBox>;
  name: string;
  id?: string;
  showNumberOfValue?: boolean;
}

function NamedInputListBox({ inputListInformation, name, id, showNumberOfValue = false }: NamedInputListBoxProps) {
  const maxInputLength = inputListInformation.inputInformation.reduce((accumulator, { maxLength }) => {
    if (maxLength) {
      return accumulator + maxLength;
    }
    return accumulator;
  }, 0);

  const inputAmount = inputListInformation.inputInformation.length;

  const [inputValue, setInputValue] = useState<string[]>(Array.from({ length: inputAmount }));

  const getInputValue = (callback: React.SetStateAction<string[]>) => {
    setInputValue(callback);
    inputListInformation.getInputListValue(callback);
  };

  return (
    <>
      {name && (
        <StyledLabel htmlFor={id}>
          <span>{name}</span>
          {showNumberOfValue && (
            <span>
              {inputValue?.join('').length}
              {maxInputLength !== 0 && `/${maxInputLength}`}
            </span>
          )}
        </StyledLabel>
      )}
      <InputListBox {...inputListInformation} getInputListValue={getInputValue} />
    </>
  );
}

const StyledLabel = styled.label`
  display: flex;
  justify-content: space-between;
`;

export default NamedInputListBox;
