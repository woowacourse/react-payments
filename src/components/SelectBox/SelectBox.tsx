import { useState } from "react";
import S from "./style";
import UpArrow from "@/assets/UpArrow.svg?react";
import DownArrow from "@/assets/DownArrow.svg?react";
import { MESSAGE } from "@/constants/message";

const SelectBox = <T extends string>({
  optionArr,
  setValue,
  value,
}: {
  value: T | null;
  optionArr: (T | null)[];
  setValue: React.Dispatch<React.SetStateAction<T | null>>;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickSelectOption = (option: T) => {
    setValue(option);
    setIsOpen(false);
  };

  return (
    <S.SelectWrapper>
      <S.SelectedOptionBox
        $isOpen={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        selected={!!value}
      >
        <span>{value || MESSAGE.INPUT_INFO_TITLE.CARD_TYPE}</span>
        {isOpen ? <DownArrow /> : <UpArrow />}
      </S.SelectedOptionBox>
      {isOpen && (
        <S.OptionsWrapper>
          {optionArr.map((option, index) => {
            return (
              <S.Option
                key={index}
                onClick={() => onClickSelectOption(option!)}
              >
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
