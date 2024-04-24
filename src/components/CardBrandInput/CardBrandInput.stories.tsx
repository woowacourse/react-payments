import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import CardBrandInput from './CardBrandInput';

const meta = {
  title: 'CardBrandInput',
  component: CardBrandInput,
} satisfies Meta<typeof CardBrandInput>;

export default meta;

type Story = StoryObj<typeof CardBrandInput>;

export const Default: Story = {
  args: {
    isBrandValid: { isValid: true, errorMessage: '' },
    onChangeBrand: fn(),
  },
};
