import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import CardCVCInput from './CardCVCInput';

const meta = {
  title: 'CardCVCInput',
  component: CardCVCInput,
} satisfies Meta<typeof CardCVCInput>;

export default meta;

type Story = StoryObj<typeof CardCVCInput>;

export const Default: Story = {
  args: {
    isCVCValid: { isValid: true, errorMessage: '' },
    onChangeCVC: fn(),
  },
};
