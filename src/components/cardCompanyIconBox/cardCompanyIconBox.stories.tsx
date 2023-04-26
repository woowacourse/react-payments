import type { Meta, StoryObj } from '@storybook/react';
import BankIconBox from './cardCompanyIconBox';

const meta = {
  component: BankIconBox,
  title: 'BankIconBox',
  argTypes: {
    cardCompany: {
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof BankIconBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example = {
  args: {
    cardCompany: 'shinhan',
  },
} satisfies Story;
