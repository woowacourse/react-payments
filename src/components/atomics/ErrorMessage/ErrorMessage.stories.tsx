import type { Meta, StoryObj } from '@storybook/react';

import ErrorMessage from '.';

const meta: Meta<typeof ErrorMessage> = {
  title: 'atomics/ErrorMessage',
  component: ErrorMessage,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const NotErrorMessage: Story = {
  args: {
    isError: false,
    children: 'hi',
  },
};

export const isErrorMessage: Story = {
  args: {
    isError: true,
    children: 'hi',
  },
};
