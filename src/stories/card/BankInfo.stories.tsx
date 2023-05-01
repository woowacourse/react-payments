import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import BankInfo from '../../components/card/BankInfo';

function BankDummy() {
  return (
    <div>
      <BankInfo kind="bc" onBankSelectClick={() => {}} />
      <BankInfo kind="kakao" onBankSelectClick={() => {}} />
      <BankInfo kind="hana" onBankSelectClick={() => {}} />
      <BankInfo kind="hyundai" onBankSelectClick={() => {}} />
      <BankInfo kind="kb" onBankSelectClick={() => {}} />
      <BankInfo kind="lotte" onBankSelectClick={() => {}} />
      <BankInfo kind="shinhan" onBankSelectClick={() => {}} />
      <BankInfo kind="woori" onBankSelectClick={() => {}} />
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
