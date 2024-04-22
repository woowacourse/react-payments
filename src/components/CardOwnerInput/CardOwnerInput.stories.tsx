import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import CardOwnerInput from './CardOwnerInput';

const meta = {
  title: 'CardOwnerInput',
  component: CardOwnerInput,
} satisfies Meta<typeof CardOwnerInput>;

export default meta;

type Story = StoryObj<typeof CardOwnerInput>;

export const Default: Story = {
  args: {
    isOwnerValid: { isValid: true, errorMessage: '' },
    onChangeOwner: fn(),
  },
};
