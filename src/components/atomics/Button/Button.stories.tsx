import type { Meta, StoryObj } from '@storybook/react';

import Button from '.';
import Message from '../Message';

const meta: Meta<typeof Button> = {
  title: 'atomics/Button',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const NextButton: Story = {
  args: {
    type: 'submit',
    width: '50px',
    height: '30px',
    children: (
      <Message fontSize="14px" lineHeight="16px" fontWeight={700} color="#000">
        다음
      </Message>
    ),
  },
};

export const RegisterButton: Story = {
  args: {
    type: 'button',
    width: '212px',
    height: '124px',
    bgColor: '#e5e5e5',
    borderRadius: '5px',
    children: (
      <Message fontSize="30px" color="#575757">
        +
      </Message>
    ),
  },
};
