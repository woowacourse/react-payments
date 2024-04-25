import { MouseEventHandler, ReactNode } from "react";
import Button from "../common/Button/Button";
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
    <Button onClick={onClick} classNames={styles.dropdown_head}>
      {children}
      <img
        src={
          isOpen ? CardCompanyDropdownArrowReversed : CardCompanyDropdownArrow
        }
      ></img>
    </Button>
  );
}
