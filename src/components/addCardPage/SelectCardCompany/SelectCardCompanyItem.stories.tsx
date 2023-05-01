import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import SelectCardCompanyItem from './SelectCardCompanyItem';

function BankDummy() {
  return (
    <div>
      <SelectCardCompanyItem kind="bc" onCardCompanySelectClick={() => {}} />
      <SelectCardCompanyItem kind="kakao" onCardCompanySelectClick={() => {}} />
      <SelectCardCompanyItem kind="hana" onCardCompanySelectClick={() => {}} />
      <SelectCardCompanyItem
        kind="hyundai"
        onCardCompanySelectClick={() => {}}
      />
      <SelectCardCompanyItem kind="kb" onCardCompanySelectClick={() => {}} />
      <SelectCardCompanyItem kind="lotte" onCardCompanySelectClick={() => {}} />
      <SelectCardCompanyItem
        kind="shinhan"
        onCardCompanySelectClick={() => {}}
      />
      <SelectCardCompanyItem kind="woori" onCardCompanySelectClick={() => {}} />
    </div>
  );
}

const meta: Meta<typeof BankDummy> = {
  component: BankDummy,
  title: 'SelectCardCompanyItem',
};

export default meta;
type Story = StoryObj<typeof BankDummy>;

export const Default: Story = {
  args: {},
};
