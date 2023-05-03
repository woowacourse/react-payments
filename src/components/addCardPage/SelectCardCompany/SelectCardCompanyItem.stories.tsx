import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CARD_COMPANY_KIND } from '@constants/cardCompany';
import SelectCardCompanyItem from './SelectCardCompanyItem';

function BankDummy() {
  return (
    <div>
      {CARD_COMPANY_KIND.map((company) => (
        <SelectCardCompanyItem
          kind={company}
          onCardCompanySelectClick={() => {}}
        ></SelectCardCompanyItem>
      ))}
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
