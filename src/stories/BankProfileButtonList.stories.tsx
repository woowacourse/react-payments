import BankProfileButtonList from '../components/BankProfileButtonList';
import bankList from '../data/bankList';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof BankProfileButtonList>;

const meta: Meta<typeof BankProfileButtonList> = {
  title: 'BankProfileButtonList',
  component: BankProfileButtonList,
};

export default meta;

export const BankList: Story = {
  args: {
    bankList,
    getBankName: () => {},
    profileSize: 37,
  },
};
