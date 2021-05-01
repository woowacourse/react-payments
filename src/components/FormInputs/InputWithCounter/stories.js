import React from 'react';
import InputWithCounter from '.';

export default {
  title: 'Components/Form Inputs/InputWithCounter',
  component: InputWithCounter,
};

const Template = (args) => <InputWithCounter {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: 'input-id',
  width: '318px',
  label: '이름',
  type: 'text',
  placeholder: '이름을 입력하세요',
  textAlign: 'center',
  required: false,
  maxLength: 30,
  letterCounter: {
    current: 0,
    max: 30,
  },
  errorMessage: '유효하지 않은 입력입니다.',
};
