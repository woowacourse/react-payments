import { css } from "@emotion/react";
import { useEffect, useRef, useState } from "react";
import { SelectProps } from "../../types/componentPropsType";
import { CompanyType } from "../../types";
import { CardInformationType } from "../../types/CardInformationType";

const arrow = {
  up: "upArrow.svg",
  down: "downArrow.svg",
};

const Select = <T extends Extract<keyof CardInformationType, "company">>({
  options,
  placeholder,
  setCardInformation /** 이 필드가 담당하는 카드 정보 타입 */,
}: SelectProps<T>) => {
  // 모달 열고 닫기 상태
  const [isOpen, setIsOpen] = useState(false);

  // 카드 선택이 되었을 때 상태
  const [isSelect, setIsSelect] = useState(false);

  // select의 라벨에 보여줄 데이터
  const [selected, setSelected] = useState(placeholder);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleSelect = (item: CompanyType) => {
    setSelected(item);
    setIsSelect(true);
    setIsOpen(false);

    // 상태 업데이트
    setCardInformation(item);
  };

  // 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div css={selectStyle} ref={selectRef}>
      <button type="button" css={labelStyle(isOpen, isSelect)} onClick={() => setIsOpen((prev) => !prev)}>
        {selected}
        <img src={arrow[isOpen ? "down" : "up"]} alt="" />
      </button>
      {isOpen && (
        <ul css={optionListStyle}>
          {options.map((option, idx) => (
            <li key={idx} css={optionItemStyle} onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;

const selectStyle = css`
  position: relative;
  width: 100%;
  font-size: 10.629px;
  font-style: normal;
  font-weight: 400;
  line-height: 14.615px;
`;

const labelStyle = (isOpen: boolean, isSelect: boolean) => css`
  min-height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  width: 100%;
  border: solid 1.01px ${isOpen ? "#000000" : "#acacac"};
  border-radius: 3px;
  padding: 8px;
  box-sizing: border-box;
  cursor: pointer;
  color: ${isSelect ? "#000000" : "#acacac"};
  font-size: 10.629px;
`;

const optionListStyle = css`
  position: absolute;
  width: 100%;
  top: 40px;
  left: 0;
  list-style: none;
  padding: 0;
  margin: 0;
  border-radius: 5.315px;
  border: 1px solid #acacac;
  background: #fff;
  z-index: 10;
  box-sizing: border-box;
`;

const optionItemStyle = css`
  color: #4f4f4f;
  padding: 8px 10px;
  cursor: pointer;
  border-radius: 5.315px;

  &:hover {
    background: #e9e9e9;
  }
`;
