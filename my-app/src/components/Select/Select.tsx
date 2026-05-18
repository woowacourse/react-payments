import { useState } from "react";
import { css } from "@emotion/react";
import chevronDown from "@/assets/ic_chevron_down.svg";
import chevronUp from "@/assets/ic_chevron_up.svg";

type SelectProps = {
  value: string;
  options: string[];
  placeholder?: string;
  onChange: (value: string) => void;
};

const Select = ({ value, options, placeholder = "선택해 주세요", onChange }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
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
          border: ${isOpen ? "1px solid #000000" : "1px solid #acacac"};
          border-radius: 2.66px;
          background: #fff;
          padding: 0 8px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 10.63px;
          font-weight: 400;
          color: ${value ? "#000000" : "#acacac"};
          cursor: pointer;
        `}
      >
        {value || placeholder}
        <img src={isOpen ? chevronUp : chevronDown} />
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
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              css={css`
                padding: 8px 12px;
                font-size: 10.63px;
                cursor: pointer;
                color: #4f4f4f;
                background: ${value === option ? "#f3f3f3" : "#fff"};
                font-weight: ${value === option ? 600 : 400};
                &:hover {
                  background: #f3f3f3;
                }
              `}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
