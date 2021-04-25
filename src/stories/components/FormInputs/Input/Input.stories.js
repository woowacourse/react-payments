import React from 'react';
import Input from '.';
import { Icon } from '../../';

export default {
  title: 'Form Inputs/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
  width: '318px',
  label: '이름',
  type: 'text',
  placeholder: '이름을 입력하세요',
  textAlign: 'center',
  required: false,
  currentInputLength: 0,
  maxLength: 30,
  letterCounter: {
    current: 0,
    max: 30,
  },
  children: (
    <button
      type="button"
      style={{
        display: 'inherit',
        background: 'none',
        outline: '0',
        border: '0',
        cursor: 'pointer',
        margin: '0 0 0 12px',
        padding: '0',
        boxSizing: 'content-box',
      }}
    >
      <Icon.QuestionMark size="27px" />
    </button>
  ),
};
