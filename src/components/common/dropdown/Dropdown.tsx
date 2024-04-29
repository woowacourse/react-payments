import React, { useState } from 'react';
import * as S from './Dropdown.styled';
import { CARD_OPTIONS } from '../../../constants/card';
import ArrowUp from '../../../assets/images/arrow_up.svg?react';
import ArrowDown from '../../../assets/images/arrow_down.svg?react';

interface DropdownProps {
  value: string;
  handleChange: (e: React.MouseEvent<HTMLLIElement>) => void;
}

const Dropdown = ({ value, handleChange }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.SelectBox $show={isOpen} onClick={() => setIsOpen(prev => !prev)}>
      <S.LabelWrapper>
        <S.SelectedText $value={value}>{value || '선택해주세요'}</S.SelectedText>
        {isOpen ? <ArrowDown /> : <ArrowUp />}
      </S.LabelWrapper>
      {isOpen && (
        <S.SelectOptions>
          {CARD_OPTIONS.map(data => (
            <S.Option key={data.value} data-value={data.value} onClick={handleChange}>
              {data.label}
            </S.Option>
          ))}
        </S.SelectOptions>
      )}
    </S.SelectBox>
  );
};

export default Dropdown;
