import styles from "./Dropdown.module.css";
import { useState } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";
import ArrowIcon from "../ArrowIcon/ArrowIcon";

interface DropdownProps {
  dropdownList: string[];
  buttonText: string;
}

function Dropdown({ dropdownList, buttonText }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useOutsideClick<HTMLDivElement>(() => setIsOpen(false));

  const handleDropdownToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div ref={dropdownRef} className={styles.container}>
      <input type="hidden" />
      <button
        type="button"
        onClick={handleDropdownToggle}
        className={`${styles.button} ${isOpen ? styles.activeButton : ""}`}
      >
        {buttonText}
        {isOpen ? (
          <ArrowIcon direction="up" color="#000" />
        ) : (
          <ArrowIcon direction="down" />
        )}
      </button>
      {isOpen && (
        <ul className={styles.dropdownList}>
          {dropdownList.map((text) => (
            <li key={text} className={styles.dropdownListItem}>
              {text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
