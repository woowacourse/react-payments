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
    setCardNumbers: fn(),
    setIsError: fn(),
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

export const Interactive: Story = {
  render: function InteractiveNumberField(args) {
    const [cardNumbers, setCardNumbers] = useState(args.cardNumbers);

    return <NumberField {...args} cardNumbers={cardNumbers} setCardNumbers={setCardNumbers} />;
  },
};
