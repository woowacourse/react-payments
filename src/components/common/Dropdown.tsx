import React, { useState } from 'react';
import styled from 'styled-components';
import { CARD_OPTIONS } from '../../constants/card';
import ArrowUp from '../../assets/images/arrow_up.svg?react';
import ArrowDown from '../../assets/images/arrow_down.svg?react';

const Dropdown = ({ options }: { options: typeof CARD_OPTIONS }) => {
  const [currentValue, setCurrentValue] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOption = (e: React.MouseEvent<HTMLLIElement>) => {
    const target = e.target as HTMLLIElement;
    if (!target.dataset.value) return;
    setCurrentValue(target.dataset.value);
  };

  return (
    <SelectBox $show={isOpen} onClick={() => setIsOpen(prev => !prev)}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Label>{currentValue || '선택해주세요'} </Label>
        {isOpen ? <ArrowUp /> : <ArrowDown />}
      </div>
      {isOpen && (
        <SelectOptions $show={isOpen}>
          {options.map(data => (
            <Option key={data.value} data-value={data.value} onClick={handleClickOption}>
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

const Label = styled.label`
  font-size: 14px;
  margin-left: 4px;
  text-align: center;
  user-select: none;
  cursor: pointer;
`;

const SelectOptions = styled.ul<OptionProps>`
  position: absolute;
  list-style: none;
  top: 45px;
  left: 0;
  width: 100%;
  overflow: hidden;

  padding: 8px;
  border-radius: 8px;
  background-color: white;
  color: black;
  border: 1px solid #acacac;
`;

const Option = styled.li`
  font-size: 14px;
  padding: 10px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: lightgray;
  }
`;

export default Dropdown;
