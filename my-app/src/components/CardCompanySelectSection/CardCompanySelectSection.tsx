import { useState } from "react";
import { css } from "@emotion/react";
import InputSectionLayout from "../InputSectionLayout/InputSectionLayout";
import chevronDown from "../../assets/ic_chevron_down.svg";
import chevronUp from "../../assets/ic_chevron_up.svg";
const CARD_COMPANIES = [
  "BC카드",
  "신한카드",
  "카카오뱅크",
  "현태카드",
  "우리카드",
  "롯데카드",
  "하나카드",
  "국민카드",
];

const CardCompanySelectSection = ({
  onValueHandler,
  inputValue,
}: {
  onValueHandler: (company: string) => void;
  inputValue: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (company: string) => {
    onValueHandler(company);
    setIsOpen(false);
  };

  return (
    <InputSectionLayout title="카드사를 선택해 주세요." message="현재 국내 카드사만 가능합니다.">
      <div
        css={css`
          position: relative;
          width: 100%;
        `}
      >
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          css={css`
            width: 100%;
            height: 31.28px;
            border: ${isOpen ? "1px solid #000000;" : "1px solid #acacac;"}
            border-radius: 2.66px;
            background: #fff;
            padding: 0 8px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 10.63px;
            font-wieght: 400;
            color: ${inputValue ? "#000000" : "#acacac"};
            cursor: pointer;
          `}
        >
          {inputValue || "카드사를 선택해 주세요"}
          <img src={isOpen ? chevronUp : chevronDown}></img>
        </button>

        {isOpen && (
          <ul
            css={css`
              position: absolute;
              top: 36px;
              left: 0;
              width: 100%;
              border: 1px solid #acacac;
              border-radius: 5.31px;
              background: #fff;
              list-style: none;
              margin: 0;
              padding: 0;
              z-index: 10;
              max-height: 247.55px;
              overflow-y: auto;
            `}
          >
            {CARD_COMPANIES.map((company) => (
              <li
                key={company}
                onClick={() => handleSelect(company)}
                css={css`
                  padding: 8px 12px;
                  font-weight: 400;
                  font-size: 10.63px;
                  cursor: pointer;
                  color: #4f4f4f;
                  background: ${inputValue === company ? "#f3f3f3" : "#fff"};
                  font-weight: ${inputValue === company ? 600 : 400};
                  &:hover {
                    background: #f3f3f3;
                  }
                `}
              >
                {company}
              </li>
            ))}
          </ul>
        )}
      </div>
    </InputSectionLayout>
  );
};

export default CardCompanySelectSection;
