import type { Meta, StoryObj } from '@storybook/react';
import CardExpirationInput from '../components/CardExpirationInput';

const meta = {
  title: 'CardExpirationInput',
  component: CardExpirationInput,
} satisfies Meta<typeof CardExpirationInput>;

export default meta;

type Story = StoryObj<typeof CardExpirationInput>;

export const Default: Story = {
  args: {
    setMonth: () => {},
    setYear: () => {},
  },
};
