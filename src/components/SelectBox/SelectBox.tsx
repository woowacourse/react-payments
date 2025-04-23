import styled from '@emotion/styled';

type SelectBoxProps = React.HTMLAttributes<HTMLElement> & {
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

const StyledSelectBox = styled.select<SelectBoxProps>`
  width: 100%;
  height: 32px;
  padding: 0 10px;
  border-radius: 2.66px;
  border: 1px solid #acacac;

  :focus {
    outline: none;
    border: 1px solid #333333;
  }
`;
