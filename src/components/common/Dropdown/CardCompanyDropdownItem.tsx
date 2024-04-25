import { Dispatch, SetStateAction } from "react";
import styles from "./Dropdown.module.css";

export default function CardCompanyDropdownItem({
  value,
  setCardCompanyName,
  setIsOpen,
  isOpen,
}: {
  value: string;
  setCardCompanyName: Dispatch<SetStateAction<string>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}) {
  const onClick = () => {
    setCardCompanyName(value);
    setIsOpen(!isOpen);
  };
  return (
    <li onClick={onClick} className={styles.item}>
      {value}
    </li>
  );
}
