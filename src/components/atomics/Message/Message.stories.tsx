import type { Meta, StoryObj } from '@storybook/react';

import CardInputMessage from '.';

const meta: Meta<typeof CardInputMessage> = {
  title: 'atomics/CardInputMessage',
  component: CardInputMessage,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CardLabelMessage: Story = {
  args: {
    type: 'label',
    children: 'hi',
  },
};

export const CardHeaderMessage: Story = {
  args: {
    type: 'header',
    children: 'hi',
  },
};
