import { Meta, StoryObj } from '@storybook/react';

import CardIssuerInput from './index';

const meta: Meta<typeof CardIssuerInput> = {
  title: 'CardInput Container',
  component: CardIssuerInput,
  args: {
    onCardIssuerChange: () => {},
  },
};

export default meta;

type Story = StoryObj<typeof CardIssuerInput>;

export const CardIssuer: Story = {};
