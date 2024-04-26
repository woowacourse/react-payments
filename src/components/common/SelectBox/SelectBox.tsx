import { useState } from 'react';
import * as S from './SelectBox.style';

interface SelectBoxProps {
  optionValues: string[];
  isValid: boolean;
  placeholder?: string;
  autoFocus?: boolean;
  onChange: (value: string) => void;
}

export default function SelectBox({ optionValues, isValid, placeholder, autoFocus, onChange }: SelectBoxProps) {
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
        autoFocus={autoFocus ?? false}
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
