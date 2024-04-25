import { Dispatch, SetStateAction } from "react";
import styles from "./Dropdown.module.css";
import CardCompanyDropdownItem from "./CardCompanyDropdownItem";

export default function CardCompanyDropdownList({
  companyList,
  setCardCompanyName,
  setIsOpen,
  isOpen,
}: {
  companyList: string[];
  setCardCompanyName: Dispatch<SetStateAction<string>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}) {
  return (
    <ul className={styles.list}>
      {companyList.map((company) => (
        <CardCompanyDropdownItem
          value={company}
          setCardCompanyName={setCardCompanyName}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        ></CardCompanyDropdownItem>
      ))}
    </ul>
  );
}
