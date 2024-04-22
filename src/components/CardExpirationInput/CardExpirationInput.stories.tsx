import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import CardExpirationInput from './CardExpirationInput';

const meta = {
  title: 'CardExpirationInput',
  component: CardExpirationInput,
} satisfies Meta<typeof CardExpirationInput>;

export default meta;

type Story = StoryObj<typeof CardExpirationInput>;

export const Default: Story = {
  args: {
    isMonthValid: { isValid: true, errorMessage: '' },
    isYearValid: { isValid: true, errorMessage: '' },
    onChangeExpireDate: fn(),
  },
};
