import {DropdownContainer} from "./Dropdown.style";
import {ChangeEvent, ForwardedRef, forwardRef} from "react";

type DropdownProps = {
  options: string[];
  value?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  tabIndex?: number;
}

const Dropdown = forwardRef(
  ({options, value, onChange, tabIndex, placeholder}: DropdownProps, ref: ForwardedRef<HTMLSelectElement>) => {
    return (
      <select
        ref={ref}
        css={DropdownContainer}
        name="card-brand"
        id="card-brand-select"
        value={value}
        onChange={onChange}
        tabIndex={tabIndex}
      >
        {placeholder && (
          <option value="" disabled={value !== ''}>
            {placeholder}
          </option>
        )}
        {options.map((option) => {
          return <option key={option} value={option}>{option}</option>
        })}
      </select>
    );
  }
);

Dropdown.displayName = 'Dropdown';

export default Dropdown;
