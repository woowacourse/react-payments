import { useState } from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Selected = styled.div<{ $hasValue: boolean; $isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 6px;
  font-size: 14px;
  color: ${({ $isOpen, $hasValue }) =>
    $isOpen || $hasValue ? "var(--color-black)" : "var(--color-border)"};
  border: 1px solid
    ${({ $isOpen }) => ($isOpen ? "var(--color-black)" : "var(--color-border)")};
  border-radius: 2px;
  cursor: pointer;
  user-select: none;
`;

const Chevron = styled.span<{ $isOpen: boolean }>`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-right: 2px solid #333;
  border-bottom: 2px solid #333;
  transform: ${({ $isOpen }) =>
    $isOpen
      ? "translateY(25%) rotate(-135deg)"
      : "translateY(-25%) rotate(45deg)"};
  transition: transform 0.2s;
  margin-right: 8px;
`;

const OptionList = styled.ul`
  width: 312px;
  height: 320px;
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  margin: 0;
  padding: 4px 0;
  list-style: none;
  border: 1px solid var(--color-border);
  border-radius: 5px;
  background-color: white;
  z-index: 10;
`;

const Option = styled.li`
  padding: 12px 16px;
  font-size: 10px;
  font-family: Inter;
  font-weight: 400;
  font-style: Regular;
  font-size: 11px;
  leading-trim: NONE;
  line-height: 14.62px;
  letter-spacing: 0%;
  cursor: pointer;

  :hover {
    background-color: #f5f5f5;
  }
`;

const CARD_COMPANIES = [
  "BC카드",
  "신한카드",
  "카카오뱅크",
  "현대카드",
  "우리카드",
  "롯데카드",
  "하나카드",
  "국민카드",
];

interface CardCompanyProps {
  value: string;
  onChange: (value: string) => void;
}

export function CardCompany(props: CardCompanyProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (company: string) => {
    props.onChange(company);
    setIsOpen(false);
  };

  return (
    <Wrapper>
      <Selected
        $hasValue={!!props.value}
        $isOpen={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {props.value || "카드사를 선택해주세요"}
        <Chevron $isOpen={isOpen} />
      </Selected>
      {isOpen && (
        <OptionList>
          {CARD_COMPANIES.map((company) => (
            <Option key={company} onClick={() => handleSelect(company)}>
              {company}
            </Option>
          ))}
        </OptionList>
      )}
    </Wrapper>
  );
}
