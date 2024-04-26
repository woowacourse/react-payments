import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import CardNumberInput from '.';
import { fn } from '@storybook/test';

const meta = {
  title: 'CardNumberInput',
  component: CardNumberInput,
  decorators: [
    (Story) => {
      const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);
      const [cardNumberErrors, setCardNumberErrors] = useState([false, false, false, false]);

      const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newNumbers = [...cardNumbers];
        newNumbers[index] = e.target.value;

        const newErrors = [...cardNumberErrors];
        newErrors[index] = !/^\d*$/.test(e.target.value) || e.target.value.length > 4;
        setCardNumbers(newNumbers);
        setCardNumberErrors(newErrors);
      };

      return <Story {...{ cardNumbers, cardNumberErrors, onCardNumberChange: handleCardNumberChange }} />;
    },
  ],

  parameters: {
    layout: 'centered',
  },

  args: {
    cardNumbers: ['', '', '', ''],
    cardNumberErrors: [false, false, false, false],
    onCardNumberChange: fn(),
  },

  tags: ['autodocs'],
} satisfies Meta<typeof CardNumberInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumbers: ['1234', '1234', '1234', '1234'],
    cardNumberErrors: [false, false, false, false],
  },
};

export const WithError: Story = {
  args: {
    cardNumbers: ['1234', '123', 'abcd', '1234'],
    cardNumberErrors: [false, false, true, false],
  },
};
