import React from 'react';

import Button from '../components/common/Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    bgColor: { control: 'color' },
    shape: {
      options: ['circle', 'rectangle'],
      control: { type: 'radio' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
  },
};

const Template = args => <Button {...args} />;

export const Arrow = Template.bind({});
Arrow.args = {
  size: 'small',
  children: (
    <svg
      width="10"
      height="17"
      viewBox="0 0 10 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.30426 1L1.36476 8.78658L9.15134 15.7261"
        stroke="#525252"
        stroke-width="1.5"
      />
    </svg>
  ),
};

export const Text = Template.bind({});
Text.args = {
  color: '#04C09E',
  children: '다음',
  fontWeight: 'bold',
};

export const Question = Template.bind({});
Question.args = {
  border: '1px solid #BABABA',
  color: '#969696',
  children: '?',
  shape: 'circle',
  size: 'small',
};
