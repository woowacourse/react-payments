import type { Meta, StoryObj } from '@storybook/react';
import { CardPasswordInput } from './CardPasswordInput';

const meta = {
  title: 'CardPasswordInput',
  component: CardPasswordInput,
} satisfies Meta<typeof CardPasswordInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllFilledPassword: Story = {
  args: {
    value: '1234',
  },
};
