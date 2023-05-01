import { Meta, StoryObj } from '@storybook/react';
import BankProfileButton from './BankProfileButton';
import { BANK_LIST } from '../../domain/constants/card';

const meta: Meta<typeof BankProfileButton> = {
  component: BankProfileButton,
  title: 'BankProfileButton',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: BANK_LIST[0].profile,
    name: BANK_LIST[0].name,
  },
  render: (args) => <BankProfileButton {...args}></BankProfileButton>,
};
