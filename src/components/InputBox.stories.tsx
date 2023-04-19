import React from 'react';
import InputBox from './InputBox';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'InputBox',
  component: InputBox,
};

export function CardNumberInput() {
  const inputs = [
    { type: 'number', maxLength: 4, placeholder: '1234' },
    { type: 'number', maxLength: 4, placeholder: '5678' },
    { type: 'password', maxLength: 4, placeholder: '∙∙∙∙' },
    { type: 'password', maxLength: 4, placeholder: '∙∙∙∙' },
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
  const inputs = [
    { type: 'number', maxLength: 2, placeholder: 'MM' },
    { type: 'number', maxLength: 2, placeholder: 'YY' },
  ];
  return (
    <InputBox
      inputs={inputs}
      align="center"
      separator="/"
      inputValues=""
      setInputValues={() => {}}
    />
  );
}

export function OwnerNameInput() {
  const inputs = [
    { type: 'text', maxLength: 30, placeholder: '카드에 표시된 이름과 동일하게 입력하세요.' },
  ];
  return (
    <InputBox inputs={inputs} align="left" isFullWidth inputValues="" setInputValues={() => {}} />
  );
}

export function SecurityCodeInput() {
  const inputs = [{ type: 'password', maxLength: 3 }];
  return <InputBox inputs={inputs} align="center" inputValues="" setInputValues={() => {}} />;
}

export function CardPassword() {
  const inputs = [{ type: 'password', maxLength: 1 }];
  return <InputBox inputs={inputs} align="center" inputValues="" setInputValues={() => {}} />;
}
