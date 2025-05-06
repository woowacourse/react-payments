import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import DropdownIcon from './DropdownIcon';

interface DropdownProps<T> {
  placeholder: string;
  items: T[];
  selectedValue: T | null;
  onClick: (value: T) => void;
}

function Dropdown<T extends string>({
  placeholder,
  items,
  selectedValue,
  onClick,
}: DropdownProps<T>) {
  const [toggleOpen, setToggleOpen] = useState(false);

  const toggleDropdownState = () => {
    setToggleOpen((prev) => !prev);
  };

  const onClickDropdown = () => {
    toggleDropdownState();
  };

  const onEnterDropdown = (e: React.KeyboardEvent) => {
    const { key } = e;

    if (key === 'Enter') {
      toggleDropdownState();
      return true;
    }
    return false;
  };

  const handleItemClick = (item: T) => {
    onClick(item);
    onClickDropdown();
  };

  const handleItemEnter = (e: React.KeyboardEvent, item: T) => {
    const isEnterKey = onEnterDropdown(e);
    if (isEnterKey) {
      onClick(item);
    }
  };

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedValue === null && wrapperRef.current) {
      wrapperRef.current.focus();
    }
  }, [selectedValue]);

  return (
    <Wrapper>
      <Select
        toggleOpen={toggleOpen}
        tabIndex={0}
        onClick={onClickDropdown}
        onKeyDown={onEnterDropdown}
        ref={wrapperRef}
      >
        {selectedValue === null ? placeholder : selectedValue}
        <DropdownIcon toggleOpen={toggleOpen} />
      </Select>
      {toggleOpen && (
        <UnorderedList>
          {items.map((item) => (
            <Item
              key={item}
              onClick={() => handleItemClick(item)}
              onKeyDown={(e) => {
                handleItemEnter(e, item);
              }}
              tabIndex={0}
            >
              {item}
            </Item>
          ))}
        </UnorderedList>
      )}
    </Wrapper>
  );
}

export default Dropdown;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 4px 0;
  position: relative;
`;

const Select = styled.div<{ toggleOpen: boolean }>`
  width: 100%;
  border: 1px solid ${({ toggleOpen }) => (toggleOpen ? 'black' : 'gray')};
  border-radius: 2px;
  padding: 8px;
  font-size: 11px;
  outline: none;
  color: ${({ toggleOpen }) => (toggleOpen ? 'black' : 'gray')};
  cursor: pointer;
  position: relative;

  &:focus {
    border: 1px solid black;
  }
`;

const UnorderedList = styled.ul`
  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: appear 0.3s ease-in-out;

  width: 100%;
  max-height: 200px;
  overflow-y: auto;

  border: 1px solid gray;
  background-color: white;
  border: 1px solid gray;
  border-radius: 2px;
  padding: 0;

  list-style: none;
  cursor: pointer;
  user-select: none;

  position: absolute;
  z-index: 1;
  top: calc(100% + 4px);
`;

const Item = styled.li`
  width: 100%;
  border: none;
  padding: 8px;
  font-size: 11px;
  outline: none;

  &:hover {
    background-color: #f0f0f0b3;
  }
  &:focus {
    background-color: #f0f0f0b3;
  }
`;
