import React, { useEffect, useRef, useState } from 'react';
import * as Styled from './style';
import ArrowIcon from './ArrowIcon';

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  value: string | null;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  options: Option[];
}

const Select = ({ placeholder, options, value, onChange }: SelectProps) => {
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
    <Styled.Select $isActive={isShowOptions} ref={selectRef} onClick={toggleIsShowOptions}>
      <Styled.CurrentSelected $unSelected={value === null}>
        {value ?? placeholder}
      </Styled.CurrentSelected>
      <ArrowIcon isActive={isShowOptions} />
      <Styled.Options $isShow={isShowOptions}>
        {options.map((option, index) => (
          <Styled.Option
            key={index}
            value={option.value}
            onChange={(event) => onChange(event.currentTarget.value + '')}
          >
            {option.label}
          </Styled.Option>
        ))}
      </Styled.Options>
    </Styled.Select>
  );
};

export default Select;
