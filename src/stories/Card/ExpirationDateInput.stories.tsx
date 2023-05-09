import type { Meta, StoryFn } from '@storybook/react';
import { ExpirationDateInput } from 'components/Input';
import { useState, useRef } from 'react';

const meta = {
  title: 'Payments/Card/ExpirationDateInput',
  component: ExpirationDateInput,
  tags: ['autodocs'],
} satisfies Meta<typeof ExpirationDateInput>;

export default meta;
type Story = StoryFn<typeof meta>;

export const ExpirationDate: Story = () => {
  const monthInputRef = useRef(null);
  const [expirationDate, setExpirationDate] = useState({
    month: '',
    year: '',
  });

  return (
    <ExpirationDateInput
      monthInputRef={monthInputRef}
      expirationDate={expirationDate}
      setExpirationDate={setExpirationDate}
    />
  );
};
