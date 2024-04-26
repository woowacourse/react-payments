import type { Meta, StoryObj } from '@storybook/react';

import CardExpirationInput from './CardExpirationInput';
import { validateMonth, validateYear } from '../../../domain/Card';
import useInput from '../../../hooks/useInput';

const meta = {
  title: 'CardExpirationInput',
  component: CardExpirationInput,
  parameters: {
    controls: { exclude: ['month', 'year'] },
  },
  decorators: [
    () => {
      const month = useInput(validateMonth);
      const year = useInput(validateYear);
      return <CardExpirationInput month={month} year={year} />;
    },
  ],
} satisfies Meta<typeof CardExpirationInput>;

export default meta;

type Story = StoryObj<typeof CardExpirationInput>;

export const Default: Story = {};
