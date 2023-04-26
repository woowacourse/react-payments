import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import BankInfo from '../../components/card/BankInfo';

function BankDummy() {
  return (
    <div>
      <BankInfo kind="bc" />
      <BankInfo kind="kakao" />
      <BankInfo kind="hana" />
      <BankInfo kind="hyundai" />
      <BankInfo kind="kb" />
      <BankInfo kind="lotte" />
      <BankInfo kind="shinhan" />
      <BankInfo kind="woori" />
    </div>
  );
}

const meta: Meta<typeof BankDummy> = {
  component: BankDummy,
  title: 'BankInfo',
};

export default meta;
type Story = StoryObj<typeof BankDummy>;

export const Default: Story = {
  args: {},
};
