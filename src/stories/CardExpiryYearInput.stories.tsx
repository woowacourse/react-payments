import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import CardExpiryYearInput from '../components/CardExpiryYearInput';

const meta = {
  title: 'Components/CardExpiryYearInput',
  component: CardExpiryYearInput,
  tags: ['autodocs'],
} satisfies Meta<typeof CardExpiryYearInput>;

export default meta;
type Story = StoryObj<typeof meta>;

function Wrapper({ initialValue }: { initialValue: string }) {
  const [value, setValue] = useState(initialValue);
  return <CardExpiryYearInput value={value} onChange={(e) => setValue(e.target.value)} />;
}

export const Empty: Story = {
  render: () => <Wrapper initialValue="" />,
};

export const Filled: Story = {
  render: () => <Wrapper initialValue="26" />,
};

export const Partial: Story = {
  render: () => <Wrapper initialValue="2" />,
};
