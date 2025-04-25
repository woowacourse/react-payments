import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from '@/components/common/Flex';
import { Input } from '@/components/common/Input';
import { Select } from '@/components/common/Select';

const meta = {
  title: 'common/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '셀렉트 컴포넌트입니다.',
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectedOptions: '전체',
  },
  argTypes: {
    selectedOptions: {
      control: false,
    },
  },
  render: () => {
    const categories = ['전체', '신용카드', '체크카드', '선불카드', '기프트카드'];
    const [value, setValue] = useState<string | null>(null);
    const handleClickOption = (option: string) => {
      setValue(option);
    };
    return (
      <Flex
        direction="column"
        alignItems="flex-start"
        justifyContent="flex-start"
        width="80%"
        height="300px"
      >
        <Select selectedOptions={value ?? '전체'}>
          {categories.map((category) => (
            <Select.Option
              key={category}
              option={category}
              onSelectOption={() => handleClickOption(category)}
            >
              {category}
            </Select.Option>
          ))}
        </Select>
      </Flex>
    );
  },
};
