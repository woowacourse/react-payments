import { StyledSelectBox } from './SelectBox.styles';

export type SelectBoxProps = React.SelectHTMLAttributes<HTMLElement> & {
  placeHolder?: string;
  values?: string[];
};

const SelectBox = ({ placeHolder, values, ...props }: SelectBoxProps) => {
  return (
    <StyledSelectBox {...props}>
      <option hidden>{placeHolder}</option>
      {values &&
        values.map((value, idx) => (
          <option key={idx} value={value}>
            {value}
          </option>
        ))}
    </StyledSelectBox>
  );
};

export default SelectBox;
