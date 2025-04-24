import { ChangeEvent, useState } from 'react';
import * as S from './Select.styles';

interface Option {
  readonly id: string;
  readonly name: string;
}

interface SelectProps {
  options: readonly Option[];
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  name: string;
  validation?: {
    required?: boolean;
    errorMessage?: string;
  };
}

export default function Select({
  options,
  value,
  onChange,
  placeholder = '선택해주세요',
  name,
  validation,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (selectedValue: string) => {
    setIsOpen(false);
    const event = {
      target: {
        value: selectedValue,
        name,
      },
    } as ChangeEvent<HTMLSelectElement>;
    onChange(event);
  };

  const selectedOption = options.find((option) => option.id === value);
  const displayText = selectedOption ? selectedOption.name : placeholder;

  return (
    <S.SelectWrapper>
      <S.SelectButton type="button" onClick={() => setIsOpen(!isOpen)}>
        {displayText}
      </S.SelectButton>
      <S.DropdownList isOpen={isOpen}>
        <S.DropdownItem isSelected={value === ''} onClick={() => handleSelect('')}>
          {placeholder}
        </S.DropdownItem>
        {options.map((option) => (
          <S.DropdownItem key={option.id} isSelected={value === option.id} onClick={() => handleSelect(option.id)}>
            {option.name}
          </S.DropdownItem>
        ))}
      </S.DropdownList>
      <S.HiddenSelect
        name={name}
        value={value}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => handleSelect(e.target.value)}
        {...(validation && {
          required: validation.required,
          'data-error-message': validation.errorMessage,
        })}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </S.HiddenSelect>
    </S.SelectWrapper>
  );
}
