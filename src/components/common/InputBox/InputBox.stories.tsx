import React from 'react';

import { InputBox } from './InputBox';
import { passwordInput } from '../../../contexts/cardInfo';
import { useInput } from '../../../hooks/useInput';
import { InputInfo } from '../../../type/input';
import { cardRegisterValidator } from '../../../validation/cardRegister';

export default {
  component: InputBox,
  title: 'InputBox',
};

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
};

const defaultInput: InputInfo[] = [];

const invalidCardNumberInput: InputInfo[] = [
  {
    value: '1234',
    type: 'text',
    isError: false,
    handleChange: handleChange,
    required: true,
  },
  {
    value: '1234',
    type: 'text',
    isError: false,
    handleChange: handleChange,
    required: true,
  },
  {
    value: '1234',
    type: 'text',
    isError: false,
    handleChange: handleChange,
    required: true,
  },
  {
    value: 'card',
    type: 'text',
    isError: true,
    handleChange: handleChange,
    required: true,
  },
];

const validCodeInput: InputInfo[] = [
  {
    value: '123',
    type: 'text',
    isError: false,
    handleChange: handleChange,
    required: true,
  },
];

const invalidNameInput: InputInfo[] = [
  {
    value: 'jero123',
    type: 'text',
    isError: true,
    handleChange: handleChange,
    required: false,
  },
];

export const Default: React.FC = () => (
  <InputBox id={'InputBox 예시'} inputs={defaultInput}></InputBox>
);

export const Invalid: React.FC = () => (
  <InputBox id={'cardNumber'} inputs={invalidCardNumberInput}></InputBox>
);

export const ValidCode: React.FC = () => (
  <InputBox id={'code'} inputs={validCodeInput}></InputBox>
);

export const InvalidName: React.FC = () => (
  <InputBox id={'username'} inputs={invalidNameInput}></InputBox>
);
