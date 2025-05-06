import type { Meta, StoryObj } from '@storybook/react';
import CardPreview from '../components/CardPreview/CardPreview';
import { CardNumberType, ExpirationType, CardCompanyType } from '../types';
import { CARD_COMPANY } from '../constants';

const meta: Meta<typeof CardPreview> = {
  title: 'Feature/CardPreview',
  component: CardPreview,
  tags: ['autodocs'],
  argTypes: {
    company: {
      control: { type: 'select' },
      options: [...CARD_COMPANY, null] as (CardCompanyType | null)[]
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

const createCardNumbers = (first = '1234', rest = '5678'): CardNumberType => ({
  first: { value: first, errorMessage: '' },
  second: { value: rest, errorMessage: '' },
  third: { value: rest, errorMessage: '' },
  fourth: { value: rest, errorMessage: '' }
});

const createExpiration = (month = '12', year = '30'): ExpirationType => ({
  month: { value: month, errorMessage: '' },
  year: { value: year, errorMessage: '' }
});

export const Playground: Story = {
  args: {
    cardNumbers: createCardNumbers(),
    expiration: createExpiration(),
    company: '신한카드'
  }
};

export const EmptyFields: Story = {
  args: {
    cardNumbers: createCardNumbers('', ''),
    expiration: createExpiration('', ''),
    company: null
  }
};

export const BCCard: Story = {
  args: {
    cardNumbers: createCardNumbers('4167'),
    expiration: createExpiration('11', '28'),
    company: 'BC카드'
  }
};
