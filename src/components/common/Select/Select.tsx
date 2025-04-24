import { css } from "@emotion/react";
import { useState } from "react";

type SelectPropsType = {
  optionList: string[];
  value: null | string;
  setValue: (value: string) => void;
};

const Select = ({ optionList, value, setValue }: SelectPropsType) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdownOpen = () => setDropdownOpen((prev) => !prev);
  const handleOptionClick = (value: string) => {
    setValue(value);
    setDropdownOpen(false);
  };

  return (
    <div css={selectBoxStyle}>
      <div css={selectedValueStyle(dropdownOpen)}>
        <div css={selectedValueTextStyle(Boolean(value))}>{value ?? "선택해 주세요."}</div>
        <img css={iconStyle} src={dropdownOpen ? "chevron-down.svg" : "chevron-up.svg"} onClick={toggleDropdownOpen} />
      </div>
      <ul css={optionListStyle(dropdownOpen)}>
        {optionList.map((value: string, index: number) => (
          <li key={index} css={optionStyle} onClick={() => handleOptionClick(value)}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;

const selectBoxStyle = css`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
`;

const selectedValueStyle = (dropdownOpen: boolean) => css`
  width: 100%;
  height: 31.28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border: 1px solid ${dropdownOpen ? "#000000" : "#acacac"};
  border-radius: 5px;
`;

const selectedValueTextStyle = (isSelected: boolean) => css`
  font-size: 11px;
  color: ${isSelected ? "#000000" : "#ACACAC"};
`;

const iconStyle = css`
  width: 8px;
  height: 4px;
  cursor: pointer;
`;

const optionListStyle = (dropdownOpen: boolean) => css`
  width: 100%;
  border: 1px solid #acacac;
  border-radius: 5.31px;
  opacity: ${dropdownOpen ? 1 : 0};
  margin: 0;
  padding: 0;
`;

const optionStyle = css`
  display: flex;
  align-items: center;
  height: 30.94px;
  background-color: white;
  color: #4f4f4f;
  font-size: 11px;
  font-weight: 400;
  list-style: none;
  padding: 8px 10px;
  cursor: pointer;
`;
