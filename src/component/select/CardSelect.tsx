import styled, { keyframes } from 'styled-components';
import { useRef, useState } from 'react';
import useOutsideClick from '../../hook/useOutsideClick';
import type { CardInputProps } from '../../types/CardInputTypes';

interface CardSelectProps {
  defaultMessage: string;
  options: string[];
  handleCardInput: (inputKey: keyof CardInputProps, value: string) => void;
  cardInput: CardInputProps;
}

interface DefaultMessageProps {
  $isDefault: boolean;
}

const CardSelect = ({ defaultMessage, options, handleCardInput, cardInput }: CardSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectOption = (option: string) => {
    handleCardInput('cardBrand', option);
    setIsOpen(false);
  };

  const backgroundRef = useRef<HTMLDivElement>(null);
  useOutsideClick(backgroundRef, () => setIsOpen(false));

  const selectedMessage = cardInput.cardBrand || defaultMessage;
  const isDefault = selectedMessage === defaultMessage;

  return (
    <SelectContainer ref={backgroundRef}>
      <SelectField onClick={() => setIsOpen(!isOpen)} $isOpen={isOpen}>
        <DefaultMessage $isDefault={isDefault}>{selectedMessage}</DefaultMessage>
        <SelectIcon src="./selectIcon.png" alt="카드사 옵션 열기" />
      </SelectField>
      {isOpen && (
        <OptionsContainer>
          {options.map((brand) => (
            <OptionItem key={brand} onClick={() => handleSelectOption(brand)}>
              {brand}
            </OptionItem>
          ))}
        </OptionsContainer>
      )}
    </SelectContainer>
  );
};

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SelectContainer = styled.div`
  width: 100%;
  cursor: pointer;
  position: relative;
`;

const SelectField = styled.div<{ $isOpen: boolean }>`
  width: 100%;
  border: 1px solid var(--color-gray);
  border-radius: 4px;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: ${({ $isOpen }) => ($isOpen ? '1px solid var(--color-black)' : '1px solid var(--color-gray)')};
`;

const SelectIcon = styled.img`
  width: 16px;
`;

const DefaultMessage = styled.p<DefaultMessageProps>`
  font-size: var(--font-size-body);
  color: ${({ $isDefault }) => ($isDefault ? 'var(--color-gray)' : 'var(--color-black)')};
`;

const OptionsContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: var(--color-gray);
  border: 1px solid var(--color-gray);
  border-radius: 4px;
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + 4px);
  animation: ${slideDown} 0.3s ease;
`;

const OptionItem = styled.li`
  background-color: var(--color-white);
  font-size: var(--font-size-body);
  cursor: pointer;
  padding: 8px;
  box-sizing: border-box;
  &:hover {
    color: var(--color-black);
  }
`;

export default CardSelect;
