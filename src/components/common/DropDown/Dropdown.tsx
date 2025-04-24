import styled from '@emotion/styled';
import { useState } from 'react';
import DropdownIcon from './DropdownIcon';

interface DropdownProps<T> {
  placeholder: string;
  items: T[];
  selectedValue: T | null;
  onClick: (value: T) => void;
}

function Dropdown<T extends string>(props: DropdownProps<T>) {
  const { placeholder, items, selectedValue, onClick } = props;
  const [toggleOpen, setToggleOpen] = useState(false);

  const onClickDropdown = () => {
    setToggleOpen((prev) => !prev);
  };

  return (
    <Wrapper>
      <Select toggleOpen={toggleOpen} onClick={onClickDropdown}>
        {selectedValue === null ? placeholder : selectedValue}
        <DropdownIcon toggleOpen={toggleOpen} />
      </Select>
      {toggleOpen && (
        <UnorderedList>
          {items.map((item) => (
            <Item key={item} onClick={() => onClick(item)}>
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
`;
