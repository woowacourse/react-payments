import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import CardCompanySection from './CardCompanySection';
import type { CardCompany } from './CardCompanyConstants';

const meta: Meta<typeof CardCompanySection> = {
  title: 'Payments/CardCompanySection',
  component: CardCompanySection,
};

export default meta;
type Story = StoryObj<typeof CardCompanySection>;

// 기본 상태
export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<CardCompany | ''>('');
    return <CardCompanySection value={value} setValue={setValue} />;
  },
};

// 신한 카드 선택 상태
export const ShinhanSelected: Story = {
  render: () => {
    const [value, setValue] = useState<CardCompany | ''>('신한카드');
    return <CardCompanySection value={value} setValue={setValue} />;
  },
};