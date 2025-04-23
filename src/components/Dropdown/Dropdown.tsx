import styles from "./Dropdown.module.css";
import { useState } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";
import ArrowIcon from "../ArrowIcon/ArrowIcon";

interface DropdownProps<T> {
  selectedValue: T | null;
  defaultValue: string;
  dropdownList: T[] | readonly T[];
  onChange: (value: T) => void;
  autoFocus?: boolean;
}

function Dropdown<T extends string>({
  selectedValue,
  defaultValue,
  dropdownList,
  onChange,
  autoFocus = false,
}: DropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useOutsideClick<HTMLDivElement>(() => setIsOpen(false));

  const handleDropdownToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleDropdownItemClick = (item: T) => {
    onChange(item);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className={styles.container}>
      <input type="hidden" />
      <button
        autoFocus={autoFocus}
        type="button"
        onClick={handleDropdownToggle}
        className={`${styles.button} ${isOpen ? styles.activeButton : ""} 
        ${selectedValue ? styles.textBlack : ""}`}
      >
        {selectedValue ?? defaultValue}
        {isOpen ? (
          <ArrowIcon direction="up" color="#000" />
        ) : (
          <ArrowIcon direction="down" />
        )}
      </button>
      {isOpen && (
        <div className={styles.dropdownArea}>
          <ul className={styles.dropdownList}>
            {dropdownList.map((item) => (
              <li
                key={item}
                className={styles.dropdownListItem}
                onClick={() => handleDropdownItemClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
          <div className={styles.fixedHeight} />
        </div>
      )}
    </div>
  );
}

export default Dropdown;
