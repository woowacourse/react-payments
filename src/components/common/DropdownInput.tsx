import styled from '@emotion/styled';
import { useState } from 'react';

interface DropdownInputProps {
  value: string;
  setValue: (value: string) => void;
  options: string[];
  placeholder?: string;
}

function DropdownInput({ value, setValue, options, placeholder }: DropdownInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isPlaceholder = value === '';

  return (
    <DropdownInputContainer isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)}>
      <DropdownLabel isPlaceholder={isPlaceholder}>
        {isPlaceholder ? placeholder : value}
      </DropdownLabel>
      <DropdownIcon isOpen={isOpen} />
      {isOpen && (
        <DropdownOptionsContainer>
          {options.map((option, index) => (
            <DropdownOption key={index} onClick={() => setValue(option)}>
              {option}
            </DropdownOption>
          ))}
        </DropdownOptionsContainer>
      )}
    </DropdownInputContainer>
  );
}

export default DropdownInput;

const DropdownInputContainer = styled.div<{ isOpen: boolean }>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 6px 8px;
  border: 1px solid ${({ isOpen }) => (isOpen ? '#000' : '#acacac')};
  border-radius: 2px;
  user-select: none;
`;

const DropdownLabel = styled.p<{ isPlaceholder: boolean }>`
  color: ${({ isPlaceholder }) => (isPlaceholder ? '#acacac' : '#000')};
`;

const DropdownIcon = styled.div<{ isOpen: boolean }>`
  width: 15px;
  height: 15px;
  border-radius: 2px;
  background-size: cover;
  background-position: center;
  background-image: url('./assets/dropdown-arrow.png');
  transform: rotateZ(${({ isOpen }) => (isOpen ? '0deg' : '180deg')});
`;

const DropdownOptionsContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 45px;
  left: 0px;
  z-index: 10;
  border: 1px solid #acacac;
  background: white;
  border-radius: 2px;
`;

const DropdownOption = styled.div`
  padding: 6px 8px;
  transition: 0.3s all;

  &:hover {
    background-color: #eee;
  }
`;
