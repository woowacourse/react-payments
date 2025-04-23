// SelectBox.tsx
import styled from 'styled-components';
import { useState } from 'react';

type SelectBoxProps = {
  options: string[];
  width: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const StyledSelectBox = styled.select<{ width?: string }>`
  width: ${(props) => props.width || '100%'};
  border-radius: 2px;
  border: 1.015px solid #acacac;
  display: flex;
  height: 32px;
  padding: 8px;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
`;

function SelectBox({ options, width, placeholder, onChange }: SelectBoxProps) {
  const [selected, setSelected] = useState('');

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
    onChange(e);
  };

  return (
    <StyledSelectBox value={selected} onChange={handleSelect} width={width}>
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </StyledSelectBox>
  );
}

export default SelectBox;
