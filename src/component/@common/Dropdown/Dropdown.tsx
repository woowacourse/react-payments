import {
  ReactNode,
  PropsWithChildren,
  ChangeEvent,
  SelectHTMLAttributes,
  OptionHTMLAttributes,
} from 'react';
import {
  dropdownArrow,
  dropdownContainer,
  dropdownOption,
  dropdownSelect,
} from './Dropdown.styles';

interface DropdownProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  defaultValue?: string;
  placeholder?: string;
  onNext?: () => void;
  value?: string;
  onChange?: (value: string) => void;
}

interface DropdownOptionProps extends OptionHTMLAttributes<HTMLOptionElement> {
  value: string;
  children: ReactNode;
}

const Dropdown = ({
  children,
  defaultValue = '',
  placeholder = '선택해주세요',
  onNext,
  value,
  onChange,
  ...props
}: PropsWithChildren<DropdownProps>) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    onChange?.(newValue);
    onNext?.();
  };

  return (
    <div css={dropdownContainer}>
      <select
        value={value ?? ''}
        onChange={handleChange}
        css={dropdownSelect}
        {...props}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {children}
      </select>
      <div css={dropdownArrow}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 10L12 15L17 10"
            stroke="#666"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

const DropdownOption = ({ value, children, ...props }: DropdownOptionProps) => {
  return (
    <option value={value} css={dropdownOption} {...props}>
      {children}
    </option>
  );
};

Dropdown.Option = DropdownOption;

export { Dropdown };
