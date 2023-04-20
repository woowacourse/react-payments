import React from 'react';
import InputBox, { InputType } from './InputBox';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'InputBox',
  component: InputBox,
};

export function CardNumberInput() {
  const inputs: InputType[] = [
    { textType: 'number', maxLength: 4, placeholder: '1234' },
    { textType: 'number', maxLength: 4, placeholder: '5678' },
    { textType: 'number', maxLength: 4, placeholder: '∙∙∙∙' },
    { textType: 'number', maxLength: 4, placeholder: '∙∙∙∙' },
  ];
  return (
    <InputBox
      inputs={inputs}
      align="center"
      separator="-"
      isFullWidth
      inputValues=""
      setInputValues={() => {}}
    />
  );
}

export function ExpireDateInput() {
  const inputs: InputType[] = [
    { textType: 'number', maxLength: 2, placeholder: 'MM' },
    { textType: 'number', maxLength: 2, placeholder: 'YY' },
  ];
  return <InputBox inputs={inputs} align="center" separator="/" inputValues="" setInputValues={() => {}} />;
}

export function OwnerNameInput() {
  const inputs: InputType[] = [
    { textType: 'text', maxLength: 30, placeholder: '카드에 표시된 이름과 동일하게 입력하세요.' },
  ];
  return <InputBox inputs={inputs} align="left" isFullWidth inputValues="" setInputValues={() => {}} />;
}

export function SecurityCodeInput() {
  const inputs: InputType[] = [{ textType: 'number', maxLength: 3 }];
  return <InputBox inputs={inputs} align="center" inputValues="" setInputValues={() => {}} />;
}

export function CardPasswordInput() {
  const inputs: InputType[] = [{ textType: 'number', maxLength: 1 }];
  return <InputBox inputs={inputs} align="center" inputValues="" setInputValues={() => {}} />;
}
