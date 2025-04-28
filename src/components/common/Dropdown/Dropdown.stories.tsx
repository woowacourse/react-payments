import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Dropdown from './Dropdown';
import { DropdownOptionType } from '../../../types/dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Dropdown>;

// Dropdown 옵션 샘플
const sampleOptions: DropdownOptionType[] = [
  { label: '옵션 1', value: 'option1' },
  { label: '옵션 2', value: 'option2' },
  { label: '옵션 3', value: 'option3' },
];

export const Default: Story = {
  args: {
    options: sampleOptions,
    placeholder: '선택해주세요',
  },
  render: (args) => {
    const [selectedValue, setSelectedValue] =
      useState<DropdownOptionType | null>(null);

    return (
      <div style={{ width: 240 }}>
        <Dropdown
          {...args}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
      </div>
    );
  },
};
