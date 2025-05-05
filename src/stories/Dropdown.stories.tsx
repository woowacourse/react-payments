import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Dropdown from '../components/Dropdown/Dropdown';
import { CARD_COMPANY } from '../constants';

type CardCompany = (typeof CARD_COMPANY)[number];

const meta: Meta<typeof Dropdown<CardCompany>> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState<CardCompany | null>(null);

    return <Dropdown list={CARD_COMPANY} value={selected} onSelect={setSelected} placeholder="카드사를 선택해주세요" />;
  }
};
