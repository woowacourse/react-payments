import React from 'react';
import LabeledInput from '.';
import '../../index.css';

export default {
  title: 'Payment/LabeledInput',
  component: LabeledInput,
};

const Template = args => <LabeledInput {...args} />;

export const CardNumber = Template.bind({});
export const ExpiredDate = Template.bind({});
export const OwnerName = Template.bind({});
export const SecurityNumber = Template.bind({});
export const Password = Template.bind({});

CardNumber.args = {
  value: '',
  isShowLengthChecker: false,
  countInput: 1,
  inputProps: {
    type: 'text',
    width: '318px',
    isCenter: true,
    maxLength: 19,
    placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
  },
  inputLabelProps: {
    label: '카드 번호',
  },
};

ExpiredDate.args = {
  value: '',
  isShowLengthChecker: false,
  countInput: 1,
  inputProps: {
    type: 'text',
    width: '137px',
    isCenter: true,
    maxLength: 5,
    placeholder: 'MM / YY',
  },
  inputLabelProps: {
    label: '만료일',
  },
};

OwnerName.args = {
  value: '',
  headerWidth: '318px',
  isShowLengthChecker: true,
  countInput: 1,
  inputProps: {
    type: 'text',
    width: '318px',
    placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
    isCenter: false,
    maxLength: 30,
  },
  inputLabelProps: {
    label: '카드 소유자 이름(선택)',
  },
};

SecurityNumber.args = {
  value: '',
  isShowLengthChecker: false,
  countInput: 1,
  inputProps: {
    type: 'password',
    width: '84px',
    isCenter: true,
    maxLength: 3,
  },
  inputLabelProps: {
    label: '보안 코드(CVC/CVV)',
  },
};

Password.args = {
  value: '',
  isShowLengthChecker: false,
  countInput: 4,
  inputProps: {
    type: 'password',
    width: '43px',
    isCenter: true,
    maxLength: 1,
  },
  inputLabelProps: {
    label: '카드 비밀번호',
  },
};
