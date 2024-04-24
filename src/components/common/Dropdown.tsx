import { useState } from 'react';
import styled from 'styled-components';
import { CARD_META_INFO } from '../../constants/card-app';
import { LowerArrow, UpperArrow } from './Arrows';

interface DropdownProps {
  options: string[];
}

const Dropdown = ({ options }: DropdownProps) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleDropdownClick = () => {
    setIsOpened((prev) => !prev);
  };

  const handleOptionSelect = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <DropdownContainer>
      <StyledDropdown onClick={handleDropdownClick}>
        <DropdownText selectedOption={selectedOption}>
          {selectedOption === '' ? CARD_META_INFO.cardCompany.query : selectedOption}
        </DropdownText>
        {isOpened ? <LowerArrow /> : <UpperArrow />}
      </StyledDropdown>
      {isOpened && (
        <OptionContainer>
          {options.map((option, index) => {
            return (
              <Option key={index} id={option} onClick={(e) => handleOptionSelect((e.target as HTMLButtonElement).id)}>
                {option}
              </Option>
            );
          })}
        </OptionContainer>
      )}
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  position: relative;
  margin: 16px 0;
`;

const StyledDropdown = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 32px;
  width: 315px;

  padding: 8px;
  border-radius: 2px;

  outline: none;
  color: #acacac;
  background-color: #ffffff;
  border: 1px solid #acacac;
  &:focus,
  &:hover {
    border: 1px solid #000000;
  }

  font-size: 11px;
  font-weight: 400;
  line-height: 15px;
`;

const DropdownText = styled.span<{ selectedOption: string }>`
  color: ${({ selectedOption }) => (selectedOption === '' ? '#acacac' : '#000000')};
`;

const OptionContainer = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;

  height: 248px;
  width: 315px;

  background-color: #ffffff;
  border: 1px solid #acacac;
  border-radius: 5px;
  z-index: 999;

  margin-top: 5px;
`;

const Option = styled.li`
  display: flex;
  align-items: center;

  font-size: 11px;
  height: 31px;

  padding-left: 10px;

  cursor: pointer;

  &:hover {
    background-color: #e1e1e1;
    font-weight: 700;
  }
`;

export default Dropdown;
