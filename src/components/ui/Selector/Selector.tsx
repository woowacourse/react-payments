import { ComponentProps, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { CardIssuerSelectorType } from '../../../config/inputField';

interface SelectorProps<T> extends ComponentProps<'button'> {
  dropDownOptions: T[];
  placeholder: string;
  onSelectChange: (value: T) => void;
}

function Selector<T extends CardIssuerSelectorType | string>({
  dropDownOptions,
  placeholder,
  onSelectChange,
  ref,
}: SelectorProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>(placeholder);
  const [focusIndex, setFocusIndex] = useState(0);
  const divRef = useRef<(HTMLLIElement | null)[]>([]);

  const handleSelectedOption = (
    e: React.MouseEvent<HTMLUListElement> | React.KeyboardEvent
  ) => {
    const targetId = (e.target as HTMLDivElement).id;
    setSelectedValue(targetId as T);
    setIsOpen(false);
    onSelectChange(targetId as T);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const target = e.target as HTMLUListElement | HTMLButtonElement;
    if (e.key === 'ArrowDown') {
      setFocusIndex((prev) => Math.min(dropDownOptions.length, prev + 1));
    } else if (e.key === 'ArrowUp') {
      setFocusIndex((prev) => Math.max(0, prev - 1));
    } else if (e.key === 'Enter' && !(target instanceof HTMLButtonElement)) {
      handleSelectedOption(e);
    }
  };

  useEffect(() => {
    divRef.current[focusIndex]?.focus();
  }, [focusIndex]);

  return (
    <SelectorContainer>
      <DropDownDefault
        ref={ref}
        $isOpen={isOpen}
        $isDefaultValue={selectedValue === placeholder}
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
      >
        {selectedValue}
      </DropDownDefault>
      <DropDownIcon
        src={`./img/${!isOpen ? 'chevron-up' : 'chevron-down'}.png`}
      />
      {isOpen && (
        <DropDownContainer onClick={(e) => handleSelectedOption(e)}>
          {dropDownOptions.map((option, index) => (
            <DropDownOptions
              key={index}
              id={option}
              tabIndex={-1}
              ref={(el) => {
                divRef.current[index] = el;
              }}
              onKeyDown={handleKeyDown}
            >
              {option}
            </DropDownOptions>
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

  &:hover,
  &:focus {
    background-color: #f3f3f3;
    cursor: pointer;
    outline: none;
  }
`;

const DropDownDefault = styled.button<{
  $isOpen: boolean;
  $isDefaultValue: boolean;
}>`
  display: flex;
  padding: 10px;
  width: 100%;
  border: 1px solid #acacac;
  border-color: ${(props) => (props.$isOpen ? '#000' : '#acacac')};
  color: ${(props) => (props.$isDefaultValue ? '#acacac' : '#000')};
  box-sizing: border-box;
  border-radius: 4px;
  font-family: Inter;
  font-weight: 400;
  font-size: 10px;
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
