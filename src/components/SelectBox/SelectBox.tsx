import { useState } from "react";
import S from "./style";
import UpArrow from "@/assets/upArrow.svg?react";
import DownArrow from "@/assets/downArrow.svg?react";
import { MESSAGE } from "@/constants/message";

const SelectBox = <T extends []>({ optionArr }: { optionArr: T }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<keyof T | string>(
    MESSAGE.INPUT_INFO_TITLE.CARD_TYPE
  );

  const onClickSelectOption = (option: keyof T) => {
    setSelectedValue(option);
    setIsOpen(false);
  };

  return (
    <S.SelectWrapper>
      <S.SelectedOptionBox
        onClick={() => setIsOpen((prev) => !prev)}
        selected={!(selectedValue === MESSAGE.INPUT_INFO_TITLE.CARD_TYPE)}
      >
        <span>{selectedValue as string}</span>
        {isOpen ? <DownArrow /> : <UpArrow />}
      </S.SelectedOptionBox>
      {isOpen && (
        <S.OptionsWrapper>
          {optionArr.map((option, index) => {
            return (
              <S.Option key={index} onClick={() => onClickSelectOption(option)}>
                {option}
              </S.Option>
            );
          })}
        </S.OptionsWrapper>
      )}
    </S.SelectWrapper>
  );
};

export default SelectBox;
