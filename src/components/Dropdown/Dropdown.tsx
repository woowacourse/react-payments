import { useState } from 'react';
import * as Styled from './style';

interface SelectedOptionStateType {
  value: string;
  setValue: (value: string) => void;
}

interface DropdownType {
  optionArray: string[];
  selectText: string;
  selectedOptionState: SelectedOptionStateType;
}

const Dropdown = ({ optionArray, selectText, selectedOptionState }: DropdownType) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionChange = (option: string) => {
    selectedOptionState.setValue(option);
    setIsOpen(false);
  };

  const options = optionArray.map((option) => (
    <Styled.Option onClick={() => handleOptionChange(option)}>{option}</Styled.Option>
  ));

  return (
    <Styled.Dropdown>
      <Styled.Select $isOpen={isOpen} onClick={handleToggleDropdown}>
        <Styled.SelectText $selected={selectedOptionState.value}>
          {selectedOptionState.value || selectText}
        </Styled.SelectText>
        <Styled.SelectImage $isOpen={isOpen}>{isOpen ? '⬇️' : '⬆️'}</Styled.SelectImage>
      </Styled.Select>
      {isOpen && <Styled.Options>{options}</Styled.Options>}
    </Styled.Dropdown>
  );
};

export default Dropdown;
