import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import CardNumberInput from '../components/CardNumberInput';
import type { CardNumberSegments } from '../types';

const meta = {
  title: 'Components/CardNumberInput',
  component: CardNumberInput,
  tags: ['autodocs'],
  args: {
    value: ['', '', '', ''] as CardNumberSegments,
    onChange: () => {},
  },
} satisfies Meta<typeof CardNumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

function Wrapper({ initialValue }: { initialValue: CardNumberSegments }) {
  const [value, setValue] = useState<CardNumberSegments>(initialValue);
  return (
    <CardNumberInput
      value={value}
      onChange={(e) => {
        const index = Number(e.currentTarget.dataset.index);
        const next = [...value] as CardNumberSegments;
        next[index] = e.target.value;
        setValue(next);
      }}
    />
  );
}

export const Empty: Story = {
  render: () => <Wrapper initialValue={['', '', '', '']} />,
};

export const Filled: Story = {
  render: () => <Wrapper initialValue={['1234', '5678', '9012', '3456']} />,
};

export const Partial: Story = {
  render: () => <Wrapper initialValue={['1234', '5678', '', '']} />,
};
