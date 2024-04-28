import * as Styled from './Select.styled';

export interface SelectProps extends React.ComponentPropsWithRef<'select'> {
  options: string[];
}

const Select = ({ options, ...restProps }: SelectProps) => {
  return (
    <Styled.Select {...restProps}>
      {options.map((option, index) => (
        <option
          key={option}
          defaultValue='카드사를 선택해 주세요'
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
