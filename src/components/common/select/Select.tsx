import * as Styled from './Select.styled';

export interface SelectProps extends React.ComponentPropsWithRef<'select'> {
  options: string[];
}

const Select = ({ options, defaultValue, ...restProps }: SelectProps) => {
  return (
    <Styled.Select {...restProps}>
      {options.map((option, index) => (
        <option
          key={option}
          defaultValue={defaultValue}
          value={index === 0 ? '' : option}
          disabled={index === 0}
        >
          {option}
        </option>
      ))}
    </Styled.Select>
  );
};

export default Select;
