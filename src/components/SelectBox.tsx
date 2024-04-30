import styled from 'styled-components';
import { CardCompany } from '../types/card';

interface Props {
  options: CardCompany[];
  selectedOption: string;
  onChange: (value: CardCompany) => void;
}

export default function SelectBox({
  options,
  selectedOption,
  onChange,
}: Props) {
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = options.find(
      (option) => option.name === e.target.value
    );
    if (selectedOption) {
      onChange(selectedOption);
    }
  };

  return (
    <Select onChange={handleSelect} defaultValue="defaultSelected">
      <option value="defaultSelected" disabled hidden>
        {selectedOption}
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
