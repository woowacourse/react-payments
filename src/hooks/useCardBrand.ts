import { useState } from "react";

const options = [
  { brand: "BC카드", color: "rgba(240, 70, 81, 1)" },
  { brand: "신한카드", color: "rgba(0, 70, 255, 1)" },
  { brand: "카카오뱅크", color: "rgba(255, 230, 0, 1)" },
  { brand: "현대카드", color: "rgba(0,0,0,1)" },
  { brand: "우리카드", color: "rgba(0,123,200,1)" },
  { brand: "롯데카드", color: "rgba(237, 28, 36,1)" },
  { brand: "하나카드", color: "rgba(0,148,144,1)" },
  { brand: "국민카드", color: "rgba(106,96,86,1)" },
];

const initialState = {
  isOpen: false,
  selectedItem: { brand: "", color: "" },
};

export function useCardBrand() {
  const [isOpen, setIsOpen] = useState(initialState.isOpen);
  const [selectedItem, setSelectedItem] = useState(initialState.selectedItem);

  const resetCardBrand = () => {
    setIsOpen(initialState.isOpen);
    setSelectedItem(initialState.selectedItem);
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleItemClick = (option: { brand: string; color: string }) => {
    setSelectedItem({ brand: option.brand, color: option.color });
    setIsOpen(false);
  };

  return {
    isOpen,
    selectedItem,
    options,
    toggleDropdown,
    handleItemClick,
    resetCardBrand,
  };
}
