import type { Meta, StoryObj } from '@storybook/react';
import { CardPasswordInput } from '../../components/CardPasswordInput';

const meta = {
  title: 'Input/CardPasswordInput',
  component: CardPasswordInput,
  tags: ['autodocs'],
} satisfies Meta<typeof CardPasswordInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllFilledPassword: Story = {
  args: {
    value: '1234',
  },
};
