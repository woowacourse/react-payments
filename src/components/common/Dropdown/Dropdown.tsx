import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { DropdownOptionType } from '../../../types/dropdown';

function Dropdown({
  options,
  selectedValue,
  setSelectedValue,
  placeholder,
}: {
  options: DropdownOptionType[];
  selectedValue: DropdownOptionType | null;
  setSelectedValue: Dispatch<SetStateAction<DropdownOptionType | null>>;
  placeholder: string;
}) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => setOpen((prev) => !prev);

  const handleSelect = (option: DropdownOptionType) => {
    setOpen(false);
    setSelectedValue(option);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownToggle onClick={toggleOpen}>
        <DropdownText $isSelected={selectedValue !== null}>
          {selectedValue?.label || placeholder}
        </DropdownText>
        <DropdownChevron
          src="./svg/chevron-up.svg"
          alt="dropdown-chevron"
          $isOpen={open}
        />
      </DropdownToggle>
      <DropdownMenu $isOpen={open}>
        {options.map((option) => (
          <DropdownMenuItem
            key={option.value}
            data-value={option.value}
            onClick={() => handleSelect(option)}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenu>
    </DropdownContainer>
  );
}

const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
`;

const DropdownToggle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border: 1px solid #acacac;
  border-radius: 4px;
  background: white;
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
`;

const DropdownText = styled.p<{ $isSelected: boolean }>`
  font-family: Inter;
  font-weight: 400;
  font-size: 12px;
  color: ${(props) => (props.$isSelected ? 'black' : '#acacac')};
`;

const DropdownChevron = styled.img<{ $isOpen: boolean }>`
  width: 16px;
  height: 16px;
  rotate: ${(props) => (props.$isOpen ? '180deg' : '')};
  color: #acacac;
`;

const DropdownMenu = styled.div<{ $isOpen: boolean }>`
  width: 100%;
  border: 1px solid #acacac;
  border-radius: 4px;
  background: white;
  list-style: none;
  box-sizing: border-box;
  position: absolute;
  margin-top: 4px;
  top: 100%;
  left: 0;
  display: ${(props) => (props.$isOpen ? 'block' : 'none')};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

const DropdownMenuItem = styled.li`
  font-family: Inter;
  font-weight: 400;
  font-size: 12px;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export default Dropdown;
