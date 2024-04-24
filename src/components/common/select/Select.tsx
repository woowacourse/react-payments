import * as Styled from './Select.styled';

export interface SelectProps extends React.ComponentPropsWithRef<'select'> {
  options: string[];
}

const Select = ({ options, ...restProps }: SelectProps) => {
  return (
    <Styled.Select {...restProps}>
      {options.map((option, index) =>
        index === 0 ? (
          <option key={option} value='' selected disabled>
            {option}
          </option>
        ) : (
          <option key={option} value={option}>
            {option}
          </option>
        ),
      )}
    </Styled.Select>
  );
};

export default Select;
