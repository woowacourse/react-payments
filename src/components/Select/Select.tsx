import React, { useEffect, useRef, useState } from 'react';
import * as Styled from './style';
import ArrowIcon from './ArrowIcon';

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  label?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder: string;
  options: Option[];
}

const Select = ({ label, placeholder, options, value, onChange }: SelectProps) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [isShowOptions, setIsShowOptions] = useState(false);

  const toggleIsShowOptions = () => {
    setIsShowOptions((prev) => !prev);
  };

  useEffect(() => {
    const clickOutSide = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsShowOptions(false);
      }
    };
    document.addEventListener('mousedown', clickOutSide);
    return () => {
      document.removeEventListener('mousedown', clickOutSide);
    };
  }, [selectRef]);

  return (
    <Styled.Container aria-label={label} ref={selectRef} onClick={toggleIsShowOptions}>
      <Styled.Select
        autoFocus
        defaultValue={value === '' ? placeholder : value}
        $isPlaceholder={value === ''}
        onChange={onChange}
      >
        <option value={placeholder} disabled hidden>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <Styled.Option value={option.value} key={index}>
            {option.label}
          </Styled.Option>
        ))}
      </Styled.Select>
      <Styled.Indicator>
        <ArrowIcon isActive={isShowOptions} />
      </Styled.Indicator>
    </Styled.Container>
  );
};

export default Select;
