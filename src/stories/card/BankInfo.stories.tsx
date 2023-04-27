import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import BankInfo from '../../components/card/BankInfo';

function BankDummy() {
  return (
    <div>
      <BankInfo kind="bc" onClick={() => {}} />
      <BankInfo kind="kakao" onClick={() => {}} />
      <BankInfo kind="hana" onClick={() => {}} />
      <BankInfo kind="hyundai" onClick={() => {}} />
      <BankInfo kind="kb" onClick={() => {}} />
      <BankInfo kind="lotte" onClick={() => {}} />
      <BankInfo kind="shinhan" onClick={() => {}} />
      <BankInfo kind="woori" onClick={() => {}} />
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
