import {useState} from 'react';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {fn} from 'storybook/test';

import NumberField from './NumberField';

const meta = {
  title: 'feature/CardRegister/components/NumberField',
  component: NumberField,
  tags: ['autodocs'],
  args: {
    cardNumbers: ['', '', '', ''],
    format: [4, 4, 4, 4],
    firstErrIdx: -1,
    errMsg: '',
    onChange: fn(),
    onBlur: fn(),
  },
} satisfies Meta<typeof NumberField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Partial: Story = {
  args: {
    cardNumbers: ['1234', '56', '', ''],
  },
};

export const Filled: Story = {
  args: {
    cardNumbers: ['1234', '5678', '1234', '5678'],
  },
};

export const WithErr: Story = {
  args: {
    cardNumbers: ['1234', '56', '', ''],
    firstErrIdx: 1,
    errMsg: '카드 번호 4자리를 입력해 주세요',
  },
};

export const Interactive: Story = {
  render: function InteractiveNumberField(args) {
    const [cardNumbers, setCardNumbers] = useState(args.cardNumbers);
    const handleChange = (index: number, value: string) => {
      if (!/^\d*$/.test(value) || value.length > args.format[index]) return;
      setCardNumbers(cardNumbers.map((chunk, i) => (i === index ? value : chunk)));
    };
    return <NumberField {...args} cardNumbers={cardNumbers} onChange={handleChange} />;
  },
};
