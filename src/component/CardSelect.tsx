import styled from "styled-components";
import { useRef, useState } from "react";

interface CardSelectProps {
  defaultMessage: string;
  options: string[];
}

const CardSelect = ({ defaultMessage, options }: CardSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SelectContainer onClick={() => setIsOpen(!isOpen)}>
      <SelectField>
        <DefaultMessage>{defaultMessage}</DefaultMessage>
        <SelectIcon src="./selectIcon.png" alt="카드사 옵션 열기" />
      </SelectField>
      {isOpen && (
        <OptionsContainer>
          {options.map((brand) => (
            <OptionItem key={brand}>{brand}</OptionItem>
          ))}
        </OptionsContainer>
      )}
    </SelectContainer>
  );
};

const SelectContainer = styled.div`
  width: 100%;
  cursor: pointer;
  position: relative;
`;

const SelectField = styled.div`
  width: 100%;
  border: 1px solid var(--color-gray);
  border-radius: 4px;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SelectIcon = styled.img`
  width: 16px;
`;

const DefaultMessage = styled.p`
  font-size: var(--font-size-body);
  color: var(--color-gray);
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
