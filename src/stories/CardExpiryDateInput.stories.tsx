import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import CardExpiryDateInput from '../components/CardExpiryDateInput';

const meta = {
  title: 'Components/CardExpiryDateInput',
  component: CardExpiryDateInput,
  tags: ['autodocs'],
} satisfies Meta<typeof CardExpiryDateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

function Wrapper({ initialMonth, initialYear }: { initialMonth: string; initialYear: string }) {
  const [expiryMonth, setExpiryMonth] = useState(initialMonth);
  const [expiryYear, setExpiryYear] = useState(initialYear);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = Number(e.currentTarget.dataset.index);
    if (index === 0) setExpiryMonth(e.target.value);
    else setExpiryYear(e.target.value);
  };

  return (
    <CardExpiryDateInput
      value={{ expiryMonth, expiryYear }}
      onChange={handleChange}
    />
  );
}

export const Empty: Story = {
  render: () => <Wrapper initialMonth="" initialYear="" />,
};

export const FilledMonth: Story = {
  render: () => <Wrapper initialMonth="12" initialYear="" />,
};

export const Filled: Story = {
  render: () => <Wrapper initialMonth="12" initialYear="26" />,
};

export const InvalidMonth: Story = {
  name: 'Invalid Month (blur 후 에러 확인)',
  render: () => <Wrapper initialMonth="13" initialYear="" />,
};
