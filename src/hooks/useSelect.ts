import { MouseEventHandler, useState } from "react";

const useSelect = <T>(initialSelected?: T) => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [selected, setSelected] = useState<T | undefined>(initialSelected);

  const handleDropdown: MouseEventHandler<HTMLUListElement> = (e) => {
    if (e.target !== e.currentTarget) return;

    setIsDropdown((prevState) => !prevState);
  };

  const handleSelected: MouseEventHandler<HTMLLIElement> = (e) => {
    if (e.target !== e.currentTarget) return;

    const { textContent } = e.currentTarget;
    if (!textContent) return;

    setSelected(textContent as T);
    setIsDropdown(false);
  };

  return { isDropdown, handleDropdown, selected, handleSelected };
};

export default useSelect;
