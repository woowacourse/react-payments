import React, { useState } from 'react';
import type { Meta } from '@storybook/react';
import { ExpirationDateInput } from '../../components/addCardForm/cardInfoInputs/ExpirationDateInput';

const meta = {
  title: 'Example/Input',
  component: ExpirationDateInput,
  tags: ['autodocs'],
} satisfies Meta<typeof ExpirationDateInput>;

export default meta;

export const ExpirationDate = () => {
  const [expirationDate, setExpirationDate] = useState({
    month: '',
    year: '',
  });

  return (
    <ExpirationDateInput
      expirationDate={expirationDate}
      setExpirationDate={setExpirationDate}
      focusNextExpirationDateInput={(index: number) => {}}
      viewNextInput={() => {}}
      viewPreviousInput={() => {}}
    />
  );
};
