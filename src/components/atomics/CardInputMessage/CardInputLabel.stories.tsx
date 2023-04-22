import type { Meta, StoryObj } from '@storybook/react';

import CardInputMessage from '.';

const meta: Meta<typeof CardInputMessage> = {
  title: 'atomics/CardInputMessage',
  component: CardInputMessage,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CardInputErrorMessage: Story = {
  args: {
    type: 'error',
    children: 'hi',
  },
};

export const CardInputTitleMessage: Story = {
  args: {
    type: 'title',
    children: 'hi',
  },
};
