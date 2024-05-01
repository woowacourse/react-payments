/** @jsxImportSource @emotion/react */

import CHEVRON_DOWN from "../../Images/chevron_down.png";
import CHEVRON_UP from "../../Images/chevron_up.png";
import { useState } from "react";

const styledSelectBox = {
  boxSizing: "border-box" as const,

  width: "100%",
  height: "32px",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "4px 8px",

  outline: "none",
  border: "1px solid #ACACAC",
  borderRadius: "4px",
  background: "transparent",

  fontSize: "15px",

  "&:hover,&:focus": {
    border: "1px solid black",
  },
};

const styledPlaceholder = {
  color: "#ACACAC",
};

const styledOptions = {
  boxSizing: "border-box" as const,
  width: "100%",

  listStyle: "none",
  padding: "0",
  border: "1px solid #ACACAC",
  borderRadius: "4px",

  position: "relative" as const,
  marginTop: "4px",
};

const styledOption = {
  boxSizing: "border-box" as const,
  width: "100%",

  padding: "8px",
  borderRadius: "4px",
  "&:hover": {
    background: "rgba(0,0,0,0.2)",
    color: "white",
  },
};

interface SelectionBoxProps {
  placeholder: string;
  options: string[];
  selected: string;
  setSelected: React.Dispatch<string>;
}

export default function SelectBox({
  placeholder = "",
  options,
  selected,
  setSelected,
}: SelectionBoxProps) {
  const [isOpen, setIsOpen] = useState(false);

  const onSelectBoxClickHandler = () => {
    setIsOpen(!isOpen);
  };

  const styledSelectBoxWithPlaceholder = selected.length
    ? styledSelectBox
    : { ...styledPlaceholder, ...styledSelectBox };

  return (
    <div css={{ width: "100%", boxSizing: "border-box" }}>
      <div
        css={styledSelectBoxWithPlaceholder}
        onClick={onSelectBoxClickHandler}
      >
        <span>{selected.length ? selected : placeholder}</span>
        <span>
          <img src={isOpen ? CHEVRON_DOWN : CHEVRON_UP} alt="" />
        </span>
      </div>
      {isOpen && (
        <ul css={styledOptions}>
          {options.map((option, idx) => (
            <li
              key={idx}
              value={option}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
              css={styledOption}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
