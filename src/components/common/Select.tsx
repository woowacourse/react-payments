import { css } from '@emotion/react';

interface SelectPropType {
  options: Array<string>;
  optionValues: Array<string>;
  setValue: (value: string) => void;
  name: string;
  placeholder: string;
}

const Select = ({ options, optionValues, setValue, placeholder }: SelectPropType) => {
  return (
    <select css={selectBoxStyle} onChange={(event) => setValue(event.target.value)} required>
      <option disabled selected>
        {placeholder}
      </option>
      {options.map((option, index) => {
        return (
          <option key={option} value={optionValues[index]}>
            {option}
          </option>
        );
      })}
    </select>
  );
};

const selectBoxStyle = css`
  width: 100%;
  height: 31.28px;

  border-color: #acacac;
  border-radius: 4px;

  padding-left: 6px;
`;

export default Select;
