import InputBox, { InputType } from './InputBox';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'InputBox',
  component: InputBox,
};

export function CardNumberInput() {
  const inputs: InputType[] = [
    { textType: 'number', maxLength: 4, placeholder: '1234', inputValues: '', setInputValues: () => {} },
    { textType: 'number', maxLength: 4, placeholder: '5678', inputValues: '', setInputValues: () => {} },
    { textType: 'number', maxLength: 4, placeholder: '∙∙∙∙', inputValues: '', setInputValues: () => {} },
    { textType: 'number', maxLength: 4, placeholder: '∙∙∙∙', inputValues: '', setInputValues: () => {} },
  ];
  return <InputBox inputs={inputs} align="center" separator="-" isFullWidth />;
}

export function ExpireDateInput() {
  const inputs: InputType[] = [
    { textType: 'number', maxLength: 2, placeholder: 'MM', inputValues: '', setInputValues: () => {} },
    { textType: 'number', maxLength: 2, placeholder: 'YY', inputValues: '', setInputValues: () => {} },
  ];
  return <InputBox inputs={inputs} align="center" separator="/" />;
}

export function OwnerNameInput() {
  const inputs: InputType[] = [
    {
      textType: 'text',
      maxLength: 30,
      placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
      inputValues: '',
      setInputValues: () => {},
    },
  ];
  return <InputBox inputs={inputs} align="left" isFullWidth />;
}

export function SecurityCodeInput() {
  const inputs: InputType[] = [
    { textType: 'number', maxLength: 3, inputValues: '', setInputValues: () => {} },
  ];
  return <InputBox inputs={inputs} align="center" />;
}

export function CardPasswordInput() {
  const inputs: InputType[] = [
    { textType: 'number', maxLength: 1, inputValues: '', setInputValues: () => {} },
  ];
  return <InputBox inputs={inputs} align="center" />;
}
