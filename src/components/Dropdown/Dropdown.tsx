import { useState } from 'react';
import {
  StyledDropdown,
  StyledSelect,
  StyledSelectText,
  StyledSelectImage,
  StyledOptions,
  StyledOption,
} from './style';

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
    <StyledOption onClick={() => handleOptionChange(option)}>{option}</StyledOption>
  ));

  return (
    <StyledDropdown>
      <StyledSelect $isOpen={isOpen} onClick={handleToggleDropdown}>
        <StyledSelectText $selected={selectedOptionState.value}>
          {selectedOptionState.value || selectText}
        </StyledSelectText>
        <StyledSelectImage $isOpen={isOpen}>{isOpen ? '⬇️' : '⬆️'}</StyledSelectImage>
      </StyledSelect>
      {isOpen && <StyledOptions>{options}</StyledOptions>}
    </StyledDropdown>
  );
};

export default Dropdown;
