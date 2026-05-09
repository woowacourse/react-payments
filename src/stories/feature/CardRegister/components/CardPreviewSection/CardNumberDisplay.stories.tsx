import type { Meta, StoryObj } from '@storybook/react-vite';

import CardNumberDisplay from '../../../../../feature/CardRegister/components/CardPreviewSection/CardNumberDisplay';

const meta = {
  title: 'feature/CardRegister/components/CardNumberDisplay',
  component: CardNumberDisplay,
  tags: ['autodocs'],
  args: {
    cardNumbers: ['', '', '', ''],
  },
} satisfies Meta<typeof CardNumberDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Partial: Story = {
  args: {
    cardNumbers: ['1234', '56', '', ''],
  },
};

export const Filled: Story = {
  args: {
    cardNumbers: ['1234', '5678', '1234', '5678'],
  },
};

export const AmexLength: Story = {
  args: {
    cardNumbers: ['3434', '312323', '32134'],
  },
};
