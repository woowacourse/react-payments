import React from 'react';
import LabeledInput from '.';
import '../../index.css';
import MESSAGE from '../../constant/message';

export default {
  title: 'Payment/LabeledInput',
  component: LabeledInput,
};

const Template = args => <LabeledInput {...args} />;

export const CardNumbers = Template.bind({});
export const ExpiredDate = Template.bind({});
export const OwnerName = Template.bind({});
export const SecurityNumber = Template.bind({});
export const Password = Template.bind({});

CardNumbers.args = {
  // value: '',
  isShowLengthChecker: false,
  invalidMessage: MESSAGE.INVALID_CARD_NUMBER,
  countInput: 1,
  inputProps: {
    type: 'text',
    width: '318px',
    maxLength: 19,
    placeholder: 'ex. 0000-0000-0000-0000',
    isValid: false,
  },
  inputLabelProps: {
    label: '카드 번호',
  },
};

ExpiredDate.args = {
  value: '',
  isShowLengthChecker: false,
  invalidMessage: MESSAGE.INVALID_EXPIRED_DATE,
  countInput: 1,
  inputProps: {
    type: 'text',
    width: '137px',
    isCenter: true,
    maxLength: 5,
    placeholder: 'MM / YY',
    isValid: false,
  },
  inputLabelProps: {
    label: '만료일',
  },
};

OwnerName.args = {
  value: '',
  headerWidth: '318px',
  isShowLengthChecker: true,
  invalidMessage: MESSAGE.INVALID_OWNER_NAME,
  countInput: 1,
  inputProps: {
    type: 'text',
    width: '318px',
    placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
    isCenter: false,
    maxLength: 30,
    isValid: false,
  },
  inputLabelProps: {
    label: '카드 소유자 이름(선택)',
  },
};

SecurityNumber.args = {
  value: '',
  isShowLengthChecker: false,
  invalidMessage: MESSAGE.INVALID_SECURITY_NUMBER,
  countInput: 1,
  inputProps: {
    type: 'password',
    width: '84px',
    isCenter: true,
    maxLength: 3,
    isValid: false,
  },
  inputLabelProps: {
    label: '보안 코드(CVC/CVV)',
  },
};

Password.args = {
  value: [],
  isShowLengthChecker: false,
  invalidMessage: MESSAGE.INVALID_PASSWORD,
  countInput: 2,
  inputProps: {
    type: 'password',
    width: '43px',
    isCenter: true,
    maxLength: 1,
    isValid: false,
  },
  inputLabelProps: {
    label: '카드 비밀번호',
  },
};
