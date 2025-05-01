import styled from '@emotion/styled';
import { useRef, useState } from 'react';
import useClickOutsideHandler from '../../hooks/useClickOutsideHandler';

interface DropdownInputProps {
  value: string;
  setValue: (value: string) => void;
  options: string[];
  placeholder?: string;
}

function DropdownInput({ value, setValue, options, placeholder }: DropdownInputProps) {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutsideHandler(dropdownRef, () => setIsOpen(false), isOpen);

  const isPlaceholder = value === '';

  return (
    <S.DropdownInputContainer
      isOpen={isOpen}
      onClick={() => setIsOpen((prev) => !prev)}
      ref={dropdownRef}>
      <S.DropdownLabel isPlaceholder={isPlaceholder}>
        {isPlaceholder ? placeholder : value}
      </S.DropdownLabel>
      <S.DropdownIcon isOpen={isOpen} />
      {isOpen && (
        <S.DropdownOptionsContainer>
          {options.map((option, index) => (
            <S.DropdownOption key={index} onClick={() => setValue(option)}>
              {option}
            </S.DropdownOption>
          ))}
        </S.DropdownOptionsContainer>
      )}
    </S.DropdownInputContainer>
  );
}

export default DropdownInput;

const S = {
  DropdownInputContainer: styled.div<{ isOpen: boolean }>`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 6px 8px;
    border: 1px solid ${({ isOpen }) => (isOpen ? '#000' : '#acacac')};
    border-radius: 2px;
    user-select: none;
  `,

  DropdownLabel: styled.p<{ isPlaceholder: boolean }>`
    color: ${({ isPlaceholder }) => (isPlaceholder ? '#acacac' : '#000')};
  `,

  DropdownIcon: styled.div<{ isOpen: boolean }>`
    width: 15px;
    height: 15px;
    border-radius: 2px;
    background-size: cover;
    background-position: center;
    background-image: url('./assets/dropdown-arrow.png');
    transform: rotateZ(${({ isOpen }) => (isOpen ? '0deg' : '180deg')});
    transition: transform 0.3s;
  `,

  DropdownOptionsContainer: styled.div`
    position: absolute;
    width: 100%;
    top: 45px;
    left: 0px;
    z-index: 10;
    border: 1px solid #acacac;
    background: white;
    border-radius: 2px;
  `,

  DropdownOption: styled.div`
    padding: 6px 8px;
    transition: 0.3s all;

    &:hover {
      background-color: #eee;
    }
  `,
};
