import { useState } from 'react';
import styled from 'styled-components';

interface SelectorProps<T extends string> {
  dropDownOptions: T[];
  placeholder: string;
  onSelectChange: (value: T) => void;
}

function Selector<T extends string>({
  dropDownOptions,
  placeholder,
  onSelectChange,
}: SelectorProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<T | string>(placeholder);

  const handleSelectedOption = (e: React.MouseEvent<HTMLUListElement>) => {
    const targetId = (e.target as HTMLDivElement).id;
    setSelectedValue(targetId as T);
    setIsOpen(false);
    onSelectChange(targetId as T);
  };

  return (
    <SelectorContainer>
      <DropDownDefault
        $isOpen={isOpen}
        $isDefaultValue={selectedValue === placeholder}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selectedValue}
      </DropDownDefault>
      <DropDownIcon
        src={`./img/${!isOpen ? 'chevron-up' : 'chevron-down'}.png`}
      />
      {isOpen && (
        <DropDownContainer onClick={(e) => handleSelectedOption(e)}>
          {dropDownOptions.map((option) => (
            <DropDownOptions id={option}>{option}</DropDownOptions>
          ))}
        </DropDownContainer>
      )}
    </SelectorContainer>
  );
}

const DropDownIcon = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 16px;
`;

const DropDownOptions = styled.li`
  font-family: Inter;
  font-weight: 400;
  font-size: 10.63px;
  color: #4f4f4f;
  padding: 8px;

  &:hover {
    background-color: #f3f3f3;
    cursor: pointer;
  }
`;

const DropDownDefault = styled.div<{
  $isOpen: boolean;
  $isDefaultValue: boolean;
}>`
  font-family: Inter;
  font-weight: 400;
  font-size: 10px;
  color: ${(props) => (props.$isDefaultValue ? '#acacac' : '#000')};
  padding: 10px;
  border: 1px solid #acacac;
  border-color: ${(props) => (props.$isOpen ? '#000' : '#acacac')};
  border-radius: 4px;
`;

const DropDownContainer = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  top: 36px;
  border: 1px solid #acacac;
  border-radius: 5px;
  background-color: white;
`;

const SelectorContainer = styled.div`
  position: relative;
`;

export default Selector;
