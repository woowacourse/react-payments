import { Meta, StoryObj } from '@storybook/react';
import BankProfileList from './BankProfileList';

const meta: Meta<typeof BankProfileList> = {
  component: BankProfileList,
  title: 'BankProfileList',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    setCardType: () => {},
    closeModal: () => {},
  },
  render: (args) => <BankProfileList {...args}></BankProfileList>,
};
