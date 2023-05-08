import type { Meta, StoryObj } from '@storybook/react';
import { ExpirationDateInput } from '../../components/ExpirationDateInput';

const meta = {
  title: 'Input/ExpirationDateInput',
  component: ExpirationDateInput,
  tags: ['autodocs'],
} satisfies Meta<typeof ExpirationDateInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FilledDateNumber: Story = {
  args: {
    value: ['12', '12'],
  },
};
