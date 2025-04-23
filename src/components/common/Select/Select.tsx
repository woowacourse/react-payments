import { ComponentProps, useState } from 'react';
import styled from 'styled-components';

type OptionType = {
  label: string;
  value: string;
};

function Select({
  options,
  placeholder,
}: { options: OptionType[]; placeholder: string } & ComponentProps<'select'>) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <Dropdown>
      <DropdownToggle onClick={toggleOpen}>
        <DropdownText>{placeholder}</DropdownText>
        <DropdownChevron
          src="./svg/chevron-up.svg"
          alt="dropdown-chevron"
          $isOpen={open}
        />
      </DropdownToggle>
      <DropdownMenu $isOpen={open}>
        {options.map(({ label, value }) => (
          <DropdownMenuItem data-value={value}>{label}</DropdownMenuItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}

const Dropdown = styled.div`
  position: relative;
  width: 100%;
`;

const DropdownToggle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border: 1px solid #acacac;
  border-radius: 4px;
  background: white;
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
`;

const DropdownText = styled.p`
  font-family: Inter;
  font-weight: 400;
  font-size: 12px;
  color: #acacac;
`;

const DropdownChevron = styled.img<{ $isOpen: boolean }>`
  width: 16px;
  height: 16px;
  rotate: ${(props) => (props.$isOpen ? '180deg' : '')};
  color: #acacac;
`;

const DropdownMenu = styled.div<{ $isOpen: boolean }>`
  width: 100%;
  border: 1px solid #acacac;
  border-radius: 4px;
  background: white;
  list-style: none;
  box-sizing: border-box;
  position: absolute;
  margin-top: 4px;
  top: 100%;
  left: 0;
  display: ${(props) => (props.$isOpen ? 'block' : 'none')};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

const DropdownMenuItem = styled.li`
  font-family: Inter;
  font-weight: 400;
  font-size: 12px;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export default Select;
