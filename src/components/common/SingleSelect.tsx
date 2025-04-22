import styled from '@emotion/styled';
import { useState } from 'react';

interface SingleSelectProps {
  options: { id: number; name: string }[];
  placeHolder: string;
  selectedCardBrand: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SingleSelect = ({
  options,
  placeHolder,
  selectedCardBrand,
  onChange,
}: SingleSelectProps) => {
  return (
    <Select
      value={selectedCardBrand}
      onChange={onChange}
      isPlaceholder={selectedCardBrand === ''}
    >
      <Option key='0' value='' disabled hidden>
        {placeHolder}
      </Option>
      {options.map((option) => (
        <Option key={option.id} value={option.name}>
          {option.name}
        </Option>
      ))}
    </Select>
  );
};

export default SingleSelect;

const Select = styled.select<{ isPlaceholder: boolean }>`
  width: 320px;
  height: 32px;
  justify-content: space-between;
  border-radius: 3px;
  border-width: 1px;
  padding: 8px;
  border: 1px solid #ccc;

  font-family: Inter;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: 0%;
  vertical-align: middle;

  color: ${({ isPlaceholder }) => (isPlaceholder ? '#acacac' : '#000000')};
`;

const Option = styled.option<{ isPlaceholder?: boolean }>`
  width: 320px;
  height: 30px;
  gap: 6px;
  padding: 7px 73px 7px 10px;

  font-family: Inter;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: 0%;

  color: #4f4f4f;
`;
