import { useState } from 'react';
import * as S from './Dropdown.styles';

interface DropdownProps<T> {
  SelectedValue: T | null;
  defaultValue: string;
  dropdownList: T[] | readonly T[];
  onClick: (value: T) => void;
}
export default function Dropdown<T extends string>({
  SelectedValue,
  defaultValue,
  dropdownList,
  onClick,
}: DropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const handleDropdownChange = (item: T) => {
    onClick(item);
    setIsOpen(false);
  };
  return (
    <div style={{ position: 'relative' }}>
      <S.DropdownButton selectedValue={SelectedValue} isOpen={isOpen} onClick={() => setIsOpen(true)}>
        {SelectedValue ?? defaultValue}
      </S.DropdownButton>
      <S.DropdownItemList isOpen={isOpen}>
        {dropdownList.map((item) => (
          <S.DropdownItem key={item}>
            <S.DropdownItemButton type="button" onClick={() => handleDropdownChange(item)}>
              {item}
            </S.DropdownItemButton>
          </S.DropdownItem>
        ))}
      </S.DropdownItemList>
    </div>
  );
}
