import { useState } from 'react';

import { StyledSelectBox } from './SelectBox.styled';
import { StyledSelectContainer } from './SelectContainer.styled';
import { SelectedPreview } from './SelectedPreview';
import { SelectItem } from './SelectItem';

export type SelectProps = {
  options: string[];
  placeholder: string;
  selectedItem: string | null;
  onItemSelect: (value: string) => void;
};

export const Select = ({ options, placeholder, selectedItem, onItemSelect }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const arrowIconSrc = isOpen ? './icon/chevron-down.png' : './icon/chevron-up.png';

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleItemSelect = (value: string) => {
    onItemSelect(value);
    setIsOpen(false);
  };

  return (
    <StyledSelectContainer isOpen={isOpen} onClick={handleToggle}>
      <SelectedPreview
        selectedItem={selectedItem}
        arrowIconSrc={arrowIconSrc}
        placeholder={placeholder}
      />
      {isOpen && (
        <StyledSelectBox>
          {options.map((option) => (
            <SelectItem key={option} option={option} onClick={() => handleItemSelect(option)} />
          ))}
        </StyledSelectBox>
      )}
    </StyledSelectContainer>
  );
};
