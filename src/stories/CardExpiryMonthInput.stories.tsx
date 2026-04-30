import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import CardExpiryMonthInput from '../components/CardExpiryMonthInput';

const meta = {
  title: 'Components/CardExpiryMonthInput',
  component: CardExpiryMonthInput,
  tags: ['autodocs'],
} satisfies Meta<typeof CardExpiryMonthInput>;

export default meta;
type Story = StoryObj<typeof meta>;

function Wrapper({ initialValue }: { initialValue: string }) {
  const [value, setValue] = useState(initialValue);
  return <CardExpiryMonthInput value={value} onChange={(e) => setValue(e.target.value)} />;
}

export const Empty: Story = {
  render: () => <Wrapper initialValue="" />,
};

export const Filled: Story = {
  render: () => <Wrapper initialValue="12" />,
};

export const Partial: Story = {
  render: () => <Wrapper initialValue="1" />,
};
