import { MouseEventHandler, ReactNode } from "react";
import styles from "./Button.module.css";
import CardCompanyDropdownArrow from "../../assets/image/CardCompanyDropdownArrow.svg";
import CardCompanyDropdownArrowReversed from "../../assets/image/CardCompanyDropdownArrowReversed.svg";

export default function CardDropdownHeadButton({
  isOpen,
  onClick,
  children,
}: {
  isOpen: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}) {
  return (
    <button onClick={onClick} className={styles.dropdown_head}>
      {children}
      <img
        src={
          isOpen ? CardCompanyDropdownArrowReversed : CardCompanyDropdownArrow
        }
      ></img>
    </button>
  );
}
