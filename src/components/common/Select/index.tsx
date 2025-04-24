import { StyledSelectBox } from './SelectBox.styled';
import { StyledSelectContainer } from './SelectContainer.styled';
import { SelectedPreview } from './SelectedPreview';
import { SelectItem } from './SelectItem';

export type SelectProps = {
  options: string[];
  placeholder: string;
  isOpen: boolean;
  selectedItem: string | null;
  onItemSelect: (value: string) => void;
  onToggle: () => void;
};

export const Select = ({
  options,
  placeholder,
  isOpen,
  selectedItem,
  onItemSelect,
  onToggle,
}: SelectProps) => {
  const arrowIconSrc = isOpen ? './icon/chevron-down.png' : './icon/chevron-up.png';

  return (
    <StyledSelectContainer isOpen={isOpen} onClick={onToggle}>
      <SelectedPreview
        selectedItem={selectedItem}
        arrowIconSrc={arrowIconSrc}
        placeholder={placeholder}
      />
      {isOpen && (
        <StyledSelectBox>
          {options.map((option) => (
            <SelectItem key={option} option={option} onClick={() => onItemSelect(option)} />
          ))}
        </StyledSelectBox>
      )}
    </StyledSelectContainer>
  );
};
