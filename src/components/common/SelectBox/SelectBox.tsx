import { useState } from 'react';

import { UpIcon, DownIcon } from '../../../assets';
import * as S from './SelectBox.style';

interface SelectBoxProps {
  options: string[];
  selectedOption: string;
  placeholder: string;
  updateOption: (option: string) => void;
}

const SelectBox = ({ options, selectedOption, placeholder, updateOption }: SelectBoxProps) => {
  const [isOptionListOpen, setIsOptionListOpen] = useState(false);

  const toggleOptionList = () => setIsOptionListOpen((prev) => !prev);

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateOption(e.target.value);
    setIsOptionListOpen(false);
  };

  const renderOptionList = () => (
    <S.OptionList>
      {options.map((option) => (
        <S.OptionBox key={option}>
          <input
            type="radio"
            id={option}
            value={option}
            checked={option === selectedOption}
            onChange={handleOptionChange}
          ></input>
          <S.OptionLabel htmlFor={option}>{option}</S.OptionLabel>
        </S.OptionBox>
      ))}
    </S.OptionList>
  );

  return (
    <S.SelectBoxLayout>
      <S.SelectBoxContainer $isDefault={!selectedOption} onClick={toggleOptionList}>
        <p>{selectedOption || placeholder}</p>
        <img src={isOptionListOpen ? UpIcon : DownIcon} alt={isOptionListOpen ? '옵션 닫기' : '옵션 열기'} />
      </S.SelectBoxContainer>
      {isOptionListOpen && renderOptionList()}
    </S.SelectBoxLayout>
  );
};

export default SelectBox;
