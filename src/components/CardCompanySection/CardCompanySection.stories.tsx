import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CardCompanySection from './CardCompanySection';
import { CardCompany } from '../../types/card';

const meta: Meta<typeof CardCompanySection> = {
  title: 'CardCompanySection',
  component: CardCompanySection
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardCompany: ''
  },
  render: ({ cardCompany: initialCompany }) => {
    const [cardCompany, setCardCompany] = useState<CardCompany>(initialCompany);

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setCardCompany(e.target.value as CardCompany);
    };

    return <CardCompanySection cardCompany={cardCompany} handleSelectChange={handleSelectChange} />;
  }
};

export const Selected: Story = {
  args: {
    cardCompany: '신한카드'
  },
  render: ({ cardCompany: initialCompany }) => {
    const [cardCompany, setCardCompany] = useState<CardCompany>(initialCompany);

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setCardCompany(e.target.value as CardCompany);
    };

    return <CardCompanySection cardCompany={cardCompany} handleSelectChange={handleSelectChange} />;
  }
};
