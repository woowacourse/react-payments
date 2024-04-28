import React, { useState } from "react";
import * as Styled from "./Dropdown.styled";
import UpArrowIcon from "../../../assets/UpArrowIcon.png";
import DownArrowIcon from "../../../assets/DownArrowIcon.png";

export interface DropdownProps {
  selectList: string[];
  placeholder?: string;
  onChange: (selectedValue: string) => void;
}

const Dropdown = ({ selectList, placeholder = "", onChange }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>(placeholder);

  const toggleDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleSelect = (item: string) => {
    onChange(item);
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <Styled.Dropdown
      isOpen={isOpen}
      selectedItem={selectedItem}
    >
      <button onClick={toggleDropdown}>
        <div>{selectedItem}</div>
        <img
          src={isOpen ? DownArrowIcon : UpArrowIcon}
          alt="Toggle Dropdown"
        />
      </button>
      {isOpen && (
        <ul>
          {selectList.map((item) => (
            <li
              key={item}
              onClick={() => handleSelect(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </Styled.Dropdown>
  );
};

export default Dropdown;
