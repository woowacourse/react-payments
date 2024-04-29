import React, { useEffect, useRef, useState } from 'react';
import * as S from './Dropdown.styled';
import { CARD_OPTIONS } from '../../../constants/card';
import ArrowUp from '../../../assets/images/arrow_up.svg?react';
import ArrowDown from '../../../assets/images/arrow_down.svg?react';

interface DropdownProps {
  value: string;
  handleSelect: (e: React.MouseEvent<HTMLLIElement>) => void;
}

const Dropdown = ({ value, handleSelect }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClose = (e: MouseEvent) => {
      if (isOpen && !dropMenuRef.current?.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener('click', handleOutsideClose);

    return () => document.removeEventListener('click', handleOutsideClose);
  }, [isOpen]);

  return (
    <S.SelectBox ref={dropMenuRef} $isOpen={isOpen} onClick={() => setIsOpen(prev => !prev)}>
      <S.LabelWrapper>
        <S.SelectedText $value={value}>{value || '선택해주세요'}</S.SelectedText>
        {isOpen ? <ArrowDown /> : <ArrowUp />}
      </S.LabelWrapper>
      <S.SelectOptions $isOpen={isOpen}>
        {isOpen &&
          CARD_OPTIONS.map(data => (
            <S.Option key={data.value} data-value={data.value} onClick={handleSelect}>
              {data.label}
            </S.Option>
          ))}
      </S.SelectOptions>
    </S.SelectBox>
  );
};

export default Dropdown;
