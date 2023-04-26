import type { Meta, StoryObj } from '@storybook/react';
import BankIconBox from './BankIconBox';

const meta = {
  component: BankIconBox,
  title: 'BankIconBox',
  argTypes: {
    bankName: {
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof BankIconBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example = {
  args: {
    bankName: 'shinhan',
  },
} satisfies Story;
