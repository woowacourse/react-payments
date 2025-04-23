import {
  createContext,
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
import { CardBrand, useCard } from '../../../context/CardContext';

interface DropdownContextType {
  selectedOption: string;
  handleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

interface DropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  defaultValue?: string;
  placeholder?: string;
  onNext?: () => void;
}

interface DropdownOptionProps extends OptionHTMLAttributes<HTMLOptionElement> {
  value: string;
  children: ReactNode;
}

export const DropdownContext = createContext<DropdownContextType>({
  selectedOption: '',
  handleChange: () => {},
});

const Dropdown = ({
  children,
  defaultValue = '',
  placeholder = '카드사를 선택해주세요',
  onNext,
  ...props
}: PropsWithChildren<DropdownProps>) => {
  const { selectedCardBrand, setSelectedCardBrand } = useCard();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as CardBrand;
    setSelectedCardBrand(value);
  };

  if (selectedCardBrand) {
    onNext?.();
  }

  return (
    <div css={dropdownContainer}>
      <select
        value={selectedCardBrand ?? ''}
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
