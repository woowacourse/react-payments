import { ChangeEvent, useState } from 'react';
import Input from './Input';
import styled from 'styled-components';

type inputType = '카드 번호' | '유효기간' | 'CVC';

const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.p`
  font-weight: 500;
  font-size: 12px;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const ErrorMessage = styled.p`
  font-weight: 400;
  font-size: 9.5px;
  background-color: #ff3d3d;
`;

function InputField({ label, type }: { label: string; type: inputType }) {
  const [value, setValue] = useState('');

  const onChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setValue(target.value);
  };

  return (
    <InputFieldContainer>
      <Label>{label}</Label>
      <InputWrapper>
        <Input
          placeholder="1234"
          isError={false}
          value={value}
          onChange={onChange}
        ></Input>
      </InputWrapper>
      <ErrorMessage>sdf</ErrorMessage>
    </InputFieldContainer>
  );
}

export default InputField;
