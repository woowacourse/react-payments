import { CardCompany } from "../../../types/type";
import React, { useState } from "react";
import * as Styled from "./Dropdown.styled";
import UpArrowIcon from "../../../assets/UpArrowIcon.png";
import DownArrowIcon from "../../../assets/DownArrowIcon.png";

export interface DropdownProps {
  selectList: string[];
  onChange: (selectedValue: CardCompany) => void;
}

const Dropdown = ({ selectList, onChange }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>("카드사를 선택해주세요");

  const toggleDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleSelect = (item: string) => {
    onChange(item as CardCompany);
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
        <img src={isOpen ? DownArrowIcon : UpArrowIcon} />
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
