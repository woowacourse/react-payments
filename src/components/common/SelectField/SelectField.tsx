import { COLOR_PALETTE } from "@/styles/colorPalette";
import FieldLayout from "@components/common/FieldLayout";
import Select, { type SelectProps } from "@components/common/Select/Select";
import styled from "@emotion/styled";

interface SelectFieldProps<T extends string> extends Omit<
  SelectProps<T>,
  "children"
> {
  title: string;
  caption?: string;
  helperMessage?: string;
  options?: { value: T; label: string }[];
}

const SelectField = <T extends string>({
  title,
  caption,
  options,
  helperMessage,
  ...props
}: SelectFieldProps<T>) => {
  return (
    <FieldLayout
      titleComponent={<Title>{title}</Title>}
      captionComponent={<Caption>{caption}</Caption>}
      helperMessageComponent={
        helperMessage ? <HelperMessage>{helperMessage}</HelperMessage> : null
      }
    >
      <Select<T> {...props}>
        {options?.map(({ label, value }) => (
          <Select.Option key={`${label}-${value}`} value={value}>
            {label}
          </Select.Option>
        ))}
      </Select>
    </FieldLayout>
  );
};

const Title = styled.h2`
  font-weight: 700;
  font-size: 1.2rem;
`;

const Caption = styled.p`
  font-weight: 400;
  font-size: 0.6rem;
  color: ${COLOR_PALETTE.CAPTION};
  margin-top: 0.25rem;
`;

const HelperMessage = styled.p`
  font-weight: 400;
  font-size: 0.6rem;
  color: ${COLOR_PALETTE.ERROR};
  margin-top: 0.25rem;
`;

export default SelectField;
