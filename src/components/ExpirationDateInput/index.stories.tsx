import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ExpirationDateInput from '.';

const meta = {
  title: 'ExpirationDateInput',
  component: ExpirationDateInput,
  decorators: [
    (Story) => {
      const [expirationDate, setExpirationDate] = useState(['', '']);
      const [expirationDateErrors, setExpirationDateErrors] = useState([false, false]);

      const handleExpirationDateChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value;
        const newDates = [...expirationDate];
        newDates[index] = value;
        setExpirationDate(newDates);

        const errors = [...expirationDateErrors];
        errors[index] = value.length !== 2;
        setExpirationDateErrors(errors);
      };

      return (
        <Story
          args={{
            expirationDate,
            expirationDateErrors,
            onExpirationDateChange: handleExpirationDateChange,
          }}
        />
      );
    },
  ],
  parameters: {
    layout: 'centered',
  },
  args: {
    expirationDate: ['', ''],
    expirationDateErrors: [false, false],
    onExpirationDateChange: action('onExpirationDateChange'),
  },

  tags: ['autodocs'],
} satisfies Meta<typeof ExpirationDateInput>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
