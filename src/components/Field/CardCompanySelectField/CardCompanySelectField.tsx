import { MouseEvent } from "react";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import CardCompanyDropdownList from "../../common/Dropdown/CardCompanyDropdownList";
import CardDropdownHeadButton from "../../\bButton/CardDropdownHeadButton";
import useDetectClose from "../../../hooks/useDetectClose";

const COMPANY_LIST = [
  "BC카드",
  "신한카드",
  "카카오뱅크",
  "현대카드",
  "우리카드",
  "롯데카드",
  "하나카드",
  "국민카드",
];

export default function CardCompanySelectField({
  cardCompanyName,
  setCardCompanyName,
}: {
  cardCompanyName: string;
  setCardCompanyName: Dispatch<SetStateAction<string>>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useDetectClose(ref, false);
  const companyList = COMPANY_LIST;

  return (
    <div ref={ref}>
      <CardDropdownHeadButton
        isOpen={isOpen}
        onClick={(e: MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
      >
        <span style={{ color: cardCompanyName ? "black" : "grey" }}>
          {cardCompanyName ? cardCompanyName : "카드사를 선택해주세요"}
        </span>
      </CardDropdownHeadButton>
      {isOpen && (
        <CardCompanyDropdownList
          companyList={companyList}
          setCardCompanyName={setCardCompanyName}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        ></CardCompanyDropdownList>
      )}
    </div>
  );
}
