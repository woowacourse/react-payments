type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  value?: string;
  onChange?: (selected: string) => void;
  options: Option[];
  valueAs?: (value?: string) => string;
  isError?: boolean;
};

const Select = ({
  value,
  onChange,
  options,
  valueAs = (value: any) => String(value) ?? "선택하기",
  isError = false,
}: SelectProps) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      className={isError ? "error" : ""}
    >
      <option value={""}>{valueAs(undefined)}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
