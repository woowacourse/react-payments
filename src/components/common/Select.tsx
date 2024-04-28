import * as React from 'react';
import styled from 'styled-components';

interface Option extends React.InputHTMLAttributes<HTMLSelectElement> {
  value: string;
  label: string;
}

export interface ISelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  placeholder?: string;
  options: Option[];
}

export default function Select({ placeholder, options, ...rest }: ISelectProps) {
  return (
    <S.Select {...rest}>
      {placeholder && (
        <option value="" disabled selected>
          {placeholder}
        </option>
      )}
      {options.map(({ value, label }) => {
        return (
          <option key={value} value={value}>
            {label}
          </option>
        );
      })}
    </S.Select>
  );
}

const S = {
  Select: styled.select<React.SelectHTMLAttributes<HTMLSelectElement>>`
    width: 100%;
    height: 40px;
    padding: 10px 7px;
    border: 1px solid #acacac;
    border-radius: 4px;
    font-size: 15.5px;
    font-weight: 400;

    cursor: pointer;
    color: ${({ value }) => (value ? '#000000' : '#acacac')};
  `,
};
