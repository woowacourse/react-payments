import { useState } from "react";

export function useCardBrand() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const options = [
    "BC카드",
    "신한카드",
    "카카오뱅크",
    "현대카드",
    "우리카드",
    "롯데카드",
    "하나카드",
    "국민카드",
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return { isOpen, selectedItem, options, toggleDropdown, handleItemClick };
}
