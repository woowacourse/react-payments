import { Meta, StoryObj } from '@storybook/react';

import Input from './Input';

const inputMeta = {
  component: Input,
  title: 'Input Component',
} satisfies Meta<typeof Input>;

export default inputMeta;

type Story = StoryObj<typeof inputMeta>;

export const Example1 = {
  args: {
    type: 'password',
    maxLength: 4,
    width: '100px',
    inputMode: 'numeric',
    placeholder: '●●●●',
  },
} satisfies Story;

export const Example2 = {
  args: {
    type: 'text',
    maxLength: 4,
    width: '100px',
    inputMode: 'numeric',
    placeholder: '●●●●',
  },
} satisfies Story;
