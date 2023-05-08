import InputBox, { InputType } from './InputBox';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'InputBox',
  component: InputBox,
};

export function CardNumberInput() {
  const inputs: InputType[] = [
    { textType: 'number', maxLength: 4, placeholder: '1234', inputValue: '', setInputValues: () => {} },
    { textType: 'number', maxLength: 4, placeholder: '5678', inputValue: '', setInputValues: () => {} },
    { textType: 'number', maxLength: 4, placeholder: '∙∙∙∙', inputValue: '', setInputValues: () => {} },
    { textType: 'number', maxLength: 4, placeholder: '∙∙∙∙', inputValue: '', setInputValues: () => {} },
  ];
  return <InputBox inputs={inputs} align="center" separator="-" isFullWidth />;
}

export function ExpireDateInput() {
  const inputs: InputType[] = [
    { textType: 'number', maxLength: 2, placeholder: 'MM', inputValue: '', setInputValues: () => {} },
    { textType: 'number', maxLength: 2, placeholder: 'YY', inputValue: '', setInputValues: () => {} },
  ];
  return <InputBox inputs={inputs} align="center" separator="/" />;
}

export function OwnerNameInput() {
  const inputs: InputType[] = [
    {
      textType: 'text',
      maxLength: 30,
      placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
      inputValue: '',
      setInputValues: () => {},
    },
  ];
  return <InputBox inputs={inputs} align="left" isFullWidth />;
}

export function SecurityCodeInput() {
  const inputs: InputType[] = [
    { textType: 'number', maxLength: 3, inputValue: '', setInputValues: () => {} },
  ];
  return <InputBox inputs={inputs} align="center" />;
}

export function CardPasswordInput() {
  const inputs: InputType[] = [
    { textType: 'number', maxLength: 1, inputValue: '', setInputValues: () => {} },
  ];
  return <InputBox inputs={inputs} align="center" />;
}
