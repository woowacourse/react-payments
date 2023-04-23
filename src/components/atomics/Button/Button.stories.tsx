import type { Meta, StoryObj } from '@storybook/react';

import Button from '.';

const meta: Meta<typeof Button> = {
  title: 'atomics/Button',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BeforeButton: Story = {
  args: {
    children: '<',
  },
};

export const NextButton: Story = {
  args: {
    type: 'submit',
    kind: 'next',
  },
};

export const RegisterButton: Story = {
  args: {
    type: 'button',
    kind: 'register',
    children: '+',
  },
};
