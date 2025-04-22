import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';
import { useState } from 'react';

const meta = {
  title: 'Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isError: false,
    type: 'number',
    placeholder: '카드번호를 입력하세요',
    value: '0',
    name: 'input',
    onChange: () => {},
  },
  render: (args) => {
    const [value, setValue] = useState('0');
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setValue(value);
    };

    return <Input {...args} onChange={onChange} value={value} />;
  },
};

export const Error: Story = {
  args: {
    isError: true,
    type: 'number',
    placeholder: '카드번호를 입력하세요',
    value: '0',
    name: 'input',
    onChange: () => {},
  },
  render: (args) => {
    const [value, setValue] = useState('0');
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setValue(value);
    };

    return <Input {...args} onChange={onChange} value={value} />;
  },
};
