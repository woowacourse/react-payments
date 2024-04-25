import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import CardPINInput from './CardPINInput';

const meta = {
  title: 'CardPINInput',
  component: CardPINInput,
} satisfies Meta<typeof CardPINInput>;

export default meta;

type Story = StoryObj<typeof CardPINInput>;

export const Default: Story = {
  args: {
    isPINValid: { isValid: true, errorMessage: '' },
    onChangePIN: fn(),
  },
};
