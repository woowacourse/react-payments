import styled from "styled-components";

interface SelectProps extends React.HTMLAttributes<HTMLSelectElement> {
  options: readonly string[];
  placeholder: string;
  onSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ options, placeholder, onSelect, ...props }: SelectProps) => {
  return (
    <StyledSelect onChange={onSelect} {...props}>
      <option value="" selected disabled hidden>
        {placeholder}
      </option>

      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;

const StyledSelect = styled.select`
  height: 32px;
  width: 100%;

  border-radius: 2px;

  border: 1px solid #acacac;

  padding: 0px 4px;
`;
