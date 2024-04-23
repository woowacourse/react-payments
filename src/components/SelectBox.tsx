import styled from 'styled-components';
import { CardCompany } from '../types/card';

interface Props {
  options: CardCompany[];
  onChange: (value: CardCompany) => void;
}

export default function SelectBox({ options, onChange }: Props) {
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    const selectedOption = options.find(
      (option) => option.name === e.target.value
    );
    if (selectedOption) {
      onChange(selectedOption);
    }
  };
  return (
    <Select onChange={handleSelect}>
      <option disabled hidden selected>
        카드사를 선택해주세요
      </option>
      {options.map((option) => (
        <option key={option.name} value={option.name}>
          {option.name}
        </option>
      ))}
    </Select>
  );
}

const Select = styled.select`
  padding: 10px;
`;
