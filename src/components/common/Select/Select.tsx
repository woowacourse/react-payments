import { css } from "@emotion/react";
import { useState } from "react";

type SelectPropsType = {
  optionList: string[];
  value: null | string;
  setValue: (value: string) => void;
};

const Select = ({ optionList, value, setValue }: SelectPropsType) => {
  const [dropdownOpen, setdropdownOpen] = useState(false);

  const toggleDropdownOpen = () => setdropdownOpen((prev) => !prev);
  const closeDropdown = () => setdropdownOpen(false);

  const handleOption = (v: string) => {
    setValue(v);
    setdropdownOpen(false);
  };

  return (
    <div tabIndex={0} onBlur={closeDropdown} css={selectBoxStyle}>
      <div css={selectedValueStyle(dropdownOpen)} onClick={toggleDropdownOpen}>
        <div css={selectedValueTextStyle(Boolean(value))}>{value ?? "선택해 주세요."}</div>
        <img css={iconStyle} src={dropdownOpen ? "chevron-down.svg" : "chevron-up.svg"} />
      </div>

      {dropdownOpen && (
        <ul css={optionListStyle}>
          {optionList.map((opt, idx) => (
            <li key={idx} css={optionStyle} onClick={() => handleOption(opt)}>
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;

const selectBoxStyle = css`
  width: 100%;
  height: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  margin-bottom: 10px;
`;

const selectedValueStyle = (dropdowndropdownOpen: boolean) => css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0px;
  border: 1px solid ${dropdowndropdownOpen ? "#000000" : "#acacac"};
  border-radius: 5px;
  cursor: pointer;
`;

const selectedValueTextStyle = (isSelected: boolean) => css`
  font-size: 11px;
  color: ${isSelected ? "#000000" : "#ACACAC"};
  padding: 0 0 0 8px;
`;

const iconStyle = css`
  width: 8px;
  height: 4px;
  padding: 0 8px 0 0;
`;

const optionListStyle = css`
  width: 100%;
  border: 1px solid #acacac;
  border-radius: 5.31px;
  z-index: 200;
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
