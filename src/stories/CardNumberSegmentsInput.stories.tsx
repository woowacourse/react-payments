import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import CardNumberSegmentsInput from '../components/CardNumberSegmentsInput';
import type { CardNumberSegments } from '../types';

const meta = {
  title: 'Components/CardNumberSegmentsInput',
  component: CardNumberSegmentsInput,
  tags: ['autodocs'],
  args: {
    value: ['', '', '', ''] as CardNumberSegments,
    segmentLengths: [4, 4, 4, 4],
    onChange: () => {},
  },
} satisfies Meta<typeof CardNumberSegmentsInput>;

export default meta;
type Story = StoryObj<typeof meta>;

function Wrapper({ initialValue }: { initialValue: CardNumberSegments }) {
  const [value, setValue] = useState<CardNumberSegments>(initialValue);
  return (
    <CardNumberSegmentsInput
      value={value}
      segmentLengths={[4, 4, 4, 4]}
      onChange={(newValue) => setValue(newValue)}
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
