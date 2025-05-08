import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Select } from '@/components/common/Select';

const meta = {
  title: 'common/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '선택 필드 컴포넌트입니다.',
      },
    },
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: ['option1', 'option2', 'option3', 'option4', 'option5'],
    placeholder: 'placeholder',
    selectedItem: null,
    onItemSelect: () => {},
  },
  argTypes: {
    options: {
      control: false,
    },
  },
  render: (args) => {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    const handleItemSelect = (value: string) => {
      setSelectedItem(value);
    };

    return (
      <Select
        options={args.options}
        placeholder={args.placeholder}
        selectedItem={selectedItem}
        onItemSelect={handleItemSelect}
      />
    );
  },
};
