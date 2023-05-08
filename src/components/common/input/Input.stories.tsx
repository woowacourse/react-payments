import { Meta, StoryObj } from '@storybook/react';

import Input from './Input';

const inputMeta = {
  component: Input,
  title: 'Input Component',
} satisfies Meta<typeof Input>;

export default inputMeta;

type Story = StoryObj<typeof inputMeta>;

export const 가운데정렬_100px = {
  args: {
    type: 'password',
    maxLength: 4,
    width: '100px',
    inputMode: 'numeric',
    placeholder: '●●●●',
  },
} satisfies Story;

export const 왼쪽정렬_200px = {
  args: {
    type: 'text',
    maxLength: 10,
    width: '200px',
    inputMode: 'numeric',
    placeholder: '가나다라마',
    textAlign: 'left',
  },
} satisfies Story;
