import type { Meta, StoryObj } from '@storybook/react';
import { NewCreditCardButton } from './NewCreditCardButton';

const meta = {
  title: 'NewCreditCardButton',
  component: NewCreditCardButton,
} satisfies Meta<typeof NewCreditCardButton>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithHelperText: Story = {
  args: {
    helperText: true,
  },
};

export default meta;
