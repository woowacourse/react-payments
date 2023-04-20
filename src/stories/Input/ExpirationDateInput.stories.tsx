import React, { useState, useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ExpirationDateInput } from '../../components/input/ExpirationDateInput';

const meta = {
  title: 'Example/Input',
  component: ExpirationDateInput,
  tags: ['autodocs'],
} satisfies Meta<typeof ExpirationDateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExpirationDate = () => {
  const monthInputRef = useRef(null);
  const [expirationDate, setExpirationDate] = useState({
    month: '',
    year: '',
  });

  return (
    <ExpirationDateInput
      monthInputRef={monthInputRef}
      moveFocusToOwnerName={() => {}}
      expirationDate={expirationDate}
      setExpirationDate={setExpirationDate}
    />
  );
};
