import styled from '@emotion/styled';

interface DropdownSelectProps {
  value: string;
  setValue: (value: string) => void;
  options: string[];
  placeholder?: string;
}

function DropdownSelect({ value, setValue, options, placeholder }: DropdownSelectProps) {
  return (
    <DropdownInputSelect
      isPlaceholder={value === ''}
      value={value}
      onChange={(e) => setValue(e.target.value)}>
      <option disabled hidden selected value={''}>
        {placeholder}
      </option>
      {options.map((option, index) => (
        <DropdownInputOption key={index} value={option}>
          {option}
        </DropdownInputOption>
      ))}
    </DropdownInputSelect>
  );
}

export default DropdownSelect;

const DropdownInputSelect = styled.select<{ isPlaceholder: boolean }>`
  color: ${({ isPlaceholder }) => (isPlaceholder ? '#acacac' : '#000')};
  width: 100%;
  border: 1px solid #acacac;
  border-radius: 2px;
  height: 32px;
  padding: 8px;
`;

const DropdownInputOption = styled.option`
  color: #000;
`;
