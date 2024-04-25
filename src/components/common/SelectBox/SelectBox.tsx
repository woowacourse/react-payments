import { useState } from 'react';
import * as S from './SelectBox.style';

interface SelectBoxProps {
  optionValues: string[];
  isValid: boolean;
  placeholder?: string;
  onChange: (value: string) => void;
}

export default function SelectBox({ optionValues, isValid, placeholder, onChange }: SelectBoxProps) {
  const [isOpened, setIsOpened] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const handleOptionBox = () => setIsOpened((prevState) => !prevState);

  const handleOptionValue = (value: string) => {
    setSelectedValue(value);
    onChange(value);
    handleOptionBox();
  };

  return (
    <S.SelectBoxContainer>
      <S.SelectButton
        $isValid={isValid}
        $isOpened={isOpened}
        $isSelected={selectedValue !== ''}
        onClick={handleOptionBox}
      >
        {selectedValue === '' ? placeholder : selectedValue}
      </S.SelectButton>
      {isOpened && (
        <S.SelectOptionBox>
          {optionValues.map((value) => {
            return (
              <S.SelectOption
                key={value}
                $isSelected={value === selectedValue}
                onClick={() => handleOptionValue(value)}
              >
                {value}
              </S.SelectOption>
            );
          })}
        </S.SelectOptionBox>
      )}
    </S.SelectBoxContainer>
  );
}
