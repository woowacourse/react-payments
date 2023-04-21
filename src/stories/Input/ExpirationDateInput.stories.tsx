import React, { useState, useRef } from 'react';
import type { Meta } from '@storybook/react';
import { ExpirationDateInput } from '../../components/input/ExpirationDateInput';

const meta = {
  title: 'Example/Input',
  component: ExpirationDateInput,
  tags: ['autodocs'],
} satisfies Meta<typeof ExpirationDateInput>;

export default meta;

export const ExpirationDate = () => {
  const monthInputRef = useRef(null);
  const yearInputRef = useRef(null);
  const [expirationDate, setExpirationDate] = useState({
    month: '',
    year: '',
  });

  return (
    <ExpirationDateInput
      monthInputRef={monthInputRef}
      yearInputRef={yearInputRef}
      moveFocusToOwnerName={() => {}}
      expirationDate={expirationDate}
      setExpirationDate={setExpirationDate}
      moveFocusToLastCardNumberInput={React.createRef}
    />
  );
};
