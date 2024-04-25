import styled from "@emotion/styled";

interface dropdownProps {
  options: {
    value: string;
    label: string;
  }[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Dropdown = ({ options, value, onChange }: dropdownProps) => {
  return (
    <>
      <SelectContainer value={value} onChange={onChange}>
        <option value="" disabled hidden selected>
          카드사를 선택해주세요.
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectContainer>
    </>
  );
};

export default Dropdown;

const SelectContainer = styled.select`
  width: 315px;
  height: 32px;
  padding: 8px;
  border-radius: 2.6px;
  border: 1.01px solid rgba(172, 172, 172, 1);
  cursor: pointer;

  &:focus {
    border: 1.01px solid rgba(0, 0, 0, 1);
  }
  }
`;
