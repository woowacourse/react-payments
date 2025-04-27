import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';
import Dropdown from '../components/Dropdown/Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Common/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  args: {
    list: ['BC카드', '신한카드', '카카오뱅크', '국민카드', '우리카드'],
    placeholder: '카드를 선택해주세요'
  },
  argTypes: {
    list: { control: 'object' },
    placeholder: { control: 'text' },
    onSelect: { action: 'onSelect' }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState('');

    return (
      <Dropdown
        list={args.list}
        placeholder={args.placeholder}
        value={selectedValue}
        onSelect={(company) => {
          args.onSelect?.(company);
          setSelectedValue(company);
        }}
      />
    );
  }
};
