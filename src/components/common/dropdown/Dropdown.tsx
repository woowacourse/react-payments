import React, { useState } from 'react';
import styled from 'styled-components';
import { CARD_OPTIONS } from '../../../constants/card';
import ArrowUp from '../../assets/images/arrow_up.svg?react';
import ArrowDown from '../../assets/images/arrow_down.svg?react';

interface DropdownProps {
  value: string;
  handleChange: (e: React.MouseEvent<HTMLLIElement>) => void;
}

const Dropdown = ({ value, handleChange }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SelectBox $show={isOpen} onClick={() => setIsOpen(prev => !prev)}>
      <LabelWrapper>
        <SelectedText $value={value}>{value || '선택해주세요'}</SelectedText>
        {isOpen ? <ArrowDown /> : <ArrowUp />}
      </LabelWrapper>
      {isOpen && (
        <SelectOptions $show={isOpen}>
          {CARD_OPTIONS.map(data => (
            <Option key={data.value} data-value={data.value} onClick={handleChange}>
              {data.label}
            </Option>
          ))}
        </SelectOptions>
      )}
    </SelectBox>
  );
};

interface OptionProps {
  $show: boolean;
}

interface SelectedTextProps {
  $value: string;
}

const SelectBox = styled.div<OptionProps>`
  position: relative;
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  background-color: #ffffff;
  align-self: center;
  border: 1px solid ${props => (props.$show ? 'black' : '#acacac')};
  cursor: pointer;
`;

const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SelectedText = styled.span<SelectedTextProps>`
  font-size: 14px;
  margin-left: 4px;
  text-align: center;
  user-select: none;
  cursor: pointer;
  color: ${props => (props.$value ? 'black' : '#acacac')};
`;

const SelectOptions = styled.ul<OptionProps>`
  position: absolute;
  list-style: none;
  top: 45px;
  left: 0;
  width: 100%;
  overflow: hidden;

  border-radius: 8px;
  background-color: white;
  color: black;
  border: 1px solid #acacac;
`;

const Option = styled.li`
  font-size: 14px;
  padding: 12px;
  color: #4f4f4f;
  transition: background-color 0.1s ease-in;
  &:hover {
    background-color: rgba(200, 200, 200, 0.4);
  }
`;

export default Dropdown;
