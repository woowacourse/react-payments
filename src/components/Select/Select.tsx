import React, { useEffect, useRef, useState } from 'react';
import * as Styled from './style';
import ArrowIcon from './ArrowIcon';

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  label: string;
  value: string | null;
  onChange: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
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
    <Styled.Select
      aria-label={label}
      $isActive={isShowOptions}
      ref={selectRef}
      onClick={toggleIsShowOptions}
    >
      <Styled.CurrentSelected $unSelected={value === null}>
        {value ?? placeholder}
      </Styled.CurrentSelected>
      <ArrowIcon isActive={isShowOptions} />
      <Styled.Options $isShow={isShowOptions}>
        {options.map((option, index) => (
          <Styled.Option key={index} onClick={(event) => onChange(event)}>
            {option.label}
          </Styled.Option>
        ))}
      </Styled.Options>
    </Styled.Select>
  );
};

export default Select;
