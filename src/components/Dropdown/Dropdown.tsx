import ArrowIcon from '../Icon/ArrowIcon';
import * as S from './Dropdown.styles';
import { useEffect, useRef, useState } from 'react';

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

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!containerRef.current || !e.target) return;
      if (e.target instanceof HTMLDivElement && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <S.DropdownContainer ref={containerRef}>
      <S.DropdownButton
        type="button"
        autoFocus
        selectedValue={SelectedValue}
        isOpen={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {SelectedValue ?? defaultValue}
        <ArrowIcon color={isOpen ? ` #000` : `#acacac`} rotate={isOpen ? `180deg` : `0deg`} />
      </S.DropdownButton>
      <S.DropdownItemList isOpen={isOpen}>
        {dropdownList.map((item) => (
          <S.DropdownItem key={item}>
            <S.DropdownItemButton type="button" onClick={() => handleDropdownChange(item)} tabIndex={isOpen ? 0 : -1}>
              {item}
            </S.DropdownItemButton>
          </S.DropdownItem>
        ))}
      </S.DropdownItemList>
    </S.DropdownContainer>
  );
}
